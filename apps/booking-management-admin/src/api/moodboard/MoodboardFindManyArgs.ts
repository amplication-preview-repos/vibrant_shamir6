import { MoodboardWhereInput } from "./MoodboardWhereInput";
import { MoodboardOrderByInput } from "./MoodboardOrderByInput";

export type MoodboardFindManyArgs = {
  where?: MoodboardWhereInput;
  orderBy?: Array<MoodboardOrderByInput>;
  skip?: number;
  take?: number;
};
