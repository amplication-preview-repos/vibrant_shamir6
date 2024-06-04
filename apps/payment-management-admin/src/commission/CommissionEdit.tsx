import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CommissionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="ArtistProfile" source="artistProfile" />
        <TextInput label="Booking" source="booking" />
        <DateTimeInput label="date" source="date" />
      </SimpleForm>
    </Edit>
  );
};
