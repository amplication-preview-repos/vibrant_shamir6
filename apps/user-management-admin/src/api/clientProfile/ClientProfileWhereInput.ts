import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClientProfileWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  moodboard?: JsonFilter;
  preferredStyles?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
