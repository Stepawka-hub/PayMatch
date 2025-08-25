export type TableProps = {
  columns: unknown[];
  data: unknown[];
};

export type TColumn<T> = {
  id: string;
  label: string;
  align: string;
  format: (value: T) => string;
};
