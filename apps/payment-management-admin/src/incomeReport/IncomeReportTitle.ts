import { IncomeReport as TIncomeReport } from "../api/incomeReport/IncomeReport";

export const INCOMEREPORT_TITLE_FIELD = "artistProfile";

export const IncomeReportTitle = (record: TIncomeReport): string => {
  return record.artistProfile?.toString() || String(record.id);
};
