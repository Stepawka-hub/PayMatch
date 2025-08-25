export type TFinancialDocument = {
  number: number;
  sum: number;
  customer: string; // 150
  customerINN: string;
  executor: string; // 150
  executorINN: string;
  examinee: string;
};

export type TPaymentData = TFinancialDocument & {
  type: "электронный" | "наличный";
  createdAt: string;
  paymentComment: string; // 300
  accountantComment: string;
};

export type TCheckData = TFinancialDocument & {
  type: "обучение" | "пошлина";
  qualification: string; // 10
  purposeOfPayment: string; // 500
};
