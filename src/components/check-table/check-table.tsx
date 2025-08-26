import { FC } from "react";
import { Table, THeadCell } from "@components";
import { TCheckData } from "@types";
import { CheckTableProps } from "./types";

const columns: THeadCell<TCheckData>[] = [
  { id: "number", label: "№" },
  { id: "sum", label: "Сумма" },
  { id: "customer", label: "Заказчик" },
  { id: "customerINN", label: "Заказчик ИНН" },
  { id: "executor", label: "Исполнитель" },
  { id: "executorINN", label: "Исполнитель ИНН" },
  { id: "examinee", label: "ФИО Экзаменуемого" },
  { id: "type", label: "Тип" },
  { id: "qualification", label: "Квалификация" },
  { id: "purposeOfPayment", label: "Назначение платежа" },
];

export const CheckTable: FC<CheckTableProps> = ({ checks, ...baseProps }) => {
  return <Table title="Счета" columns={columns} data={checks} {...baseProps} />;
};
