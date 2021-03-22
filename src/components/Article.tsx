import React from 'react';
import './Article.css'
import Header from './Header';

function Article() {
	return (
		<article>
			<Header/>

			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-6">
						<h2>Let's set up your account</h2>

						<p>Already have an account?&nbsp;
							<a href="">Sign in</a>
						</p>

					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<input placeholder="Your name"/>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<input placeholder="Email address"/>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<select>
							<option value="" disabled selected>I would describe emy user type as</option>
							<option value="Developer">Developer</option>
							<option value="Designer">Designer</option>
						</select>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<input placeholder="Password" type="password"/>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<small>Minimum 8 characters</small>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<button className="margin-top-20px width-100-percent">Next</button>
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
