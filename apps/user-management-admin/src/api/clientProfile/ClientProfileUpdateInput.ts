import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ClientProfileUpdateInput = {
  location?: string | null;
  moodboard?: InputJsonValue;
  preferredStyles?: string | null;
  user?: UserWhereUniqueInput | null;
};
