import React from 'react';
import './Password.css'

function Password() {
	return (
		<div className="row justify-content-center">
			<div className="col-6">
				<input placeholder="Password" type="password" className="margin-bottom-5px"/>
				<small className="gray">Minimum 8 characters</small>
			</div>
		</div>
	)
}

export default Password;
