import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MoodboardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="ClientProfile" source="clientProfile" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
