import { Withdrawal as TWithdrawal } from "../api/withdrawal/Withdrawal";

export const WITHDRAWAL_TITLE_FIELD = "artistProfile";

export const WithdrawalTitle = (record: TWithdrawal): string => {
  return record.artistProfile?.toString() || String(record.id);
};
