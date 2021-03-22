import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aside from './components/Aside';
import Article from './components/Article';

function App() {
	return (
		<main>
			<div className="flex">
				<div className="flex-75-percent">
					<Article/>

				</div>
				<div className="flex-25-percent flex">
					<Aside/>
				</div>
			</div>
		</main>
	)
}

export default App;


