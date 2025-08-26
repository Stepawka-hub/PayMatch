import { FC, useState } from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { MatchConfirmModalProps } from "./types";
import { Modal } from "@ui";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export const MatchConfirmModal: FC<MatchConfirmModalProps> = ({
  paymentData,
  checkData,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onConfirm = () => {
    console.log("Confirm match");
    handleClose();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<CompareArrowsIcon />}
        disabled={!paymentData || !checkData}
        onClick={onOpen}
      >
        Сопоставить счёт и платёж
      </Button>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="matching-modal-title"
        aria-describedby="matching-modal-description"
      >
        <Typography variant="h6" gutterBottom id="matching-modal-title">
          Подтверждение сопоставления
        </Typography>

        <Divider sx={{ my: 2 }} />

        {paymentData && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Платёж:
            </Typography>
            <Typography>№ {paymentData.number}</Typography>
            <Typography>Сумма: {paymentData.sum.toLocaleString()} ₽</Typography>
            <Typography>Плательщик: {paymentData.customer}</Typography>
          </Box>
        )}

        {checkData && (
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Счёт:
            </Typography>
            <Typography>№ {checkData.number}</Typography>
            <Typography>Сумма: {checkData.sum.toLocaleString()} ₽</Typography>
            <Typography>Заказчик: {checkData.customer}</Typography>
          </Box>
        )}

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button
            variant="contained"
            startIcon={<CheckIcon />}
            onClick={onConfirm}
          >
            Подтвердить
          </Button>
          <Button
            variant="outlined"
            startIcon={<CloseIcon />}
            onClick={handleClose}
          >
            Отмена
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
