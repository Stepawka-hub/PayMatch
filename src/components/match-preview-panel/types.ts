import {
  TCheckData,
  TColumn as TBaseColumn,
  TPaymentData,
  TEntity,
} from "@types";

export type MatchPreviewPanelProps = {
  isOpen: boolean;
  paymentData: TPaymentData | null;
  checkData: TCheckData | null;
  onConfirm: () => void;
  onCancel: () => void;
};

export type TColumn<T extends TEntity> = TBaseColumn<T> & {
  color?: string;
};
