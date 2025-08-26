import { FC } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Paper, Typography } from "@mui/material";
import { SearchField } from "./search-field";

export const SearchPanel: FC = () => {
  const filters = ["Номер", "Сумма", "Тип"];

  return (
    <Paper sx={{ p: 2, mb: 2 }} variant="outlined">
      <Typography variant="h6">Поиск для сопоставления</Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
        <SearchField
          filters={filters}
          btnLabel="Выбрать фильтр"
          textFieldLabel="Поиск счёта"
          textFieldPlaceholder="Введите значение для поиска..."
          fieldName="accountSearch"
        />
        <SearchField
          filters={filters}
          btnLabel="Выбрать фильтр"
          textFieldLabel="Поиск платежа"
          textFieldPlaceholder="Введите значение для поиска..."
          fieldName="paymentSearch"
        />
        <Button startIcon={<SearchIcon />} variant="contained">
          Найти
        </Button>
      </Box>
    </Paper>
  );
};
