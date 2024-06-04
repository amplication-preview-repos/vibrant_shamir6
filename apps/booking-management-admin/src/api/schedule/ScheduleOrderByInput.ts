import { SortOrder } from "../../util/SortOrder";

export type ScheduleOrderByInput = {
  artistProfile?: SortOrder;
  availability?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
