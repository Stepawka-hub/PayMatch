import { TCheckData } from "@types";
import { BaseTableProps } from "@components";

export type CheckTableProps = BaseTableProps & {
  checks: TCheckData[];
};
