import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type ClientProfile = {
  createdAt: Date;
  id: string;
  location: string | null;
  moodboard: JsonValue;
  preferredStyles: string | null;
  updatedAt: Date;
  user?: User | null;
};
