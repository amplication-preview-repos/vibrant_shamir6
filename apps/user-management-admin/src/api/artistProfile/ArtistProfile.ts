import { InviteCode } from "../inviteCode/InviteCode";
import { User } from "../user/User";
import { JsonValue } from "type-fest";

export type ArtistProfile = {
  bio: string | null;
  commissionRate: number | null;
  createdAt: Date;
  id: string;
  inviteCode?: InviteCode | null;
  location: string | null;
  priceRange: number | null;
  updatedAt: Date;
  user?: User | null;
  workPortfolio: JsonValue;
};
