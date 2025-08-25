export type TableProps<T> = {
  columns: THeadCell<T>[];
  data: unknown[];
};

export type THeadCell<T> = {
  id: keyof T;
  label: string;
};
