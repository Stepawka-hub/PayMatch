import { FC } from "react";
import { Table, THeadCell } from "@components";
import { TPaymentData } from "@types";
import { PaymentTableProps } from "./types";
import { PAYMENT_TYPE_LABELS } from "@utils/constants";

const columns: THeadCell<TPaymentData>[] = [
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
  { id: "examinee", label: "ФИО Экзаменуемого" },
  {
    id: "type",
    label: "Тип",
    format: (value) =>
      value === "electronic" || value === "cash"
        ? PAYMENT_TYPE_LABELS[value]
        : String(value),
  },
  {
    id: "createdAt",
    label: "Дата создания",
    format: (value) => new Date(value).toLocaleDateString("ru-RU"),
  },
  { id: "paymentComment", label: "Комментарий платежа" },
  { id: "accountantComment", label: "Комментарий бухгалтера" },
];

export const PaymentTable: FC<PaymentTableProps> = ({
  payments,
  ...baseProps
}) => {
  return (
    <Table title="Платежи" columns={columns} data={payments} {...baseProps} />
  );
};
