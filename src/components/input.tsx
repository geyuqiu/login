import React, {useState} from 'react';
import './Input.css'

function Input(props: any) {
	const [focus, onFocus] = useState(false);
	const toggleFocus = () => {
		onFocus(focus ? false : true);
	};

	return (
		<div className="row justify-content-center">
			<div className="col-6">
				{focus
					? <fieldset>
						<legend>{props.legend}</legend>
						<input autoFocus/>
					</fieldset>
					: <input placeholder={props.legend} onFocus={toggleFocus}/>
				}
			</div>
		</div>
	)
}

export default Input;
