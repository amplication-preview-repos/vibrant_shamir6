import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ScheduleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ArtistProfile" source="artistProfile" />
        <div />
      </SimpleForm>
    </Create>
  );
};
