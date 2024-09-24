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
// import { sdk } from "./client";
import {
  limitDigitsInDecimals,
  toPercentUnit,
  toScientificNumber,
} from "../../utils/toscientificNumber";
import useSDK from "../../hooks/useSDK";
import { useMultichainContext } from "../../state/multichain/useMultichainContext";

const MarketsTable = () => {
  const [markets, setMarkets] = useState([]);
  const { chainId: contextChainID } = useMultichainContext();
  
  const sdk = useSDK()
  console.log({sdk})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const activeMarkets = await sdk.markets.getActiveMarkets();
        const ethDominance = await sdk.markets.getMarketDetails("ETH Dominance");
        console.log("ETH Dominance", ethDominance);
        const ethDominanceMarketAddress = ethDominance.marketAddress;

        const ethDominanceFundingRate = await sdk.trade.getFunding("ETH Dominance");
        console.log("ETH Dominance Funding Rate", ethDominanceFundingRate);

        const ethDominanceOIBalance = await sdk.trade.getOIBalance("ETH Dominance");
        console.log("ETH Dominance OI Balance", ethDominanceOIBalance);

        const ethDominancePrice = await sdk.trade.getPrice("ETH Dominance");
        console.log("ETH Dominance Price", ethDominancePrice);

        const collateral = 20000000000000000000 // 20
        const leverage = 10000000000000000000 // 10
        const isLong = true

        const ethDominancePriceWithParams = await sdk.trade.getPrice("ETH Dominance", collateral, leverage, isLong);
        console.log("ETH Dominance Price with params", ethDominancePriceWithParams);

        const ethDominanceBidAndAsk = await sdk.trade.getBidAndAsk("ETH Dominance");
        console.log("ETH Dominance Bid and Ask", ethDominanceBidAndAsk);

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
