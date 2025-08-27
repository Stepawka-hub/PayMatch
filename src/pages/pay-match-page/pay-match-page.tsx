import { CheckTable, MatchPreviewPanel, PaymentTable } from "@components";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { TCheckData, TPaymentData } from "@types";
import { mockChecks, mockPayments } from "@utils/mock";
import { FC, useMemo, useState } from "react";

export const PayMatchPage: FC = () => {
  const [payments, setPayments] = useState<TPaymentData[]>(mockPayments);
  const [checks, setChecks] = useState<TCheckData[]>(mockChecks);

  const [selectedPaymentId, setSelectedPaymentId] = useState<string>("");
  const [selectedCheckId, setSelectedCheckId] = useState<string>("");

  const handleChangePaymentId = (id: string) => {
    setSelectedPaymentId(id);
  };

  const handleChangeCheckId = (id: string) => {
    setSelectedCheckId(id);
  };

  const handleMatch = () => {
    setPayments((p) => p.filter((p) => p.id !== selectedPaymentId));
    setChecks((p) => p.filter((c) => c.id !== selectedCheckId));

    setSelectedPaymentId("");
    setSelectedCheckId("");
  };

  const handleCancel = () => {
    setSelectedCheckId("");
    setSelectedPaymentId("");
  };

  const selectedPayment = useMemo(
    () => payments.find((p) => p.id === selectedPaymentId) || null,
    [payments, selectedPaymentId]
  );

  const selectedCheck = useMemo(
    () => checks.find((c) => c.id === selectedCheckId) || null,
    [checks, selectedCheckId]
  );

  return (
    <Paper sx={{ p: 2, minHeight: "100vh", overflowX: "hidden" }}>
      <Grid container direction="column">
        <Grid container justifyContent="center">
          <Typography
            variant="h2"
            sx={{
              fontSize: "2rem",
              fontWeight: 500,
              textAlign: "center",
              mb: 2,
            }}
          >
            Форма сопоставления платежей
          </Typography>
        </Grid>

        <Grid container spacing={0}>
          <Grid size="grow">
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <CheckTable
                checks={checks}
                selectedItemId={selectedCheckId}
                handleChangeItemId={handleChangeCheckId}
              />
              <PaymentTable
                payments={payments}
                selectedItemId={selectedPaymentId}
                handleChangeItemId={handleChangePaymentId}
              />
            </Box>
          </Grid>
          <Grid>
            <MatchPreviewPanel
              isOpen={selectedPayment !== null && selectedCheck !== null}
              paymentData={selectedPayment}
              checkData={selectedCheck}
              onConfirm={handleMatch}
              onCancel={handleCancel}
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
