import { InviteCodeWhereUniqueInput } from "../inviteCode/InviteCodeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ArtistProfileUpdateInput = {
  bio?: string | null;
  commissionRate?: number | null;
  inviteCode?: InviteCodeWhereUniqueInput | null;
  location?: string | null;
  priceRange?: number | null;
  user?: UserWhereUniqueInput | null;
  workPortfolio?: InputJsonValue;
};
