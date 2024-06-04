import { ArtistProfileListRelationFilter } from "../artistProfile/ArtistProfileListRelationFilter";
import { ClientProfileListRelationFilter } from "../clientProfile/ClientProfileListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  artistProfiles?: ArtistProfileListRelationFilter;
  clientProfiles?: ClientProfileListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
