import { Address, zeroAddress } from "viem";
import { CHAINS, invariant } from "../common";
import { OverlaySDKModule } from "../common/class-primitives/sdk-module";
import { OVL_ADDRESS, SHIVA_ADDRESS } from "../constants";
import { OverlaySDKCommonProps } from "../core/types";
import { OverlaySDK } from "../sdk";
import { formatBigNumber, formatFundingRateToDaily } from "../common/utils";
import { TradeState, TradeStateOnchainData, UnwindState, UnwindStateData } from "./types";
import { getPositionDetails } from "../subgraph";
import { OverlayV1StateABI } from "../markets/abis/OverlayV1State";
import { OverlayV1Market2ABI } from "../markets/abis/OverlayV1Market2";
import { erc20abi } from "../ovl/abi/erc20abi";

export class OverlaySDKTrade extends OverlaySDKModule {
  private sdk: OverlaySDK;

  constructor(props: OverlaySDKCommonProps, sdk: OverlaySDK) {
    super(props);
    this.sdk = sdk;
  }

  private _getMarketAddressAndChainId = async (marketId: string) => {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");
    const {marketAddress} = await this.sdk.markets.getMarketDetails(marketId)
    return {marketAddress, chainId}
  }

  private async getPeriphery(marketAddress: Address): Promise<Address> {
    return this.sdk.market.periphery(marketAddress);
  }

  public async getFunding(marketId: string) {
    const { marketAddress } = await this._getMarketAddressAndChainId(marketId)

    const periphery = await this.getPeriphery(marketAddress)
    const result = await this.sdk.state.getMarketState(periphery, marketAddress)
    invariant(result, "Market state not found");

    return formatFundingRateToDaily(result.fundingRate, 18, 2)
  }

  public async getOIBalance(marketId: string, decimals?: number) {
    const { marketAddress } = await this._getMarketAddressAndChainId(marketId)

    const periphery = await this.getPeriphery(marketAddress)
    const {oiLong, oiShort} = await this.sdk.state.getMarketState(periphery, marketAddress)

    const shortPercentageOfTotalOi = (Number(oiShort) / (Number(oiLong) + Number(oiShort)) * 100).toFixed(2)
    const longPercentageOfTotalOi = (Number(oiLong) / (Number(oiLong) + Number(oiShort)) * 100).toFixed(2)

    return {
      long: decimals ? formatBigNumber(oiLong, 18, decimals) : oiLong,
      short: decimals ? formatBigNumber(oiShort, 18, decimals) : oiShort,
      shortPercentageOfTotalOi,
      longPercentageOfTotalOi
    }
  }

  public async getPrice(marketId: string, collateral?: bigint, leverage?: bigint, isLong?: boolean, decimals?: number) {
    const { marketAddress } = await this._getMarketAddressAndChainId(marketId)

    const periphery = await this.getPeriphery(marketAddress)

    if (!collateral || !leverage || isLong === undefined) {
      const midPrice = await this.sdk.state.getMidPrice(periphery, marketAddress)

      return decimals ? formatBigNumber(midPrice, 18, decimals) : midPrice
    }

    const oiEstimated = await this.sdk.state.getOiEstimate(periphery, marketAddress, collateral, leverage, isLong)

    return this._getPrice(periphery, marketAddress, oiEstimated, isLong, decimals)
  }

  private async _getPrice(periphery: Address, marketAddress: Address, oiEstimated: bigint, isLong: boolean, decimals?: number) {
    const fractionOfCapOi = await this.sdk.state.getFractionOfCapOi(periphery, marketAddress, oiEstimated)

    let estimatedPrice: bigint

    if (isLong) {
      estimatedPrice = await this.sdk.state.getAsk(periphery, marketAddress, fractionOfCapOi)
    } else {
      estimatedPrice = await this.sdk.state.getBid(periphery, marketAddress, fractionOfCapOi)
    }

    return decimals ? formatBigNumber(estimatedPrice, 18, decimals) : estimatedPrice
  }

