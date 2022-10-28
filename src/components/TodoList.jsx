import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";
import '../css/todoList.css'
import 'animate.css';

const TodoList = () => {
	const todos = useSelector((state)=>{
		return state.tasks;
	});

	return (
		<div className="tasks-list animate__bounce">
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.name} completed={todo.status} />
			))}
		</div>
	);
};

export default TodoList;