export type Payment = {
  amount: number | null;
  artistProfile: string | null;
  clientProfile: string | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
