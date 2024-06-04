import { SortOrder } from "../../util/SortOrder";

export type ClientProfileOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  moodboard?: SortOrder;
  preferredStyles?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
