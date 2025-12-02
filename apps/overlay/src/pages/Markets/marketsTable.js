import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  limitDigitsInDecimals,
  toPercentUnit,
  toScientificNumber,
} from "../../utils/toscientificNumber";
import useSDK from "../../hooks/useSDK";
import { useMultichainContext } from "../../state/multichain/useMultichainContext";
import { useAccount } from "../../hooks/useAccount";
import { toWei } from "overlay-sdk/dist/common/utils/formatWei";

const MarketsTable = () => {
  const [markets, setMarkets] = useState([]);
  const { chainId: contextChainID } = useMultichainContext();
  
  const { address } = useAccount();
  
  const sdk = useSDK()
  console.log({sdk})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const activeMarkets = await sdk.markets.getActiveMarkets();

        const transformedMarketData = await sdk.markets.transformMarketsData()
        console.log(' ================= Transformed Market Data', transformedMarketData)

        const ethDominance = await sdk.markets.getMarketDetails(process.env.REACT_APP_MARKET_ID ?? "MrBeast Index");
        console.log(process.env.REACT_APP_MARKET_ID ?? "MrBeast Index", ethDominance);

        const ethDominanceFundingRate = await sdk.trade.getFunding(process.env.REACT_APP_MARKET_ID ?? "MrBeast Index");
        console.log("Elon Musk Mood Index Funding Rate", ethDominanceFundingRate);

        const ethDominanceOIBalance = await sdk.trade.getOIBalance(process.env.REACT_APP_MARKET_ID ?? "MrBeast Index");
        console.log("Elon Musk Mood Index OI Balance", ethDominanceOIBalance);

        const ethDominancePrice = await sdk.trade.getPrice(process.env.REACT_APP_MARKET_ID ?? "MrBeast Index");
        console.log("Elon Musk Mood Index Price", ethDominancePrice);

        const collateral = toWei("900.666") // 900
        console.log("Collateral", collateral);
        const leverage = toWei(10) // 10
        console.log("Leverage", leverage);
        const isLong = true
        const slippage = 1 // 1

        const ethDominancePriceWithParams = await sdk.trade.getPrice(process.env.REACT_APP_MARKET_ID ?? "MrBeast Index", collateral, leverage, isLong);
        console.log("Elon Musk Mood Index Price with params", ethDominancePriceWithParams);

        const ethDominanceBidAndAsk = await sdk.trade.getBidAndAsk(process.env.REACT_APP_MARKET_ID ?? "MrBeast Index", 2);
        console.log("Elon Musk Mood Index Bid and Ask", ethDominanceBidAndAsk);

        const ethDominancePriceInfo = await sdk.trade.getPriceInfo(process.env.REACT_APP_MARKET_ID ?? "MrBeast Index", collateral, leverage, slippage, isLong);
        console.log("Elon Musk Mood Index Price Info", ethDominancePriceInfo);

        const ethDominanceMaxAmount = await sdk.trade.getMaxInputIncludingFees(process.env.REACT_APP_MARKET_ID ?? "MrBeast Index", address, leverage);
        console.log("Elon Musk Mood Index Max Amount", ethDominanceMaxAmount);

        const ethDominanceFee = await sdk.trade.getFee(process.env.REACT_APP_MARKET_ID ?? "MrBeast Index");
        console.log("Elon Musk Mood Index Fee", ethDominanceFee);

        const ethDominanceLiquidationPriceEstimate = await sdk.trade.getLiquidationPriceEstimate(process.env.REACT_APP_MARKET_ID ?? "MrBeast Index", collateral, leverage, isLong);
        console.log("Elon Musk Mood Index Liquidation Price Estimate", ethDominanceLiquidationPriceEstimate);

        const ethDominanceOiEstimate = await sdk.trade.getOiEstimate(process.env.REACT_APP_MARKET_ID ?? "MrBeast Index", collateral, leverage, isLong);
        console.log("Elon Musk Mood Index OI Estimate", ethDominanceOiEstimate);

        const ethDominanceBuildState = await sdk.trade.getTradeState(process.env.REACT_APP_MARKET_ID ?? "MrBeast Index", collateral, leverage, slippage, isLong, address);
        console.log("Elon Musk Mood Index Build State", ethDominanceBuildState);

        const overviewData = await sdk.accountDetails.getOverview('1M');
        console.log(" ================= Overview Data", overviewData);

        try {
          // replace by your own trade id
          const positionDetails = await sdk.trade.getUnwindState(process.env.REACT_APP_MARKET_ID ?? "MrBeast Index", address, 462522, 1n ** 18n, 4)
          console.log(" ================= Position Details", positionDetails);
        } catch (error) {
          console.log(" ================= Position Details ERROR", error);
        }

        activeMarkets && setMarkets(activeMarkets);
      } catch (error) {
        console.error("Error fetching markets:", error);
      }
    };

    fetchData();
  }, [contextChainID]);
  console.log({markets})
  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Market Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Funding</TableCell>
              <TableCell>OI Balance</TableCell>
              <TableCell>Oracle</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {markets && markets.map((market, index) => (
              <MarketsRow 
                key={market.marketAddress}
                index={index + 1} 
                marketName={market.marketName}
                midPrice={market.parsedMid}
                oiLong={market.parsedOiLong}
                oiShort={market.parsedOiShort}
                dailyFundingRate={market.parsedDailyFundingRate}
                oracleLogo={market.oracleLogo}
                marketLogo={market.marketLogo}
                priceCurrency={market.priceCurrency}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MarketsTable;

const MarketsRow = ({
  index,
  marketName,
  midPrice = "",
  oiLong,
  oiShort,
  dailyFundingRate,
  oracleLogo,
  marketLogo,
  priceCurrency = "",
}) => {
  const [long, setLong] = useState(0);
  const [short, setShort] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (oiLong !== undefined) setLong(Number(oiLong));
    if (oiShort !== undefined) setShort(Number(oiShort));
  }, [oiLong, oiShort]);

  useEffect(() => setTotal(long + short), [long, short]);

  const defaultZero = "00.00";

  const shortPercentageOfTotalOi =
    Number.isFinite(short) && Number.isFinite(total) && total > 0
      ? ((short / total) * 100).toFixed(2)
      : defaultZero;

  const longPercentageOfTotalOi =
    Number.isFinite(long) && Number.isFinite(total) && total > 0
      ? ((long / total) * 100).toFixed(2)
      : defaultZero;

  const isFundingRatePositive = Math.sign(Number(dailyFundingRate)) > 0;

  return (
    <TableRow key={index}>
      <TableCell>{index}</TableCell>
      <TableCell>
        {marketLogo ? (
          <img
            src={marketLogo}
            alt="Market Feed Logo"
            width="30px"
            height="30px"
          />
        ) : (
          "-"
        )}
        {marketName}
      </TableCell>
      <TableCell>
        {priceCurrency}
        {priceCurrency === "%"
          ? toPercentUnit(midPrice)
          : toScientificNumber(
              Number(midPrice) < 100000
                ? limitDigitsInDecimals(midPrice)
                : Math.floor(Number(midPrice)).toLocaleString("en-US")
            )}
      </TableCell>
      <TableCell>
        {isFundingRatePositive ? `+` : ``}
        {dailyFundingRate}%
      </TableCell>
      <TableCell>
        {shortPercentageOfTotalOi}% ---
        {longPercentageOfTotalOi}%
      </TableCell>
      <TableCell>
        <img
          src={oracleLogo}
          alt="Market Feed Logo"
          width="20px"
          height="20px"
        />
      </TableCell>
    </TableRow>
  );
};
