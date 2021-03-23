import React, {useState} from 'react';
import Header from './Header';
import Form from './Form';
function Article() {
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
				<Form/>
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
