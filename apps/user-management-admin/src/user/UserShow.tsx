import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { INVITECODE_TITLE_FIELD } from "../inviteCode/InviteCodeTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="ArtistProfile"
          target="userId"
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
        <ReferenceManyField
          reference="ClientProfile"
          target="userId"
          label="ClientProfiles"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="location" source="location" />
            <TextField label="moodboard" source="moodboard" />
            <TextField label="preferredStyles" source="preferredStyles" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