  public async getPriceInfo(marketId: string, collateral: bigint, leverage: bigint, slippage: number, isLong: boolean, decimals?: number) {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");

    const price = await this.getPrice(marketId, collateral, leverage, isLong) as bigint
    const res = await this.getBidAndAsk(marketId)
    const bid = BigInt(res.bid)
    const ask = BigInt(res.ask)

    return this._getPriceInfo(slippage, isLong, price, ask, bid, decimals)
  }

  private _getPriceInfo(slippage: number, isLong: boolean, price: bigint, ask: bigint, bid: bigint, decimals?: number) {
    // calculate min or max price
    const increasePercentage = (slippage + 100) * 100
    const decreasePercentage = (100 - slippage) * 100
    const base = BigInt(10000)
    const minPrice = isLong ? price * BigInt(increasePercentage) / base : price * BigInt(decreasePercentage) / base

    // calculate price impact
    const priceImpactValue = isLong ? price - ask : bid - price;
    const priceImpactPercentage = (isLong ? Number(priceImpactValue) / Number(ask) : Number(priceImpactValue) / Number(bid)) * 100

    return {
      price: decimals ? formatBigNumber(price, 18, decimals) : price,
      minPrice: decimals ? formatBigNumber(minPrice, 18, decimals) : minPrice,
      priceImpactPercentage: priceImpactPercentage.toFixed(2)
    }
  }

  public async getUnwindPrice(marketId: string, owner: Address, positionId: bigint, fraction: bigint, slippage: number, decimals?: number) {
    // validate fraction is between 0 and 1 ** 18
    invariant(fraction >= 0n && fraction <= 10n ** 18n, "Fraction must be between 0 and 1");
    const {marketAddress} = await this._getMarketAddressAndChainId(marketId)

    const {oiShares, isLong} = await this.sdk.market.getOiShares(marketAddress, positionId, owner)
    console.log(oiShares, isLong)
    const oiSharesFraction = oiShares * fraction / 10n ** 18n
    console.log(oiSharesFraction)

    const priceInfo = await this.getPriceInfo(marketId, oiSharesFraction, 10n ** 18n, slippage, !isLong, decimals)

    return priceInfo.minPrice
  }

  public async getBidAndAsk(marketId: string, decimals?: number) {
    const { marketAddress } = await this._getMarketAddressAndChainId(marketId)

    const periphery = await this.getPeriphery(marketAddress)
    const result = await this.sdk.state.getMarketState(periphery, marketAddress)

    return {
      bid: decimals ? formatBigNumber(result.bid, 18, decimals) : result.bid,
      ask: decimals ? formatBigNumber(result.ask, 18, decimals) : result.ask
    }
  }

  public async getMaxInputIncludingFees(marketId: string, address: Address, leverage: bigint,  decimals: number = 18) {
    const {marketAddress} = await this._getMarketAddressAndChainId(marketId)

    const tradingFeeRate = await this.sdk.market.getTradingFeeRate(marketAddress)
    const balance = await this.sdk.ovl.balance(address) as bigint

    return this._getMaxInputIncludingFees(tradingFeeRate, balance, leverage, decimals)
  }

  public async getMaxInputIncludingFeesFromBalance(marketId: string, ovlBalance: bigint, leverage: bigint,  decimals: number = 18) {
    const {marketAddress} = await this._getMarketAddressAndChainId(marketId)

    const tradingFeeRate = await this.sdk.market.getTradingFeeRate(marketAddress)

    return this._getMaxInputIncludingFees(tradingFeeRate, ovlBalance, leverage, decimals)
  }

  private _getMaxInputIncludingFees(tradingFeeRate: bigint, balance: bigint, leverage: bigint, decimals: number = 18) {
    const tradingFeeRateParsed = formatBigNumber(tradingFeeRate, 18, 6, true) as number
    const balanceParsed = formatBigNumber(balance, 18, 18, true) as number

    const returnValue = balanceParsed/(1+tradingFeeRateParsed * (formatBigNumber(leverage, 18, 18, true) as number))
  
    return Math.trunc(returnValue * Math.pow(10, decimals)) / Math.pow(10, decimals)
  }

