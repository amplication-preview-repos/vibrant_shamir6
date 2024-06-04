import { InviteCodeWhereInput } from "./InviteCodeWhereInput";
import { InviteCodeOrderByInput } from "./InviteCodeOrderByInput";

export type InviteCodeFindManyArgs = {
  where?: InviteCodeWhereInput;
  orderBy?: Array<InviteCodeOrderByInput>;
  skip?: number;
  take?: number;
};
