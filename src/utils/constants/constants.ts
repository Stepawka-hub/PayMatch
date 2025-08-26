import { TCheckType, TPaymentType } from "@types";

export const CHECK_TYPE_LABELS: Record<TCheckType, string> = {
  education: "Обучение",
  duty: "Пошлина",
};

export const PAYMENT_TYPE_LABELS: Record<TPaymentType, string> = {
  electronic: "Электронный",
  cash: "Наличный",
};