  public async getFee(marketId: string) {
    const {marketAddress} = await this._getMarketAddressAndChainId(marketId)
    const tradingFeeRate = await this.sdk.market.getTradingFeeRate(marketAddress)

    return this._getFee(tradingFeeRate)
  }

  private _getFee(tradingFeeRate: bigint) {
    const tradingFeeRateParsed = formatBigNumber(tradingFeeRate, 18, 6, true) as number
    return tradingFeeRateParsed * 100
  }

  public async getLiquidationPriceEstimate(marketId: string, collateral: bigint, leverage: bigint, isLong: boolean, decimals?: number) {
    const { marketAddress } = await this._getMarketAddressAndChainId(marketId)
    const periphery = await this.getPeriphery(marketAddress)
    const liquidationPrice = await this.sdk.state.getLiquidationPriceEstimate(periphery, marketAddress, collateral, leverage, isLong)

    return this._getLiquidationPriceEstimate(liquidationPrice, decimals)
  }

  private _getLiquidationPriceEstimate (liquidationPrice: bigint, decimals?: number) {
    return formatBigNumber(liquidationPrice, 18, decimals || 5)
  }

  public async getOiEstimate(marketId: string, collateral: bigint, leverage: bigint, isLong: boolean, decimals?: number) {
    const { marketAddress } = await this._getMarketAddressAndChainId(marketId)
    const periphery = await this.getPeriphery(marketAddress)
    const oi = await this.sdk.state.getOiEstimate(periphery, marketAddress, collateral, leverage, isLong)

    return decimals ? formatBigNumber(oi, 18, decimals) : oi
  }

