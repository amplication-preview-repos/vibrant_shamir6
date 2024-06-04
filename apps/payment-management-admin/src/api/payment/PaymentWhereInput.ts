import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  artistProfile?: StringNullableFilter;
  clientProfile?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Option1";
};
