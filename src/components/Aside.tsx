import React from 'react';
import {loremIpsum} from 'lorem-ipsum';
import './Aside.css';

function Aside() {
	return (
		<aside>
			<h2 className="text-align-center">Dummy Heading</h2>
			<p className="paragraph">{loremIpsum({count: 2, units: 'sentences'})}</p>
		</aside>
	)
}

export default Aside;
