
import { Admin, Resource } from "react-admin";
import { dataProvider } from './dataProvider';
import { BooksList } from './Books'
import { AuthorsList } from './Authors'

export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
        <Resource name="books" list={BooksList}/>
        <Resource name="authors" list={AuthorsList} recordRepresentation="fullname" />
    </Admin>
);

    