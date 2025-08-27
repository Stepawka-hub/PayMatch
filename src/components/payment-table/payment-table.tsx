import { Table } from "@components";
import { TColumn, TPaymentData } from "@types";
import { FC } from "react";
import { PaymentTableProps } from "./types";

const columns: TColumn<TPaymentData>[] = [
  { id: "number", label: "№" },
  {
    id: "sum",
    label: "Сумма",
    format: (value) => `${value.toLocaleString("ru-RU")} ₽`,
  },
  { id: "customer", label: "Заказчик" },
  { id: "customerINN", label: "Заказчик ИНН" },
  { id: "executor", label: "Исполнитель" },
  { id: "executorINN", label: "Исполнитель ИНН" },
];

export const PaymentTable: FC<PaymentTableProps> = ({
  payments,
  ...baseProps
}) => {
  return (
    <Table title="Платежи" columns={columns} data={payments} {...baseProps} />
  );
};
