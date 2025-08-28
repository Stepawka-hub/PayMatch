import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Table as BaseTable,
  Box,
  Divider,
  IconButton,
  Paper,
  Radio,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { TEntity } from "@types";
import { ChangeEvent, MouseEvent, useMemo, useState } from "react";
import { TableTitle } from "./table-title";
import { TableProps } from "./types";

const minCellWidth = 100;

export const Table = <T extends TEntity>({
  title,
  columns,
  data,
  selectedItemId,
  handleChangeItemId,
}: TableProps<T>) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (
    _: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const visibleRows = useMemo(
    () => [...data].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [data, page, rowsPerPage]
  );

  const tableColumns = columns.map((col) => (
    <TableCell key={String(col.id)} align="center">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.5,
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: "1rem", fontWeight: 500 }}
        >
          {col.label}
        </Typography>
        <IconButton size="small">
          <FilterAltIcon />
        </IconButton>
      </Box>
    </TableCell>
  ));

  const tableRows = visibleRows.map((r) => {
    const isItemSelected = r.id === selectedItemId;

    return (
      <TableRow
        hover
        aria-checked={isItemSelected}
        key={r.id}
        tabIndex={-1}
        sx={{ cursor: "pointer" }}
        selected={isItemSelected}
        onClick={() => handleChangeItemId(r.id)}
      >
        <TableCell padding="checkbox">
          <Radio color="primary" checked={isItemSelected} />
        </TableCell>

        {columns.map((col) => {
          const value = r[col.id];
          return (
            <TableCell
              key={col.id}
              align="center"
              sx={{ minWidth: minCellWidth }}
            >
              <Typography sx={{ fontSize: "0.9rem" }}>
                {col.format ? col.format(value) : String(value ?? "")}
              </Typography>
            </TableCell>
          );
        })}
      </TableRow>
    );
  });

  return (
    <Paper sx={{ borderRadius: "1.25rem" }} variant="outlined">
      <TableTitle title={title} />

      <Divider />

      <TableContainer sx={{ borderRadius: "0 0 1.25rem 1.25rem" }}>
        <BaseTable size="small">
          <TableHead>
            <TableRow>
              <TableCell />
              {tableColumns}
            </TableRow>
          </TableHead>

          <TableBody>
            {tableRows}
            {emptyRows > 0 && (
              <TableRow style={{ height: 33 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      "aria-label": "Количество записей:",
                    },
                    native: true,
                  },
                }}
                labelRowsPerPage="Количество записей:"
                labelDisplayedRows={({ from, to, count }) =>
                  `${from}-${to} из ${count}`
                }
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </BaseTable>
      </TableContainer>
    </Paper>
  );
};
