import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MoodboardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="ClientProfile" source="clientProfile" />
        <div />
      </SimpleForm>
    </Create>
  );
};
