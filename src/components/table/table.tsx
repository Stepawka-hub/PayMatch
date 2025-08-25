import { FC } from "react";
import {
  Table as BaseTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableProps,
  TableRow,
} from "@mui/material";

export const Table: FC<TableProps> = ({ columns, data }) => {
  const tableColumns = columns.map((col) => (
    <TableCell key={col.id} align={col.align} sx={{ fontWeight: "bold" }}>
      {col.label}
    </TableCell>
  ));

  const tableRows = data.map((r) => (
    <TableRow hover role="checkbox" tabIndex={-1} key={r.number}>
      {columns.map((col) => (
        <TableCell key={col.id} align={col.align}>
          {data[col.id]}
        </TableCell>
      ))}
    </TableRow>
  ));

  return (
    <TableContainer>
      <BaseTable>
        <TableHead>
          <TableRow>{tableColumns}</TableRow>
        </TableHead>
        <TableBody>{tableRows}</TableBody>
      </BaseTable>
    </TableContainer>
  );
};
