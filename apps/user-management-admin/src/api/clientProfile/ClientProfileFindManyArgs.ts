import { ClientProfileWhereInput } from "./ClientProfileWhereInput";
import { ClientProfileOrderByInput } from "./ClientProfileOrderByInput";

export type ClientProfileFindManyArgs = {
  where?: ClientProfileWhereInput;
  orderBy?: Array<ClientProfileOrderByInput>;
  skip?: number;
  take?: number;
};
