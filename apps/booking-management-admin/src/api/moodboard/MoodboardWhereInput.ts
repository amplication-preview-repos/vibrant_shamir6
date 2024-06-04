import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type MoodboardWhereInput = {
  clientProfile?: StringNullableFilter;
  id?: StringFilter;
  images?: JsonFilter;
};
