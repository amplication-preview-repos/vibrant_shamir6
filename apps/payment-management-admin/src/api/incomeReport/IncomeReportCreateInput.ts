import { InputJsonValue } from "../../types";

export type IncomeReportCreateInput = {
  artistProfile?: string | null;
  commissionPaid?: number | null;
  month?: Date | null;
  totalIncome?: number | null;
  transactions?: InputJsonValue;
};
