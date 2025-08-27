import { FC } from "react";
import {
  Box,
  Button,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MatchPreviewPanelProps, TColumn } from "./types";
import { Drawer } from "@ui";
import { CHECK_TYPE_LABELS, PAYMENT_TYPE_LABELS } from "@utils/constants";
import { TCheckData, TPaymentData } from "@types";
import { DetailItem } from "./detail-item";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CloseIcon from "@mui/icons-material/Close";

const drawerWidth = 600;

const paymentCols: TColumn<TPaymentData>[] = [
  {
    id: "type",
    label: "Тип",
    format: (value) =>
      value === "electronic" || value === "cash"
        ? PAYMENT_TYPE_LABELS[value]
        : String(value),
  },
  {
    id: "sum",
    label: "Сумма",
    color: "success",
    format: (value) => `${value.toLocaleString("ru-RU")} ₽`,
  },
  { id: "customer", label: "Заказчик" },
  { id: "customerINN", label: "Заказчик ИНН" },
  { id: "executor", label: "Исполнитель" },
  { id: "executorINN", label: "Исполнитель ИНН" },
  { id: "examinee", label: "ФИО Экзаменуемого" },
  {
    id: "createdAt",
    label: "Дата создания",
    format: (value) => new Date(value).toLocaleDateString("ru-RU"),
  },
  { id: "paymentComment", label: "Комментарий платежа" },
  { id: "accountantComment", label: "Комментарий бухгалтера" },
];

const checkCols: TColumn<TCheckData>[] = [
  {
    id: "type",
    label: "Тип",
    format: (value) =>
      value === "education" || value === "duty"
        ? CHECK_TYPE_LABELS[value]
        : String(value),
  },
  {
    id: "sum",
    label: "Сумма",
    color: "success",
    format: (value) => `${value.toLocaleString("ru-RU")} ₽`,
  },
  { id: "customer", label: "Заказчик" },
  { id: "customerINN", label: "Заказчик ИНН" },
  { id: "executor", label: "Исполнитель" },
  { id: "executorINN", label: "Исполнитель ИНН" },
  { id: "examinee", label: "ФИО Экзаменуемого" },
  { id: "qualification", label: "Квалификация" },
  { id: "purposeOfPayment", label: "Назначение платежа" },
];

export const MatchPreviewPanel: FC<MatchPreviewPanelProps> = ({
  isOpen,
  paymentData,
  checkData,
  onConfirm,
  onCancel,
}) => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const checkInfo = checkData
    ? checkCols.map((c) => (
        <DetailItem
          key={c.id}
          label={c.label}
          value={c.format ? c.format(checkData[c.id]) : String(checkData[c.id])}
          color={c.color}
        />
      ))
    : null;

  const paymentInfo = paymentData
    ? paymentCols.map((c) => (
        <DetailItem
          key={c.id}
          label={c.label}
          value={
            c.format ? c.format(paymentData[c.id]) : String(paymentData[c.id])
          }
          color={c.color}
        />
      ))
    : null;

  return (
    <Drawer
      variant={isMedium ? "temporary" : "persistent"}
      anchor="right"
      open={isOpen}
      sx={{
        width: isOpen ? drawerWidth : 0,
        ml: isOpen ? 3 : 0,
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 500 }}>
          Подтверждение операции
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 0.25 }}>
            {`Счёт: №${checkData?.number || "-"}`}
          </Typography>
          {checkInfo}
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 0.25 }}>
            {`Платёж: №${paymentData?.number || "-"}`}
          </Typography>
          {paymentInfo}
        </Box>

        <Box sx={{ alignSelf: "flex-end" }}>
          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<CompareArrowsIcon />}
              onClick={onConfirm}
            >
              Подтвердить
            </Button>
            <Button
              variant="outlined"
              startIcon={<CloseIcon />}
              onClick={onCancel}
            >
              Отмена
            </Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};
