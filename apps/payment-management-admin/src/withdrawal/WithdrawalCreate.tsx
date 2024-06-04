import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const WithdrawalCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="ArtistProfile" source="artistProfile" />
        <DateTimeInput label="date" source="date" />
      </SimpleForm>
    </Create>
  );
};
