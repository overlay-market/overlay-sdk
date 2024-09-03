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
import { sdk } from "./client";
import { limitDigitsInDecimals, toPercentUnit, toScientificNumber } from "./utils/toscientificNumber";

const MarketsTable = () => {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const activeMarkets = await sdk.markets.getActiveMarkets()
        
        activeMarkets && setMarkets(activeMarkets);
        
      } catch (error) {
        console.error("Error fetching markets:", error);
      }
    };

    fetchData();
  }, []);
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
                index={index + 1} //start count at 1
                marketId={market.marketAddress}
                marketName={market.marketName}
                midPrice={market.parsedMid}
                oiLong={market.parsedOiLong}
                oiShort={market.parsedOiShort}
                dailyFundingRate={market.parsedDailyFundingRate}
                oracleLogo={undefined}
                // oracleLogo={MarketDetails[market.marketAddress.toLowerCase()].oracleLogo ?? market.oracleLogo}
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
  midPrice = '',
  oiLong,
  oiShort,
  dailyFundingRate,
  oracleLogo,
  marketLogo,
  priceCurrency = '',
}) => {

  const [long, setLong] = useState(0)
  const [short, setShort] = useState(0)
  const [total, setTotal] = useState(0)
 
  useEffect(() => {
    if (oiLong !== undefined) setLong(Number(oiLong))
    if (oiShort !== undefined) setShort(Number(oiShort))
  }, [oiLong, oiShort])

  useEffect(() => setTotal(long + short), [long, short])

  const defaultZero = '00.00'

  const shortPercentageOfTotalOi = Number.isFinite(short) && Number.isFinite(total) && total > 0 ? ((short / total) * 100).toFixed(2) : defaultZero

  const longPercentageOfTotalOi = Number.isFinite(long) && Number.isFinite(total) && total > 0 ? ((long / total) * 100).toFixed(2) : defaultZero

  const isFundingRatePositive = Math.sign(Number(dailyFundingRate)) > 0

  return (
    <TableRow key={index}>
      <TableCell>{index}</TableCell>
      <TableCell>{marketLogo ? <img src={marketLogo} alt="Market Feed Logo" /> : '-'}{marketName}</TableCell>
      <TableCell>{priceCurrency}
          {priceCurrency === '%'
            ? toPercentUnit(midPrice)
            : toScientificNumber(Number(midPrice) < 100000 ? limitDigitsInDecimals(midPrice) : Math.floor(Number(midPrice)).toLocaleString('en-US'))}</TableCell>
      <TableCell> 
        {isFundingRatePositive ? `+` : ``}
        {dailyFundingRate}%
      </TableCell>
      <TableCell>
        {shortPercentageOfTotalOi}%
        --- 
        {longPercentageOfTotalOi}%
        
      </TableCell>
      <TableCell><img src={oracleLogo} alt="Market Feed Logo" /></TableCell>
    </TableRow>
  )
}