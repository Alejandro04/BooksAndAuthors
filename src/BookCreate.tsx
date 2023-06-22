import {
	Create,
	SimpleForm,
	TextInput,
	ReferenceInput
} from "react-admin";

export const BookCreate = () => (
	<Create>
		<SimpleForm>
			<ReferenceInput source="authorId" reference="authors" />
			<TextInput source="title" />
			<TextInput source="year_of_publication" />
		</SimpleForm>
	</Create>
);