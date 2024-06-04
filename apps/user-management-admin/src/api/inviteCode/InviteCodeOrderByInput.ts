import { SortOrder } from "../../util/SortOrder";

export type InviteCodeOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  valid?: SortOrder;
};
