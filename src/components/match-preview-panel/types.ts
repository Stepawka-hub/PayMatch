import { TCheckData, TPaymentData } from "@types";

export type MatchPreviewPanelProps = {
  isOpen: boolean;
  paymentData: TPaymentData | null;
  checkData: TCheckData | null;
  onConfirm: () => void;
  onCancel: () => void;
};
