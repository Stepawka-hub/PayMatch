import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { mockPayments } from "@utils/mock";
import { FC } from "react";
import { TColumn } from "./types";

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
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell
                key={col.id}
                align={col.align}
                sx={{ fontWeight: "bold" }}
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {mockPayments.map((data) => (
            <TableRow hover role="checkbox" tabIndex={-1} key={data.number}>
              {columns.map((col) => (
                <TableCell key={col.id} align={col.align}>
                  {data[col.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
