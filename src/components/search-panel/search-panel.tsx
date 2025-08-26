import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { FC } from "react";

export const SearchPanel: FC = () => {
  return (
    <Paper sx={{ p: 2, mb: 2 }} variant="outlined">
      <Typography variant="h6">Поиск для сопоставления</Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
        <TextField
          size="small"
          label="Поиск платежа"
          placeholder="№, сумма, заказчик..."
          sx={{ flex: 1 }}
        />
        <TextField
          size="small"
          label="Поиск счета"
          placeholder="№, сумма, назначение..."
          sx={{ flex: 1 }}
        />
        <Button variant="contained" disabled>
          Найти
        </Button>
      </Box>
    </Paper>
  );
};
