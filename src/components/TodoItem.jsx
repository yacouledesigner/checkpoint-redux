
import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";
import '../css/todoItem.css'

const TodoItem = ({ id, title }) => {

	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	}

	return (
		<li className="task-item">
			<div>
				{title}
			</div>
			<div>
				<button className="remove-task-button" onClick={()=>{
					removeTask();
				}}><i class="fa-solid fa-trash"></i></button>
			</div>
		</li>
	);
};

export default TodoItem;