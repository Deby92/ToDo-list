import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

function Home() {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");
	const [todoEditing, setTodoEditing] = useState(null);
	const [editingText, setEditingText] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
		const newTodo = {
			id: new Date().getTime(),
			text: todo,
			completed: false,
		};
		setTodos([...todos].concat(newTodo));
		setTodo("");
	}

	function deleteTodo(id) {
		const updateTodos = [...todos].filter((todo) => todo.id !== id);
		setTodos(updateTodos);
	}

	function editTodo(id) {
		const updateTodos = [...todos].map((todo) => {
			if (todo.id === id) {
				todo.id = editingText;
			}
			return todo;
		});
		setTodos(updateTodos);
		setTodoEditing(null);
		setEditingText("");
	}

	return (
		<div
			className="App d-flex container-fluid row justify-content-center mt-5"
			style={{
				borderRadius: "9%",
				border: "3px solid black",
				backgroundColor: "#BFE6BA",
				width: "500px",
				margin: "auto",
			}}>
			<h1>{"Todo List"}</h1>
			<form onSubmit={handleSubmit}>
				<input
					type={"text"}
					onChange={(e) => setTodo(e.target.value)}
					value={todo}
				/>
				<button className="btn btn btn-outline-dark  border-secondary m-1" type="submit">
					Add
				</button>
			</form>
			{todos.map((todo) => (
				<div className="todoKey" key={todo.id}>
					{todoEditing === todo.id ? (
						<input
							className="d-flex row"
							type={"text"}
							onChange={(e) => setEditingText(e.target.value)}
							value={editingText}
						/>
					) : (
						<div className="d-flex row d-flex float">
							<div
								style={{ fontSize: "20px" }}
								className="todoText">
								{" " + todo.text}
							</div>
						</div>
					)}
					<button
						className="btn delete-btn btn-info m-1 float-end"
						onClick={() => deleteTodo(todo.id)}>
						<BsFillTrashFill />
					</button>
					<button
						className="m-1 btn btn-outline-dark btn-sm float-end"
						onClick={() => setTodoEditing(todo.id)}>
						Edit
					</button>
					
				</div>
			))}
		</div>
	);
}

export default Home;
