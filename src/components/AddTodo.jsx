import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import '../css/addTodo.css'

const AddTodo = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();

		if(value.trim().length === 0)
		{
			alert("Vous devez entrer une tâche");
			setValue("");
			return;
		}

		dispatch(
			addTask({
				task: value
			})
		);

		setValue("");
	};

	return (
		<div className="add-todo">
			<input
                id='text'
                name='text'
				type="text"
				className="task-input"
				placeholder="Ajouter une tâche"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button className="task-button" onClick={onSubmit}>
            <i className="fa-duotone fa-plus"></i>
			</button>
		</div>
	);
};

export default AddTodo;