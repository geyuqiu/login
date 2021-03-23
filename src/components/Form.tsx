import React, {useState} from 'react';
import './Form.css'
import Password from './Password';
import Input from './input';
import Select from './Select';

const emailAddressLegend = 'Email address';
const nameLegend = 'Your name';
const emailErrorMessage = 'Please enter a valid email address';

function Form() {
	const [name, nameChange] = useState("");
	const onNameChange = (event: any) => {
		nameChange(event.target.value);
	};

	const [emailAddress, emailAddressChange] = useState("");

	const validateMail = (value: any) => {
		const pattern = /^\S+@\S+\.\S+$/g;
		const result = pattern.test(value);
		result ? mailErrorChange(false) : mailErrorChange(true);
	};

	const validatePassword = (value: string) => {
		value && value.length > 7 ? passwordErrorChange(false) : passwordErrorChange(true);
	};

	const onEmailAddressChange = (event: any) => {
		const value = event.target.value;
		emailAddressChange(value);
		validateMail(value);
	};

	const [mailError, mailErrorChange] = useState(false);
	const [passwordError, passwordErrorChange] = useState(false);
	const [role, roleChange] = useState("");
	const [password, passwordChange] = useState("");
	const onPasswordChange = (event: any) => {
		const value = event.target.value;
		passwordChange(event.target.value);
		validatePassword(value);
	};

	const atLeastOneInvalid = () => {
		const result = name && emailAddress && !mailError && role && password && !passwordError ? false : true;
		return result;
	};

	return (
		<>
			<Input legend={nameLegend}
			       onChange={onNameChange}
			       value={name}
			/>
			<Input legend={emailAddressLegend}
			       onChange={onEmailAddressChange}
			       value={emailAddress}
			       mailError={mailError}
			       emailErrorMessage={emailErrorMessage}
			/>
			<Select role={role} onChange={(e: any) => roleChange(e.target.value)}/>
			<Password onChange={onPasswordChange}
			          value={password}
			/>
			<div className="row justify-content-center">
				<div className="col-6 margin-top-20px">
					<button className={atLeastOneInvalid() ? "btn btn-light" : "btn btn-primary"}
					        type="button"
					        disabled={atLeastOneInvalid()}
					>Next
					</button>
				</div>
			</div>
		</>
	)
}

export default Form;
