import { JsonValue } from "type-fest";

export type Schedule = {
  artistProfile: string | null;
  availability: JsonValue;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
