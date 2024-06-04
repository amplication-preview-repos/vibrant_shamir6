import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { INVITECODE_TITLE_FIELD } from "../inviteCode/InviteCodeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ArtistProfileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ArtistProfiles"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
