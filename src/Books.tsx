import { List, Datagrid, TextField, ReferenceField, EditButton } from "react-admin";

export const BooksList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="authorId" reference="authors" />
      <TextField source="year_of_publication" />
      <EditButton />
    </Datagrid>
  </List>
);