import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const IncomeReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ArtistProfile" source="artistProfile" />
        <NumberInput label="commissionPaid" source="commissionPaid" />
        <DateTimeInput label="month" source="month" />
        <NumberInput label="totalIncome" source="totalIncome" />
        <div />
      </SimpleForm>
    </Create>
  );
};
