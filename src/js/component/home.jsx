import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [newItem, setNewItem] = useState("");
	const [items, setItems] = useState([]);

	const addItem = () => {
		if(!newItem) {
			alert("enter an item.")
			return;
		}

		const item = {
			id: Math.floor(Math.random() * 1000),
			value: newItem
		};
	}
	return (
		<div className="App">
			<h1 className="text">ToDo list App!</h1>

			<input 
				type="text"
				placeholder="Add Item here"
				value={newItem}
				onChange={e => setNewItem(e.target.value)}
			/>
			<button onClick={() => addItem()}>Add</button>
			
		</div>
	);
};

export default Home;
