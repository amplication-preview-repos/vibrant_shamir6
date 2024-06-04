import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { INVITECODE_TITLE_FIELD } from "../inviteCode/InviteCodeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ArtistProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
