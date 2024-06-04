import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BookingWhereInput = {
  artistProfile?: StringNullableFilter;
  clientProfile?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  status?: "Option1";
  tattooDescription?: StringNullableFilter;
};
