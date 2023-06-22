import {
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin";

export const AuthorEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="fullname" />
      <TextInput source="date_of_birth" />
      <TextInput source="nationality" />
    </SimpleForm>
  </Edit>
);