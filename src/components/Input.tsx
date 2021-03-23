import React, {useState} from 'react';
import './Input.css'

function Input(props: any) {
	const [focus, onFocus] = useState(false);
	const toggleFocus = () => {
		onFocus(focus ? false : true);
	};

	return (
		<div className={props.mailError ? "row justify-content-center margin-bottom-15px" : "row justify-content-center"}>
			<div className="col-6">
				{focus
					? <fieldset className={props.mailError ? "margin-bottom-5px" : ""}>
						<legend>{props.legend}</legend>
						<input autoFocus onBlur={toggleFocus} onChange={props.onChange}
						       value={props.value}/>
					</fieldset>
					: <input placeholder={props.legend} onFocus={toggleFocus}
					         className={props.mailError ? "margin-bottom-5px" : ""}
					         value={props.value}/>
				}
				{props.mailError
					? <small className="red">{props.emailErrorMessage}</small>
					: ""
				}
			</div>
		</div>
	)
}

export default Input;
