import { List, Datagrid, TextField, EditButton } from "react-admin";

export const AuthorsList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="fullname" />
      <TextField source="date_of_birth" />
      <TextField source="nationality" />
      <EditButton />
    </Datagrid>
  </List>
);