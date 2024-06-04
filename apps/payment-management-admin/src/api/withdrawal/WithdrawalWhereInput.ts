import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type WithdrawalWhereInput = {
  amount?: FloatNullableFilter;
  artistProfile?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
};
