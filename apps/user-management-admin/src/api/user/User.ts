import { ArtistProfile } from "../artistProfile/ArtistProfile";
import { ClientProfile } from "../clientProfile/ClientProfile";
import { JsonValue } from "type-fest";

export type User = {
  artistProfiles?: Array<ArtistProfile>;
  clientProfiles?: Array<ClientProfile>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
