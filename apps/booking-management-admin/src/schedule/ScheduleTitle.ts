import { Schedule as TSchedule } from "../api/schedule/Schedule";

export const SCHEDULE_TITLE_FIELD = "artistProfile";

export const ScheduleTitle = (record: TSchedule): string => {
  return record.artistProfile?.toString() || String(record.id);
};
