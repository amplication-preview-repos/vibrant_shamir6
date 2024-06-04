import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { ArtistProfileTitle } from "../artistProfile/ArtistProfileTitle";

export const InviteCodeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="artistProfiles"
          reference="ArtistProfile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ArtistProfileTitle} />
        </ReferenceArrayInput>
        <TextInput label="code" source="code" />
        <BooleanInput label="valid" source="valid" />
      </SimpleForm>
    </Edit>
  );
};
