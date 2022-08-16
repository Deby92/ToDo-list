import React, {useState} from "react";
import { BsFillTrashFill } from "react-icons/bs";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [newItem, setNewItem] = useState("");
	const [items, setItems] = useState([]);

	const addItem = () => {
		if(!newItem) {
			alert("enter an item.");
			return;
		}

		const item = {
			id: Math.floor(Math.random() * 1000),
			value: newItem
		};

		setItems(oldList => [...oldList, item]);
		setNewItem("");
	}
	const deleteItem = (id) => {
		const newArray = items.filter(item => item.id !== id);
		setItems(newArray);

	}
	return (
		<div className="App App d-flex container-fluid row justify-content-center mt-5" style={{
			borderRadius: "4%",
			border: "3px solid black",
			backgroundColor: "cyan",
			width: "500px",
			margin: "auto",
			listStyle: "none",
		}}>
			<h1 className="text">ToDo list App!</h1>

			<input 
				className="input text-center p-4"
				type="text"
				placeholder="Add Item here"
				value={newItem}
				onChange={e => setNewItem(e.target.value)}
			/>
			<button 
			className="btn_container"
			onClick={() => addItem()}>Add</button>

			<ul className="list-group list-group-flush d-flex">
				{items.map(item => {
					return(
						<li key={item.id}>{item.value} <button className="list-group-item float-end bg-transparent" onClick={() => deleteItem(item.id)}><BsFillTrashFill/></button></li>
					)
				})}
			</ul>
			
		</div>
	);
};

export default Home;
