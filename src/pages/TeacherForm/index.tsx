import React from 'react';

import PageHeader from '../../components/PageHeader'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import Input from '../../components/Input';

function TeacherForm () {
	return(
		<div id="page-teacher-form" className="container">
		<PageHeader
			title="It's amazing you wanna teach!"
			description="The first step is to fill this application form."
		/>
		<main>
			<fieldset>
				<legend>Your registration data</legend>

				<Input name="name" label="Full name"/>
				<Input name="avatar" label="Avatar"/>
				<Input name="whatsapp" label="WhatsApp"/>
			</fieldset>

			<fieldset>
				<legend>About the class</legend>

				<Input name="subject" label="Subject"/>
				<Input name="avatar" label="Avatar"/>
				<Input name="whatsapp" label="WhatsApp"/>
			</fieldset>

		<footer>
			<p>
				<img src={warningIcon} alt="Important warning"/>
				Important! <br/>
				Fill all the fields
			</p>
			<button type="button">Save</button>
		</footer>
		</main>
	</div>
	);
}

export default TeacherForm;