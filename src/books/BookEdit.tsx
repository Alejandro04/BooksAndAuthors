import {
	SimpleForm,
	TextInput,
	ReferenceInput,
	Edit
} from "react-admin";

export const BookEdit = () => (
	<Edit>
		<SimpleForm>
			<ReferenceInput source="authorId" reference="authors" />
			<TextInput source="title" />
			<TextInput source="year_of_publication" />
		</SimpleForm>
	</Edit>
);