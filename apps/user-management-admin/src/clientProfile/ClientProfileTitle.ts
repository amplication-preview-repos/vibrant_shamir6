import { ClientProfile as TClientProfile } from "../api/clientProfile/ClientProfile";

export const CLIENTPROFILE_TITLE_FIELD = "location";

export const ClientProfileTitle = (record: TClientProfile): string => {
  return record.location?.toString() || String(record.id);
};
