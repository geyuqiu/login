import React from 'react';
import './Input.css'

function Input() {
	return (
		<div className="row justify-content-center">
			<div className="col-6">
				<fieldset>
					<legend>Email address</legend>
					{/*<input placeholder="Email address"/>*/}
					<input/>
				</fieldset>
			</div>
		</div>
	)
}

export default Input;
