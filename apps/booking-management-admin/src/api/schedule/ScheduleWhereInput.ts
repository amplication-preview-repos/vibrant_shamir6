import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type ScheduleWhereInput = {
  artistProfile?: StringNullableFilter;
  availability?: JsonFilter;
  id?: StringFilter;
};
