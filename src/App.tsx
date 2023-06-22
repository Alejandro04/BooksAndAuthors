
import { Admin, Resource, EditGuesser } from "react-admin";
import { dataProvider } from './dataProvider';
import { BooksList } from './Books'
import { AuthorsList } from './Authors'
import { AuthorEdit } from "./AuthorEdit";
import { AuthorCreate } from "./AuthorCreate";
import { BookEdit } from "./BookEdit";
import { BookCreate } from "./BookCreate";

export const App = () => (
	<Admin
		dataProvider={dataProvider}
	>
		<Resource
			name="books"
			list={BooksList}
			edit={BookEdit}
			create={BookCreate} />
		<Resource
			name="authors"
			list={AuthorsList}
			recordRepresentation="fullname"
			edit={AuthorEdit}
			create={AuthorCreate} />
	</Admin>
);

