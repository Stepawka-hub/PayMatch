import { FC } from "react";
import { Table, THeadCell } from "@components";
import { TCheckData } from "@types";
import { CheckTableProps } from "./types";

const columns: THeadCell<TCheckData>[] = [
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
