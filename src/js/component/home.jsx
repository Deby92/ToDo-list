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
		<div className="App text-center my-5">
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

			<ul>
				{items.map(item => {
					return(
						<li key={item.id}>{item.value} <button className="delete-btn" onClick={() => deleteItem(item.id)}><BsFillTrashFill/></button></li>
					)
				})}
			</ul>
			
		</div>
	);
};

export default Home;
