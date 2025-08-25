import { CheckTable, PaymentTable } from "@components";
import { Box, Button, Paper, Typography } from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { FC } from "react";

export const PayMatchPage: FC = () => {
  return (
    <Paper sx={{ p: 2, minHeight: "100vh" }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: "2.25rem",
          fontWeight: 500,
          textAlign: "center",
          mb: 2,
        }}
      >
        Форма сопоставления платежей
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <PaymentTable />
        <CheckTable />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CompareArrowsIcon />}
        >
          Сопоставить счёт и платёж
        </Button>
      </Box>
    </Paper>
  );
};
