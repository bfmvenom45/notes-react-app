import React, { useContext, useState } from 'react';
import { AlertContext } from 'src/context/alert/alertContext';

const Form = () => {
	const [value, setValue] = useState('');
	const alert = useContext(AlertContext)

	const submitHandler = event => {
		event.preventDefault()
		alert.show(value, 'sucsses')
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