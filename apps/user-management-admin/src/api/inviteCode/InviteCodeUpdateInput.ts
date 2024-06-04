import { ArtistProfileUpdateManyWithoutInviteCodesInput } from "./ArtistProfileUpdateManyWithoutInviteCodesInput";

export type InviteCodeUpdateInput = {
  artistProfiles?: ArtistProfileUpdateManyWithoutInviteCodesInput;
  code?: string | null;
  valid?: boolean | null;
};
