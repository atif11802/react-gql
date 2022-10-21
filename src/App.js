import logo from "./logo.svg";
import "./App.css";
import Trial from "./components/Trial";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./components/Details";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Trial />} />
				<Route path='/:id' element={<Details />} />
			</Routes>
		</div>
	);
}

export default App;
