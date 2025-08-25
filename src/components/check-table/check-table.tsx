import { FC } from "react";
import { Table } from "@components";
import { mockChecks } from "@utils/mock";

const columns: TColumn[] = [
  { id: "number", label: "Номер", align: "center" },
  {
    id: "sum",
    label: "Сумма",
    align: "center",
    format: (value: number) => `${value.toLocaleString()} ₽`,
  },
  { id: "customer", label: "Плательщик", align: "center" },
  { id: "customerINN", label: "ИНН плательщика", align: "center" },
  { id: "executor", label: "Получатель", align: "center" },
  { id: "executorINN", label: "ИНН получателя", align: "center" },
  { id: "examinee", label: "Обследуемый", align: "center" },
  { id: "type", label: "Тип оплаты", align: "center" },
  {
    id: "createdAt",
    label: "Дата создания",
    align: "center",
    format: (value: string) => new Date(value).toLocaleDateString(),
  },
  { id: "paymentComment", label: "Комментарий к платежу", align: "center" },
  { id: "accountantComment", label: "Комментарий бухгалтера", align: "center" },
];

export const CheckTable: FC = () => {
  return <Table columns={columns} data={mockChecks} />;
};
