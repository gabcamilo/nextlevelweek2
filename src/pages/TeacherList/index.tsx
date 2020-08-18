import React from 'react';

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import './styles.css';

function TeacherList () {
	return(
		<div id="page-teacher-list" className="container">
			<PageHeader title="Those are the available teachers.">
				<form id="search-teachers">
					<Input name= "subject" label="Subject"/>
					<Input name= "week-day" label="Week Day"/>
					<Input name= "time" label="Time" type="time"/>
				</form>
			</PageHeader>

			<main>
				<TeacherItem />
			</main>
		</div>
	);
}

export default TeacherList;