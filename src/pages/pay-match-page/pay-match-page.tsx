import { CheckTable, MatchPreviewPanel, PaymentTable } from "@components";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { mockChecks, mockPayments } from "@utils/mock";
import { FC, useMemo, useState } from "react";

export const PayMatchPage: FC = () => {
  const [selectedPaymentId, setSelectedPaymentId] = useState<string>("");
  const [selectedCheckId, setSelectedCheckId] = useState<string>("");

  const handleChangePaymentId = (id: string) => {
    setSelectedPaymentId(id);
  };

  const handleChangeCheckId = (id: string) => {
    setSelectedCheckId(id);
  };

  const selectedPayment = useMemo(
    () => mockPayments.find((p) => p.id === selectedPaymentId) || null,
    [selectedPaymentId]
  );

  const selectedCheck = useMemo(
    () => mockChecks.find((c) => c.id === selectedCheckId) || null,
    [selectedCheckId]
  );

  return (
    <Paper sx={{ p: 2, minHeight: "100vh" }}>
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
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <CheckTable
                checks={mockChecks}
                selectedItemId={selectedCheckId}
                handleChangeItemId={handleChangeCheckId}
              />
              <PaymentTable
                payments={mockPayments}
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
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
