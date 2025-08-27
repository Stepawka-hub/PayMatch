import { FC } from "react";
import {
  Box,
  Button,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { MatchPreviewPanelProps } from "./types";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer } from "@ui";

const drawerWidth = 600;

export const MatchPreviewPanel: FC<MatchPreviewPanelProps> = ({
  isOpen,
  paymentData,
  checkData,
  onConfirm,
  onCancel,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Drawer
      variant={matches ? "temporary" : "persistent"}
      anchor="right"
      open={isOpen}
      sx={{ width: isOpen ? drawerWidth : 0, ml: isOpen ? 3 : 0 }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Подтверждение операции
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ height: "100%" }}>
          {paymentData && (
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Платёж:
              </Typography>
              <Typography>№ {paymentData.number}</Typography>
              <Typography>
                Сумма: {paymentData.sum.toLocaleString()} ₽
              </Typography>
              <Typography>Плательщик: {paymentData.customer}</Typography>
            </Box>
          )}

          {checkData && (
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Счёт:
              </Typography>
              <Typography>№ {checkData.number}</Typography>
              <Typography>Сумма: {checkData.sum.toLocaleString()} ₽</Typography>
              <Typography>Заказчик: {checkData.customer}</Typography>
            </Box>
          )}
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
