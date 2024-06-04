import { ArtistProfileListRelationFilter } from "../artistProfile/ArtistProfileListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type InviteCodeWhereInput = {
  artistProfiles?: ArtistProfileListRelationFilter;
  code?: StringNullableFilter;
  id?: StringFilter;
  valid?: BooleanNullableFilter;
};
