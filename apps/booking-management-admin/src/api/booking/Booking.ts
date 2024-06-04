export type Booking = {
  artistProfile: string | null;
  clientProfile: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  status?: "Option1" | null;
  tattooDescription: string | null;
  updatedAt: Date;
};
