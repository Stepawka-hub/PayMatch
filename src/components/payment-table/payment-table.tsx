import { FC } from "react";
import { Table, THeadCell } from "@components";
import { TPaymentData } from "@types";
import { PaymentTableProps } from "./types";

const columns: THeadCell<TPaymentData>[] = [
  { id: "number", label: "№" },
  { id: "sum", label: "Сумма" },
  { id: "customer", label: "Заказчик" },
  { id: "customerINN", label: "Заказчик ИНН" },
  { id: "executor", label: "Исполнитель" },
  { id: "executorINN", label: "Исполнитель ИНН" },
  { id: "examinee", label: "ФИО Экзаменуемого" },
  { id: "type", label: "Тип" },
  { id: "createdAt", label: "Дата создания" },
  { id: "paymentComment", label: "Комментарий платежа" },
  { id: "accountantComment", label: "Комментарий бухгалтера" },
];

export const PaymentTable: FC<PaymentTableProps> = ({
  payments,
  ...baseProps
}) => {
  return <Table columns={columns} data={payments} {...baseProps} />;
};
