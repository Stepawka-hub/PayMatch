import { CheckTable, PaymentTable } from "@components";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { Box, Button, Paper, Typography } from "@mui/material";
import { mockChecks, mockPayments } from "@utils/mock";
import { FC, useState } from "react";

export const PayMatchPage: FC = () => {
  const [selectedPaymentId, setSelectedPaymentId] = useState<string>("");
  const [selectedCheckId, setSelectedCheckId] = useState<string>("");

  const handleChangePaymentId = (id: string) => {
    setSelectedPaymentId(id);
  };

  const handleChangeCheckId = (id: string) => {
    setSelectedCheckId(id);
  };

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
        <PaymentTable
          payments={mockPayments}
          selectedItemId={selectedPaymentId}
          handleChangeItemId={handleChangePaymentId}
        />
        <CheckTable
          checks={mockChecks}
          selectedItemId={selectedCheckId}
          handleChangeItemId={handleChangeCheckId}
        />
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
