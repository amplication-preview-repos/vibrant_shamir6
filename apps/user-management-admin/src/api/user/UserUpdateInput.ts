import { ArtistProfileUpdateManyWithoutUsersInput } from "./ArtistProfileUpdateManyWithoutUsersInput";
import { ClientProfileUpdateManyWithoutUsersInput } from "./ClientProfileUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  artistProfiles?: ArtistProfileUpdateManyWithoutUsersInput;
  clientProfiles?: ClientProfileUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
