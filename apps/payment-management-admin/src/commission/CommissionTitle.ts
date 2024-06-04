import { Commission as TCommission } from "../api/commission/Commission";

export const COMMISSION_TITLE_FIELD = "artistProfile";

export const CommissionTitle = (record: TCommission): string => {
  return record.artistProfile?.toString() || String(record.id);
};
