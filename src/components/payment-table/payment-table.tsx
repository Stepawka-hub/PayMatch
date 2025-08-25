import { FC } from "react";
import { Table } from "@mui/material";
import { TColumn } from "./types";
import { mockPayments } from "@utils/mock";

const columns: TColumn[] = [
  { id: "number", label: "Номер", align: "right" },
  {
    id: "sum",
    label: "Сумма",
    align: "right",
    format: (value: number) => `${value.toLocaleString()} ₽`,
  },
  { id: "customer", label: "Плательщик", align: "left" },
  { id: "customerINN", label: "ИНН плательщика", align: "right" },
  { id: "executor", label: "Получатель", align: "left" },
  { id: "executorINN", label: "ИНН получателя", align: "right" },
  { id: "examinee", label: "Обследуемый", align: "left" },
  { id: "type", label: "Тип оплаты", align: "left" },
  {
    id: "createdAt",
    label: "Дата создания",
    align: "right",
    format: (value: string) => new Date(value).toLocaleDateString(),
  },
  { id: "paymentComment", label: "Комментарий к платежу", align: "left" },
  { id: "accountantComment", label: "Комментарий бухгалтера", align: "left" },
];

export const PaymentTable: FC = () => {
  return <Table columns={columns} data={mockPayments} />;
};
