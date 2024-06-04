import { InputJsonValue } from "../../types";

export type IncomeReportUpdateInput = {
  artistProfile?: string | null;
  commissionPaid?: number | null;
  month?: Date | null;
  totalIncome?: number | null;
  transactions?: InputJsonValue;
};
