import { ReactNode } from "react";
import { ModalProps as BaseModalProps } from "@mui/material";

export type ModalProps = Omit<BaseModalProps, "children"> & {
  children: ReactNode;
};
