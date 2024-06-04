import { IncomeReportWhereInput } from "./IncomeReportWhereInput";
import { IncomeReportOrderByInput } from "./IncomeReportOrderByInput";

export type IncomeReportFindManyArgs = {
  where?: IncomeReportWhereInput;
  orderBy?: Array<IncomeReportOrderByInput>;
  skip?: number;
  take?: number;
};
