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

const LiquidatedPositionsTable = () => {
  const [liquidated, setliquidated] = useState([]);
  const sdk = useSDK();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const liquidatedPositions = (await sdk.liquidatedPositions.transformLiquidatedPositions()).data;

        console.log("liquidatedPositions", liquidatedPositions);
        
        liquidatedPositions && setliquidated(liquidatedPositions);
        
      } catch (error) {
        console.error("Error fetching liquidateds:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
     <div>Liquidated positions</div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>Market Name</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Entry Price</TableCell>
              <TableCell>Exit Price</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Liquidated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {liquidated && liquidated.map((liquidated, index) => (
              <TableRow key={index}>
                <TableCell>{liquidated.marketName}</TableCell>
                <TableCell>
                  {liquidated.size}
                </TableCell>
                <TableCell>{liquidated.position}</TableCell>
                <TableCell>{liquidated.entryPrice}</TableCell>
                <TableCell>{liquidated.exitPrice}</TableCell>
                <TableCell>{liquidated.created}</TableCell>
                <TableCell>{liquidated.liquidated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default LiquidatedPositionsTable;