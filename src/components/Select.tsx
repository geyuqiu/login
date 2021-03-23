import React from 'react';

function Select(props: any) {

	return (
		<div className="row justify-content-center">
			<div className="col-6">
				<select required value={props.role} onChange={props.onChange}>
					<option value="" disabled selected>I would describe my user type as</option>
					<option value="Developer">Developer</option>
					<option value="Designer">Designer</option>
				</select>
			</div>
		</div>
	)
}

export default Select;
