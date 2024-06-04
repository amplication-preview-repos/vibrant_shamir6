import { ArtistProfile as TArtistProfile } from "../api/artistProfile/ArtistProfile";

export const ARTISTPROFILE_TITLE_FIELD = "location";

export const ArtistProfileTitle = (record: TArtistProfile): string => {
  return record.location?.toString() || String(record.id);
};
