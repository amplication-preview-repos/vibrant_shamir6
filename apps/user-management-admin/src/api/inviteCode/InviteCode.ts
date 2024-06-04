import { ArtistProfile } from "../artistProfile/ArtistProfile";

export type InviteCode = {
  artistProfiles?: Array<ArtistProfile>;
  code: string | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  valid: boolean | null;
};
