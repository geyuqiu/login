import React from 'react';

function Article() {
	return (
		<article>
			<header> Step 1 of 3</header>
			<h2>Let's set up your account</h2>
			<p>Already have an account?&nbsp;
				<a href="">Sign in</a>
			</p>
			<input placeholder="Your name"/>
			<input placeholder="Email address"/>
			<select>
				<option value="" disabled selected>I would describe emy user type as</option>
				<option value="Developer">Developer</option>
				<option value="Designer">Designer</option>
			</select>
			<input placeholder="Password" type="password"/>
			<small>Minimum 8 characters</small>
			<button>Next</button>
			<p>By clicking the "Next" button, you agree to creating a free account, and to &nbsp;
				<a href="">
					Terms of Service
				</a>
				&nbsp; and &nbsp;
				<a href="">
					Privacy Policy
				</a>
				.</p>
		</article>
	)
}

export default Article;


