import React from 'react';

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList () {
	return(
		<div id="page-teacher-list" className="container">
			<PageHeader title="Those are the available teachers.">
				<form id="search-teachers">
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
					<Select
						name="week-day"
						label="Week Day"
						options={[
							{value: '1', label: 'Monday'},
							{value: '2', label: 'Tuesday'},
							{value: '3', label: 'Wednesday'},
							{value: '4', label: 'Thursday'},
							{value: '5', label: 'Friday'},
							{value: '6', label: 'Saturday'},
							{value: '0', label: 'Sunday'},
						]}
					/>
					
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