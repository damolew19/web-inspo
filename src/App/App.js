import React, {useState} from 'react';
import { hot } from 'react-hot-loader/root';

import './App.scss'
import Header from '../Header/Header'
import Card from '../Card/Card'
import Category from '../Category/Category';
import Modal from  '../Modal/Modal';


const App = () => {

	const [section, setSection] = useState([])

	const addCategory = () => {
		setSection(section =>  [...section, <Category />])
		document.querySelector('#category-modal').style.display = "flex";
	}

	return(
		<div className="app">
			<Header addCategory={addCategory}/>
			<Category heading="CFA" subheading="Inspiration For Work"/>	
			{section}
			<div id="site-modal">
				<Modal firstInput="Site" secondInput="URL"/>
			</div>
			<div id="category-modal">
				<Modal firstInput="Category Title" secondInput="Category Sub-heading"/>
			</div>
		</div>
	)
}

export default App;