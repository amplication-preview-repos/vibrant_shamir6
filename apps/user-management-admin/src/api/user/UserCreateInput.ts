import { ArtistProfileCreateNestedManyWithoutUsersInput } from "./ArtistProfileCreateNestedManyWithoutUsersInput";
import { ClientProfileCreateNestedManyWithoutUsersInput } from "./ClientProfileCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  artistProfiles?: ArtistProfileCreateNestedManyWithoutUsersInput;
  clientProfiles?: ClientProfileCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
