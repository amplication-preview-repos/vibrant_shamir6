import { ArtistProfileCreateNestedManyWithoutInviteCodesInput } from "./ArtistProfileCreateNestedManyWithoutInviteCodesInput";

export type InviteCodeCreateInput = {
  artistProfiles?: ArtistProfileCreateNestedManyWithoutInviteCodesInput;
  code?: string | null;
  valid?: boolean | null;
};
