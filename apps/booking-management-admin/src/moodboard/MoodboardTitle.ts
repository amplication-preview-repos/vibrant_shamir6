import { Moodboard as TMoodboard } from "../api/moodboard/Moodboard";

export const MOODBOARD_TITLE_FIELD = "clientProfile";

export const MoodboardTitle = (record: TMoodboard): string => {
  return record.clientProfile?.toString() || String(record.id);
};
