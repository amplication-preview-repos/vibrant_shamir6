import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const WithdrawalEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="ArtistProfile" source="artistProfile" />
        <DateTimeInput label="date" source="date" />
      </SimpleForm>
    </Edit>
  );
};
