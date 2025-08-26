import { FC, useState } from "react";
import {
  CheckTable,
  MatchConfirmModal,
  PaymentTable,
  SearchPanel,
} from "@components";
import { Box, Paper, Typography } from "@mui/material";
import { mockChecks, mockPayments } from "@utils/mock";

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

      <SearchPanel />

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
        <MatchConfirmModal
          paymentData={
            mockPayments.find((p) => p.id === selectedPaymentId) || null
          }
          checkData={mockChecks.find((c) => c.id === selectedCheckId) || null}
        />
      </Box>
    </Paper>
  );
};
