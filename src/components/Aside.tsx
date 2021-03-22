import React from 'react';
import {loremIpsum} from 'lorem-ipsum';
import './Aside.css';

function Aside() {
	return (
		<aside>
			<h2 className="text-align-center">Dummy Heading</h2>
			<p className="text-align-start">{loremIpsum({count: 3, units: 'sentences'})}</p>
		</aside>
	)
}

export default Aside;


