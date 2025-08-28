import { Table } from "@components";
import { TCheckData, TColumn } from "@types";
import { FC } from "react";
import { CheckTableProps } from "./types";

const columns: TColumn<TCheckData>[] = [
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

export const CheckTable: FC<CheckTableProps> = ({ checks, ...baseProps }) => {
  return <Table title="Счета" columns={columns} data={checks} {...baseProps} />;
};
