import { ArtistProfileWhereInput } from "./ArtistProfileWhereInput";
import { ArtistProfileOrderByInput } from "./ArtistProfileOrderByInput";

export type ArtistProfileFindManyArgs = {
  where?: ArtistProfileWhereInput;
  orderBy?: Array<ArtistProfileOrderByInput>;
  skip?: number;
  take?: number;
};
