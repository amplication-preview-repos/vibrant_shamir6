import { InviteCode as TInviteCode } from "../api/inviteCode/InviteCode";

export const INVITECODE_TITLE_FIELD = "code";

export const InviteCodeTitle = (record: TInviteCode): string => {
  return record.code?.toString() || String(record.id);
};
