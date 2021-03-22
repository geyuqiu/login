import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import './Password.css'

const eye = <FontAwesomeIcon icon={faEye}/>;

function Password() {
	const [passwordShown, setPasswordShown] = useState(false);
	const toggleVisibility = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	return (
		<div className="row justify-content-center">
			<div className="col-6">
				<div className="password-wrapper">
					{" "}
					<input
						placeholder="Password"
						name="password"
						className="margin-bottom-5px"
						type={passwordShown ? "text" : "password"}
					/>
					<i onClick={toggleVisibility}>{eye}</i>{" "}
				</div>
				<small className="gray">Minimum 8 characters</small>
			</div>
		</div>
	)
}

export default Password;
