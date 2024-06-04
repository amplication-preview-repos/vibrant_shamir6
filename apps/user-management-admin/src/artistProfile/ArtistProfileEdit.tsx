import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { InviteCodeTitle } from "../inviteCode/InviteCodeTitle";
import { UserTitle } from "../user/UserTitle";

export const ArtistProfileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <NumberInput label="commissionRate" source="commissionRate" />
        <ReferenceInput
          source="inviteCode.id"
          reference="InviteCode"
          label="InviteCode"
        >
          <SelectInput optionText={InviteCodeTitle} />
        </ReferenceInput>
        <TextInput label="location" source="location" />
        <NumberInput label="priceRange" source="priceRange" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};
