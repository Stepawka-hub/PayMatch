import { TEntity } from '@types';

export type TableProps<T extends TEntity> = {
  columns: THeadCell<T>[];
  data: T[];
};

export type THeadCell<T extends TEntity> = {
  id: keyof T & string;
  label: string;
};
