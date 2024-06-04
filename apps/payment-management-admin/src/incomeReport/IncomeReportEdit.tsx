import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const IncomeReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ArtistProfile" source="artistProfile" />
        <NumberInput label="commissionPaid" source="commissionPaid" />
        <DateTimeInput label="month" source="month" />
        <NumberInput label="totalIncome" source="totalIncome" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
