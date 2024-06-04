import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INVITECODE_TITLE_FIELD } from "./InviteCodeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const InviteCodeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="valid" source="valid" />
        <ReferenceManyField
          reference="ArtistProfile"
          target="inviteCodeId"
          label="ArtistProfiles"
        >
          <Datagrid rowClick="show">
            <TextField label="bio" source="bio" />
            <TextField label="commissionRate" source="commissionRate" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="InviteCode"
              source="invitecode.id"
              reference="InviteCode"
            >
              <TextField source={INVITECODE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="location" source="location" />
            <TextField label="priceRange" source="priceRange" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="workPortfolio" source="workPortfolio" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
