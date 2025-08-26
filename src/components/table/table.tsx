import {
  Table as BaseTable,
  Box,
  FormControlLabel,
  Paper,
  Radio,
  Switch,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { TableProps } from "./types";
import { TEntity } from "@types";
import { useMemo, useState } from "react";
import { TableTitle } from "./table-title";

export const Table = <T extends TEntity>({
  title,
  columns,
  data,
  selectedItemId,
  handleChangeItemId,
}: TableProps<T>) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [isDense, setIsDense] = useState(true);

  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = () => {
    setIsDense((p) => !p);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const visibleRows = useMemo(
    () => [...data].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [data, page, rowsPerPage]
  );

  const tableColumns = columns.map((col) => (
    <TableCell key={String(col.id)} sx={{ fontWeight: "bold" }}>
      {col.label}
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
            <TableCell key={col.id}>{value ? String(value) : ""}</TableCell>
          );
        })}
      </TableRow>
    );
  });

  return (
    <Box>
      <Paper sx={{ mb: 2 }} variant="outlined">
        <TableTitle title={title} />

        <TableContainer>
          <BaseTable size={isDense ? "small" : "medium"}>
            <TableHead>
              <TableRow>
                <TableCell />
                {tableColumns}
              </TableRow>
            </TableHead>

            <TableBody>
              {tableRows}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (isDense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[3, 5, 10, 25]}
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

      <Box>
        <FormControlLabel
          control={<Switch checked={isDense} onChange={handleChangeDense} />}
          label="Компактный вид"
        />
      </Box>
    </Box>
  );
};
