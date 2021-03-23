import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import './Password.css'

const eye = <FontAwesomeIcon icon={faEye}/>;

const passwordLegend = "Password";
function Password() {
	const [focus, onFocus] = useState(false);
	const toggleFocus = () => {
		onFocus(focus ? false : true);
	};

	const [passwordShown, setPasswordShown] = useState(false);
	const toggleVisibility = () => {
		setPasswordShown(passwordShown ? false : true);
	};

	return (
		<div className="row justify-content-center">
			<div className="col-6">
				<div className="password-wrapper">
					{focus
						? <fieldset className="margin-bottom-5px">
							<legend>{passwordLegend}</legend>
							<input
								autoFocus
								type={passwordShown ? "text" : "password"}
							/>
							<i onClick={toggleVisibility}>{eye}</i>{" "}
						</fieldset>
						: (
							<>
								<input
								placeholder={passwordLegend}
								className="margin-bottom-5px"
								onFocus={toggleFocus}
								type={passwordShown ? "text" : "password"}
								/>
								<i onClick={toggleVisibility}>{eye}</i>{" "}
							</>
						)
					}
				</div>
				<small className="gray">Minimum 8 characters</small>
			</div>
		</div>
	)
}

export default Password;