  // this function returns the status of a trade which is going to be built
  // since internally it uses other functions, this function will also return the values of: getLiquidationPriceEstimate, getOiEstimate, getMaxInputIncludingFees, and getPriceInfo
  public async getTradeState(
    marketId: string,
    collateral: bigint,
    leverage: bigint,
    slippage: number,
    isLong: boolean,
    address: Address,
    collateralType: 'OVL' | 'USDT' = 'OVL'
  ) {
    console.error('🔵 getTradeState CALLED with collateralType:', collateralType, 'collateral:', collateral.toString())

    const {marketAddress, chainId} = await this._getMarketAddressAndChainId(marketId)
    const periphery = await this.getPeriphery(marketAddress)

    const {
      midPrice,
      oiEstimated: rawExpectedOi,
      ois,
      capOi,
      circuitBreakerLevel,
      liquidationPrice,
      marketState,
      minCollateral,
      tradingFeeRate: rawTradingFeeRate,
      balance,
      currentAllowance
    } = await this._getTradeStateData(chainId, marketAddress, periphery, collateral, leverage, isLong, address, collateralType)

    console.log('[SDK DEBUG] After multicall - currentAllowance:', currentAllowance.toString());
    console.log('[SDK DEBUG] After multicall - collateral required:', collateral.toString());
    console.log('[SDK DEBUG] After multicall - balance:', balance.toString());

    const liquidationPriceEstimate = this._getLiquidationPriceEstimate(liquidationPrice)
    const maxInputIncludingFees = this._getMaxInputIncludingFees(rawTradingFeeRate, balance, leverage)
    const price = await this._getPrice(periphery, marketAddress, rawExpectedOi, isLong) as bigint
    const priceInfo = await this._getPriceInfo(slippage, isLong, price, marketState.ask, marketState.bid, 18)
    const tradingFeeRate = this._getFee(rawTradingFeeRate)

    invariant(capOi, "Cap OI not found");

    const rawOiLong = ois[0]
    const rawOiShort = ois[1]
    const rawCapOi = capOi

    const midPriceParsed = formatBigNumber(midPrice, 18, 18, true) as number
    const showUnderwaterFlow = isLong ? Number(liquidationPriceEstimate) > midPriceParsed : Number(liquidationPriceEstimate) < midPriceParsed

    const exceedOiCap = isLong ? BigInt(rawExpectedOi) + rawOiLong > rawCapOi : BigInt(rawExpectedOi) + rawOiShort > rawCapOi

    const exceedCircuitBreakerOiCap = isLong
      ? (BigInt(rawExpectedOi) + rawOiLong) > (rawCapOi * circuitBreakerLevel / 10n ** 18n)
      : (BigInt(rawExpectedOi) + rawOiShort) > (rawCapOi * circuitBreakerLevel / 10n ** 18n)

    const formattedMinCollateral = formatBigNumber(minCollateral, 18, 18, true) as number

    const showBalanceNotEnoughWarning = maxInputIncludingFees && formattedMinCollateral && +maxInputIncludingFees < formattedMinCollateral ? true : false

    const showApprovalFlow = currentAllowance < collateral
    console.log('[SDK DEBUG] showApprovalFlow:', showApprovalFlow, '(allowance < collateral)')
    console.log('[SDK DEBUG] Comparison:', {
      currentAllowance: currentAllowance.toString(),
      collateral: collateral.toString(),
      needsApproval: currentAllowance < collateral
    })

    // Force log to ensure we see it
    console.error('🔴 APPROVAL CHECK:', showApprovalFlow ? 'NEEDS APPROVAL' : 'HAS APPROVAL')

    const isPriceImpactHigh = Number(priceInfo.priceImpactPercentage) - Number(slippage) > 0

    const amountExceedsMaxInput = 
      Number(formatBigNumber(collateral, 18, 18)) > maxInputIncludingFees
    
    const amountBelowMinCollateral = 
      Number(formatBigNumber(collateral, 18, 18)) < formattedMinCollateral  

    // determine estimated collateral
    const preAdjustedOi = Number(formatBigNumber(collateral, 18, 18)) * Number(formatBigNumber(leverage, 18, 18))
    const calculatedBuildFee = Number(preAdjustedOi) * tradingFeeRate / 100
    const estimatedCollateral = Number(formatBigNumber(collateral, 18, 18)) + calculatedBuildFee
    
    let tradeState: TradeState = TradeState.Trade
    if (showUnderwaterFlow) tradeState = TradeState.PositionUnderwater
    if (exceedOiCap) tradeState = TradeState.ExceedsOICap
    if (exceedCircuitBreakerOiCap) tradeState = TradeState.ExceedsCircuitBreakerOICap
    if (showBalanceNotEnoughWarning) tradeState = TradeState.OVLBalanceBelowMinimum
    if (isPriceImpactHigh) tradeState = TradeState.TradeHighPriceImpact
    if (amountExceedsMaxInput) tradeState = TradeState.AmountExceedsMaxInput
    if (amountBelowMinCollateral) tradeState = TradeState.AmountBelowMinCollateral
    if (showApprovalFlow) tradeState = TradeState.NeedsApproval

    console.error('🟢 FINAL TRADE STATE:', tradeState)

    return {
      liquidationPriceEstimate,
      expectedOi: formatBigNumber(BigInt(rawExpectedOi), 18, 18),
      maxInputIncludingFees,
      priceInfo,
      tradeState,
      tradingFeeRate,
      estimatedCollateral
    }
  }

