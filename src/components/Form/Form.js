import React, { useContext, useState } from 'react';
import { AlertContext } from 'src/context/alert/alertContext';
import { FirebaseContext } from 'src/context/firebase/firebaseContext';

const Form = () => {
	const [value, setValue] = useState('');
	const alert = useContext(AlertContext);
	const firebase = useContext(FirebaseContext);

	const submitHandler = event => {
		event.preventDefault()
		if (value.trim()) {
			firebase.addNote(value.trim()).then(() => {
				alert.show('Заметка была создана', 'success')
			}).catch( () => {
				alert.show('Что-то пошл не так ', 'danger ')
			})
			setValue('')
		} else {
			alert.show('Введите название заметки')
		}
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Введите название заметки"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </div>
		</form>
	);
};

export default Form;