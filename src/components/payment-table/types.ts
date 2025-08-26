import { TPaymentData } from "@types";
import { BaseTableProps } from "@components";

export type PaymentTableProps = BaseTableProps & {
  payments: TPaymentData[];
};
