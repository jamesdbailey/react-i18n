import './App.css';
import { Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Page2 from './Page2';
import Footer from './Footer';

function App() {
	const test = () => {
		console.log("Testing");
	};

	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route exact path='/' element={<Home />}/>
				<Route path='/page2' element={<Page2 />}/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
