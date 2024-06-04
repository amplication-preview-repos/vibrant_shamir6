import { JsonValue } from "type-fest";

export type IncomeReport = {
  artistProfile: string | null;
  commissionPaid: number | null;
  createdAt: Date;
  id: string;
  month: Date | null;
  totalIncome: number | null;
  transactions: JsonValue;
  updatedAt: Date;
};