  public async getUnwindState(
    marketAddress: Address,
    account: Address,
    posId: number,
    unwindPercentage: number, // 0.01 - 1
    slippage: number,
    decimals?: number
  ): Promise<UnwindStateData> {
    const chainId = this.core.chainId
    invariant(chainId in CHAINS, "Unsupported chainId");
    invariant(Math.round(slippage * 100) === slippage * 100, "Slippage should be a number with at most 2 decimal places")

    const periphery = await this.getPeriphery(marketAddress)

    const positionId = BigInt(posId)
    const marketPositionId = `${marketAddress.toLowerCase()}-0x${Number(positionId).toString(16)}`

    const positionDetails = await getPositionDetails(chainId, account.toLowerCase(), marketPositionId) ?? null
    invariant(positionDetails, `Position not found for ${marketPositionId}; ${account.toLowerCase()}; ${positionId}; marketAddress: ${marketAddress}; chainId: ${chainId}`)

    if (!positionDetails) return { error: "Position not found", isShutdown: false, cost: 0, unwindState: UnwindState.PositionNotFound, positionId: posId, marketAddress }

    const positionAccount = (positionDetails.router.id === zeroAddress ? account.toLowerCase() : SHIVA_ADDRESS[chainId].toLowerCase()) as Address

    if (positionDetails.market.isShutdown) {
      const cost = await this.sdk.state.getCost(periphery, marketAddress, positionAccount, positionId)
      return { 
        error: "Market is shutdown", 
        isShutdown: true, 
        cost: decimals ? formatBigNumber(cost, 18, decimals) : cost,
        unwindState: UnwindState.Withdraw,
        positionId: posId,
        marketAddress
      }
    } 

    const { 
      cost, 
      currentOi, 
      info, 
      liquidatePrice, 
      marketMid, 
      positionValue, 
      debt,
      collateral,
      notional,
      maintenanceMargin,
      prices
    } = await this.sdk.openPositions.getOpenPositionData(chainId, positionAccount, marketAddress, positionId)

    const fractionOfCapOi = await this.sdk.state.getFractionOfCapOi(periphery, marketAddress, currentOi)

    let estimatedPrice: bigint

    if (info.isLong) {
      estimatedPrice = await this.sdk.state.getBid(periphery, marketAddress, fractionOfCapOi)
    } else {
      estimatedPrice = await this.sdk.state.getAsk(periphery, marketAddress, fractionOfCapOi)
    }

    const pnl = positionValue - cost

    const priceImpactValue = info.isLong ? prices.bid - estimatedPrice : estimatedPrice - prices.ask
    const priceImpactPercentage = (info.isLong ? Number(priceImpactValue) / Number(prices.ask) : Number(priceImpactValue) / Number(prices.bid)) * 100

    let unwindState: UnwindState = UnwindState.Unwind
    if (1 < unwindPercentage) unwindState = UnwindState.UnwindAmountTooHigh
    if (0.01 > unwindPercentage) unwindState = UnwindState.PercentageBelowMinimum

    const percentageBigInt = BigInt(Math.round(unwindPercentage * 10000));
    const fractionValue = percentageBigInt * positionValue / 10000n
    const fractionOI = percentageBigInt * currentOi / 10000n

    const showUnderwaterFlow = info.isLong ? Number(liquidatePrice) > Number(marketMid) : Number(liquidatePrice) < Number(marketMid)
    if (showUnderwaterFlow) unwindState = UnwindState.PositionUnderwater

    const slippageFactor = BigInt(Math.round(slippage * 100)); // Convert slippage to an integer representation
    const base = BigInt(10000); // Base factor to avoid decimals

    const priceLimit = info.isLong
      ? (estimatedPrice * (base - slippageFactor)) / base
      : (estimatedPrice * (base + slippageFactor)) / base;

    return {
      pnl: formatBigNumber(pnl, 18, 2),
      side: info.isLong ? "Long" : "Short",
      value: formatBigNumber(positionValue, 18, 4),
      fractionValue: formatBigNumber(fractionValue, 18, 4),
      oi: formatBigNumber(currentOi, 18, 4),
      fractionOi: formatBigNumber(fractionOI, 18, 4),
      leverage: Number(positionDetails.leverage).toFixed(1),
      debt: formatBigNumber(debt, 18, 4),
      cost: formatBigNumber(cost, 18, 4),
      currentCollateral: formatBigNumber(collateral, 18, 4),
      currentNotional: formatBigNumber(notional, 18, 4),
      initialCollateral: formatBigNumber(positionDetails.initialCollateral, 18, 4),
      initialNotional: formatBigNumber(positionDetails.initialNotional, 18, 4),
      maintenanceMargin: formatBigNumber(maintenanceMargin, 18, 4),
      entryPrice: decimals ? formatBigNumber(positionDetails.entryPrice, 18, decimals) : positionDetails.entryPrice,
      currentPrice: info.isLong ? decimals ? formatBigNumber(prices.bid, 18, decimals) : prices.bid : decimals ? formatBigNumber(prices.ask, 18, decimals) : prices.ask,
      estimatedReceivedPrice: decimals ? formatBigNumber(estimatedPrice, 18, decimals) : estimatedPrice,
      priceImpact: priceImpactPercentage.toFixed(6),
      liquidationPrice: decimals ? formatBigNumber(liquidatePrice, 18, decimals) : liquidatePrice,
      unwindState,
      priceLimit,
      positionId: posId,
      marketAddress,
      useShiva: positionDetails.router.id !== zeroAddress
    } as UnwindStateData
  }

