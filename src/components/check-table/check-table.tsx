import { FC } from "react";
import { Table, THeadCell } from "@components";
import { mockChecks } from "@utils/mock";
import { TCheckData } from "@types";

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

export const CheckTable: FC = () => {
  return <Table columns={columns} data={mockChecks} />;
};
