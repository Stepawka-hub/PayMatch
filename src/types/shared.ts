import { TEntity } from "./entity";

export type TColumnFormat<T> = (value: T[keyof T]) => string;

export type TColumn<T extends TEntity> = {
  id: keyof T & string;
  label: string;
  format?: TColumnFormat<T>;
};