  private async _getTradeStateData(
    chainId: CHAINS,
    marketAddress: Address,
    periphery: Address,
    collateral: bigint,
    leverage: bigint,
    isLong: boolean,
    userAddress: Address,
    collateralType: 'OVL' | 'USDT' = 'OVL'
  ): Promise<TradeStateOnchainData> {
    const OverlayV1MarketABIFunctions = OverlayV1Market2ABI.filter((abi) => abi.type === "function")
    const OverlayV1StateABIFunctions = OverlayV1StateABI.filter((abi) => abi.type === "function")
    const OVLTokenABIFunctions = erc20abi.filter((abi) => abi.type === "function")

    const marketContract = { address: marketAddress, abi: OverlayV1MarketABIFunctions }
    const stateContract = { address: periphery, abi: OverlayV1StateABIFunctions }
    const ovlContract = { address: OVL_ADDRESS[chainId], abi: OVLTokenABIFunctions }

    // Get allowance contract details based on collateral type
    let allowanceContract;
    let allowanceSpender;

    console.log('[SDK DEBUG] collateralType:', collateralType);
    console.log('[SDK DEBUG] collateral amount:', collateral.toString());

    if (collateralType === 'USDT') {
      // For USDT: check stable token allowance to LBSC
      const stableTokenAddress = await this.sdk.lbsc.getStableTokenAddress();
      const lbscAddress = await this.sdk.lbsc.getLbscAddress();
      console.log('[SDK DEBUG] USDT mode - stableTokenAddress:', stableTokenAddress);
      console.log('[SDK DEBUG] USDT mode - lbscAddress (spender):', lbscAddress);
      allowanceContract = { address: stableTokenAddress, abi: OVLTokenABIFunctions };
      allowanceSpender = lbscAddress;
    } else {
      // For OVL: check OVL allowance to Market or Shiva
      allowanceContract = ovlContract;
      allowanceSpender = this.core.usingShiva() ? SHIVA_ADDRESS[chainId] : marketAddress;
      console.log('[SDK DEBUG] OVL mode - spender:', allowanceSpender);
    }
    
    const [
      midPrice,
      oiEstimated,
      ois,
      capOi,
      circuitBreakerLevel,
      liquidationPrice,
      marketState,
      minCollateral,
      tradingFeeRate,
      balance,
      currentAllowance
    ] = await this.core.rpcProvider.multicall({
        allowFailure: false,
        contracts: [
          {
            ...stateContract,
            functionName: "mid",
            args: [marketAddress],
          },
          {
            ...stateContract,
            functionName: "oiEstimate",
            args: [marketAddress, collateral, leverage, isLong],
          },
          {
            ...stateContract,
            functionName: "ois",
            args: [marketAddress],
          },
          {
            ...stateContract,
            functionName: "capOi",
            args: [marketAddress],
          },
          {
            ...stateContract,
            functionName: "circuitBreakerLevel",
            args: [marketAddress],
          },
          {
            ...stateContract,
            functionName: "liquidationPriceEstimate",
            args: [marketAddress, collateral, leverage, isLong],
          },
          {
            ...stateContract,
            functionName: "marketState",
            args: [marketAddress],
          },
          {
            ...marketContract,
            functionName: "params",
            args: [12n], // getMinCollateral
          },
          {
            ...marketContract,
            functionName: "params",
            args: [11n], // getTradingFeeRate
          },
          {
            ...ovlContract,
            functionName: "balanceOf",
            args: [userAddress],
          },
          {
            ...allowanceContract,
            functionName: "allowance",
            args: [userAddress, allowanceSpender],
          },
        ] as const
    });

    return {
      midPrice,
      oiEstimated,
      ois: [ois[0], ois[1]],
      capOi,
      circuitBreakerLevel,
      liquidationPrice,
      marketState,
      minCollateral,
      tradingFeeRate,
      balance,
      currentAllowance
    }
  }
}
