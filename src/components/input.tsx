import React, {useState} from 'react';
import './Input.css'

function Input() {
	const [focus, onFocus] = useState(false);
	const toggleFocus = () => {
		onFocus(focus ? false : true);
	};

	return (
		<div className="row justify-content-center">
			<div className="col-6">
				{focus
					? <fieldset>
						<legend>Email address</legend>
						<input autoFocus/>
					</fieldset>
					: <input placeholder="Email address" onFocus={toggleFocus}/>
				}
			</div>
		</div>
	)
}

export default Input;
