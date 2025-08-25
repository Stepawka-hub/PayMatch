export type TEntity = {
  id: string;
};

export type TFinancialDocument = TEntity & {
  number: number;
  sum: number;
  customer: string; // 150
  customerINN: string;
  executor: string; // 150
  executorINN: string;
  examinee: string;
};

export type TPaymentType = "электронный" | "наличный";
export type TPaymentData = TFinancialDocument & {
  type: TPaymentType;
  createdAt: string;
  paymentComment: string; // 300
  accountantComment: string;
};

export type TCheckType = "обучение" | "пошлина";
export type TCheckData = TFinancialDocument & {
  type: TCheckType;
  qualification: string; // 10
  purposeOfPayment: string; // 500
};
