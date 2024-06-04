import { JsonValue } from "type-fest";

export type Moodboard = {
  clientProfile: string | null;
  createdAt: Date;
  id: string;
  images: JsonValue;
  updatedAt: Date;
};
