
import { Admin, Resource, EditGuesser } from "react-admin";
import { dataProvider } from './dataProvider';
import { BooksList } from './books/Books'
import { AuthorsList } from './authors/Authors'
import { AuthorEdit } from "./authors/AuthorEdit";
import { AuthorCreate } from "./authors/AuthorCreate";
import { BookEdit } from "./books/BookEdit";
import { BookCreate } from "./books/BookCreate";

import BookIcon from "@mui/icons-material/Book";
import AuthorIcon from "@mui/icons-material/Group";

export const App = () => (
	<Admin
		dataProvider={dataProvider}
	>
		<Resource
			name="books"
			list={BooksList}
			edit={BookEdit}
			create={BookCreate}
			icon={BookIcon} />
		<Resource
			name="authors"
			list={AuthorsList}
			recordRepresentation="fullname"
			edit={AuthorEdit}
			create={AuthorCreate}
			icon={AuthorIcon} />
	</Admin>
);

