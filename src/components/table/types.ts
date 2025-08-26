import { TEntity } from "@types";

export type BaseTableProps = {
  title?: string;
  selectedItemId: string;
  handleChangeItemId: (id: string) => void;
};

export type TableProps<T extends TEntity> = BaseTableProps & {
  columns: THeadCell<T>[];
  data: T[];
};

export type THeadCell<T extends TEntity> = {
  id: keyof T & string;
  label: string;
};
