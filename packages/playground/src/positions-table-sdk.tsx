// src/UnwindTable.tsx
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
import { getUnwindPositions, transformUnwindPositions } from "sdk/src/index";
import { LINKS } from "sdk/src/constants";

type TransformedUnwind = {
  marketName: string | undefined;
  positionSide: string | undefined;
  parsedCreatedTimestamp: string | undefined;
  parsedClosedTimestamp: string | undefined;
  entryPrice: string | undefined;
  size: string | undefined;
  exitPrice: string | undefined;
  pnl: string | number | undefined;
};

const PositionsTable = () => {
  const [positions, setPositions] = useState<TransformedUnwind[]>([]);

  const url = LINKS.URL;
  const account = "0x42e372d3ab3ac53036997bae6d1ab77c2ecd64b3";
  const first = 10;
  const skip = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("url", url);
        const rawData = await getUnwindPositions({
          url,
          account,
          first,
          skip,
        });
        const transformedData = await transformUnwindPositions(rawData);
        console.log("transformedData", transformedData);
        setPositions(transformedData);
      } catch (error) {
        console.error("Error fetching positions:", error);
        // Check if the error message includes "auth error: payment required"
        if (
          error instanceof Error &&
          error.message.includes("auth error: payment required")
        ) {
          // Handle the specific error, e.g., notify the user or log more details
          console.error(
            "API key payment required. Please update your subscription or contact support."
          );
          // Optionally, set a state to show a user-friendly message or take other actions
        }
      }
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Market Name</TableCell>
            <TableCell>Position Side</TableCell>
            <TableCell>Created Timestamp</TableCell>
            <TableCell>Closed Timestamp</TableCell>
            <TableCell>Entry Price</TableCell>
            <TableCell>Size</TableCell>
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
              <TableCell>{position.exitPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PositionsTable;
