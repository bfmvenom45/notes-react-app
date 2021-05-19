import React, { Fragment, useContext, useEffect } from 'react';
import Form from 'src/components/Form';
import Loader from 'src/components/Loader';
import Notes from 'src/components/Notes';
import { FirebaseContext } from 'src/context/firebase/firebaseContext';

export const Home = () => {
	const { fetchNotes, loading, notes, removeNote  } = useContext(FirebaseContext);// eslint-disable-next-line
	useEffect(() => {
		fetchNotes(); // eslint-disable-next-line
	}, []);// eslint-disable-next-line
	return (
		<Fragment>
			<Form />
			<hr />
			{loading ?
				<Loader />
				: <Notes notes={notes} onRemove={removeNote } />}
		</Fragment>
	);
}
;

