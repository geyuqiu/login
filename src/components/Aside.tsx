import React from 'react';
import {loremIpsum} from 'lorem-ipsum';

function Aside() {
	return (
		<aside>
			<h2>Dummy Heading</h2>
			<p>{loremIpsum()}</p>
		</aside>
	)
}

export default Aside;


