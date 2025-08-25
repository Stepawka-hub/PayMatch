import { FC } from "react";
import {
  Table as BaseTable,
  Box,
  Paper,
  Radio,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableProps,
  TableRow,
} from "@mui/material";

export const Table: FC = <T,>({ columns, data }: TableProps<T>) => {
  const tableColumns = columns.map((col) => (
    <TableCell key={col.id} sx={{ fontWeight: "bold" }}>
      {col.label}
    </TableCell>
  ));

  const tableRows = data.map((r) => {
    const isItemSelected = true;
    // const isItemSelected = selected.includes(row.id);
    // const labelId = `enhanced-table-checkbox-${index}`;

    return (
      <TableRow
        hover
        sx={{ cursor: "pointer" }}
        key={r.number}
        tabIndex={-1}
        onClick={(e) => null}
      >
        <TableCell padding="checkbox">
          <Radio color="primary" checked={isItemSelected} />
        </TableCell>
        {columns.map((col) => (
          <TableCell key={col.id} align={col.align}>
            {r[col.id]}
          </TableCell>
        ))}
      </TableRow>
    );
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }} variant="outlined">
        <TableContainer>
          <BaseTable>
            <TableHead>
              <TableRow>
                <TableCell  />
                {tableColumns}
              </TableRow>
            </TableHead>
            <TableBody>{tableRows}</TableBody>
          </BaseTable>
        </TableContainer>
      </Paper>
    </Box>
  );
};
