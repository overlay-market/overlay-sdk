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
import useSDK from "./hooks/useSDK";

const PositionsTable = () => {
  const [positions, setPositions] = useState([]);
  const [openPositions, setOpenPositions] = useState([]);
  const sdk = useSDK();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const transformUnwindPositions = await sdk.unwindPositions.transformUnwindPositions(1, 10, "AI Index");
        console.log("unwind positions", transformUnwindPositions);

        const transformedOpenPositions = await sdk.openPositions.transformOpenPositions(1, 10, "ETH Dominance");
        console.log("open positions", transformedOpenPositions);

        const transformedLiquidations = await sdk.liquidatedPositions.transformLiquidatedPositions(1, 10, "ETH / SOL");
        console.log("liquidated positions", transformedLiquidations);

        setPositions(transformUnwindPositions.data);
        setOpenPositions(transformedOpenPositions.data);
      } catch (error) {
        console.error("Error fetching positions:", error);
        if (
          error instanceof Error &&
          error.message.includes("auth error: payment required")
        ) {
          console.error(
            "API key payment required. Please update your subscription or contact support."
          );
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Market Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Created Timestamp</TableCell>
              <TableCell>Closed Timestamp</TableCell>
              <TableCell>Entry Price</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Pnl</TableCell>
              <TableCell>Exit Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {positions.map((position, index) => (
              <TableRow key={index}>
                <TableCell>{position.marketName}</TableCell>
                <TableCell>{position.positionSide}</TableCell>
                <TableCell>{position.parsedCreatedTimestamp}</TableCell>
                <TableCell>{position.parsedClosedTimestamp}</TableCell>
                <TableCell>{position.entryPrice}</TableCell>
                <TableCell>{position.size}</TableCell>
                <TableCell>{position.pnl}</TableCell>
                <TableCell>{position.exitPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
            <br></br>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Market Name</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Entry Price</TableCell>
              <TableCell>current Price</TableCell>
              <TableCell>Liq. Price</TableCell>
              <TableCell>Created Timestamp</TableCell>
              <TableCell>Unrealized PnL</TableCell>
              <TableCell>Funding</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {openPositions.map((position, index) => (
              <TableRow key={index}>
                <TableCell>{position.marketName}</TableCell>
                <TableCell>{position.size}</TableCell>
                <TableCell>{position.positionSide}</TableCell>
                <TableCell>{position.entryPrice}</TableCell>
                <TableCell>{position.currentPrice}</TableCell>
                <TableCell>{position.liquidatePrice}</TableCell>
                <TableCell>{position.parsedCreatedTimestamp}</TableCell>
                <TableCell>{position.unrealizedPnL}</TableCell>
                <TableCell>{position.parsedFunding}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PositionsTable;
