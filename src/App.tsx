
import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';

export const App = () => (
    <Admin
        dataProvider={dataProvider}
	>
        <Resource name="books" list={ListGuesser} />
        <Resource name="authors" list={ListGuesser} />
    </Admin>
);

    