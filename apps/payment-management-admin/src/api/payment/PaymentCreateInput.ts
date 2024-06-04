export type PaymentCreateInput = {
  amount?: number | null;
  artistProfile?: string | null;
  clientProfile?: string | null;
  date?: Date | null;
  status?: "Option1" | null;
};
