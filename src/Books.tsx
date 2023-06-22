import { 
  List, 
  Datagrid, 
  TextField, 
  ReferenceField, 
  EditButton, 
  TextInput, 
  ReferenceInput 
} from "react-admin";

const booksFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="authorId" label="Author" reference="authors" />,
];

export const BooksList = () => (
  <List filters={booksFilters}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="authorId" reference="authors" />
      <TextField source="year_of_publication" />
      <EditButton />
    </Datagrid>
  </List>
);