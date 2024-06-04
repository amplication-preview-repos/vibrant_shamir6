import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "artistProfile";

export const BookingTitle = (record: TBooking): string => {
  return record.artistProfile?.toString() || String(record.id);
};
