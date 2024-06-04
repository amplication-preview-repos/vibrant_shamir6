import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ScheduleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ArtistProfile" source="artistProfile" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
