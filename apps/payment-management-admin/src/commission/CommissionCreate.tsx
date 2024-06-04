import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CommissionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="ArtistProfile" source="artistProfile" />
        <TextInput label="Booking" source="booking" />
        <DateTimeInput label="date" source="date" />
      </SimpleForm>
    </Create>
  );
};
