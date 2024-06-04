import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type IncomeReportWhereInput = {
  artistProfile?: StringNullableFilter;
  commissionPaid?: FloatNullableFilter;
  id?: StringFilter;
  month?: DateTimeNullableFilter;
  totalIncome?: FloatNullableFilter;
  transactions?: JsonFilter;
};
