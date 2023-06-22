import { List, Datagrid, TextField, EditButton, TextInput } from "react-admin";

const authorsFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
];

export const AuthorsList = () => (
  <List filters={authorsFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="fullname" />
      <TextField source="date_of_birth" />
      <TextField source="nationality" />
      <EditButton />
    </Datagrid>
  </List>
);