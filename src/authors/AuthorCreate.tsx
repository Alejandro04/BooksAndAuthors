import {
    Create,
    SimpleForm,
    TextInput,
} from "react-admin";

export const AuthorCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="fullname" />
      <TextInput source="date_of_birth"/>
      <TextInput source="nationality"/>
    </SimpleForm>
  </Create>
);