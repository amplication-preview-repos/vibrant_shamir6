import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  artistProfile?: SortOrder;
  clientProfile?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  tattooDescription?: SortOrder;
  updatedAt?: SortOrder;
};
