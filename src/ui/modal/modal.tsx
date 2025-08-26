import { FC } from "react";
import { Backdrop, Box, Fade, Modal as BaseModal } from "@mui/material";
import { contentStyles } from "./styles";
import { ModalProps } from "./types";

export const Modal: FC<ModalProps> = ({
  open,
  onClose,
  children,
  ...props
}) => (
  <BaseModal
    open={open}
    onClose={onClose}
    closeAfterTransition
    slots={{ backdrop: Backdrop }}
    slotProps={{
      backdrop: {
        timeout: 500,
      },
    }}
    {...props}
  >
    <Fade in={open}>
      <Box sx={contentStyles}>{children}</Box>
    </Fade>
  </BaseModal>
);
