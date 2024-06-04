import { SortOrder } from "../../util/SortOrder";

export type IncomeReportOrderByInput = {
  artistProfile?: SortOrder;
  commissionPaid?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  month?: SortOrder;
  totalIncome?: SortOrder;
  transactions?: SortOrder;
  updatedAt?: SortOrder;
};
