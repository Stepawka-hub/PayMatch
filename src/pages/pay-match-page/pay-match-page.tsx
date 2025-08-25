import { CheckTable, PaymentTable } from "@components";
import { Paper } from "@mui/material";
import { FC } from "react";

export const PayMatchPage: FC = () => {
  return (
    <Paper sx={{ p: 2, minHeight: '100vh' }}>
      <PaymentTable />
      <CheckTable />
    </Paper>
  );
};
