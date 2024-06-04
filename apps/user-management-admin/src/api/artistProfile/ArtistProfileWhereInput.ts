import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InviteCodeWhereUniqueInput } from "../inviteCode/InviteCodeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type ArtistProfileWhereInput = {
  bio?: StringNullableFilter;
  commissionRate?: FloatNullableFilter;
  id?: StringFilter;
  inviteCode?: InviteCodeWhereUniqueInput;
  location?: StringNullableFilter;
  priceRange?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
  workPortfolio?: JsonFilter;
};
