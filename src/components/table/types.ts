import { TColumn, TEntity } from "@types";

export type BaseTableProps = {
  title?: string;
  selectedItemId: string | null;
  handleChangeItemId: (id: string) => void;
};

export type TableProps<T extends TEntity> = BaseTableProps & {
  columns: TColumn<T>[];
  data: T[];
};
