import React, {useState} from 'react';
import './Article.css'
import Header from './Header';
import Password from './Password';
import Input from './input';

const emailAddressLegend = 'Email address';
const nameLegend = 'Your name';
function Article() {
	const [name, nameChange] = useState("");
	const onNameChange = (event: any) => {
		nameChange(event.target.value);
	};

	const [emailAddress, emailAddressChange] = useState("");
	const onEmailAddressChange = (event: any) => {
		emailAddressChange(event.target.value);
	};

	const [role, roleChange] = useState("");

	const [password, passwordChange] = useState("");
	const onPasswordChange = (event: any) => {
		passwordChange(event.target.value);
	};

	return (
		<article>
			<Header/>

			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-6">
						<h2 className="margin-bottom-30px">Let's set up your account</h2>
						<p className="margin-bottom-30px">Already have an account?&nbsp;
							<a href="">Sign in</a>
						</p>
					</div>
				</div>
				<Input legend={nameLegend}
				       onChange={onNameChange}
				       value={name}
				/>
				<Input legend={emailAddressLegend}
				       onChange={onEmailAddressChange}
				       value={emailAddress}
				/>
				<div className="row justify-content-center">
					<div className="col-6">
						<select required value={role} onChange={e => roleChange(e.target.value)}>
							<option value="" disabled selected>I would describe emy user type as</option>
							<option value="Developer">Developer</option>
							<option value="Designer">Designer</option>
						</select>
					</div>
				</div>
				<Password onChange={onPasswordChange}
				          value={password}
				/>
				<div className="row justify-content-center">
					<div className="col-6">
						<button className="margin-top-20px width-100-percent btn btn-primary" type="button">Next</button>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<p className="margin-top-20px">By clicking the "Next" button, you agree to creating a free account, and to &nbsp;
							<a href="">
								Terms of Service
							</a>
							&nbsp; and &nbsp;
							<a href="">
								Privacy Policy
							</a>
							.
						</p>
					</div>
				</div>
			</div>
		</article>
	)
}

export default Article;
