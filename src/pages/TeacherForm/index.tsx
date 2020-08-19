import React from 'react';

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

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
				<TextArea name="biography" label="Biography"/>
			</fieldset>

			<fieldset>
				<legend>About the class</legend>
				<Select
					name="subject"
					label="Subject"
					options={[
						{value: 'Arts', label: 'Arts'},
						{value: 'Philosophy', label: 'Philosophy'},
						{value: 'Math', label: 'Math'},
						{value: 'English', label: 'English'},
						{value: 'Chemistry', label: 'Chemistry'},
					]}
				/>
				<Input name="cost" label="Price"/>
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