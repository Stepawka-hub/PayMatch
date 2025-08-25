import {
  Table as BaseTable,
  Box,
  Paper,
  Radio,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { TableProps } from "./types";
import { TEntity } from "@types";

export const Table = <T extends TEntity>({ columns, data }: TableProps<T>) => {
  const tableColumns = columns.map((col) => (
    <TableCell key={String(col.id)} sx={{ fontWeight: "bold" }}>
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
        key={r.id}
        tabIndex={-1}
        onClick={() => null}
      >
        <TableCell padding="checkbox">
          <Radio color="primary" checked={isItemSelected} />
        </TableCell>

        {columns.map((col) => {
          const value = r[col.id];
          return (
            <TableCell key={col.id}>{value ? String(value) : ""}</TableCell>
          );
        })}
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
                <TableCell />
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
