import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

interface TeacherItemProps {
	
}

const TeacherItem: React.FunctionComponent<TeacherItemProps> = () => {
	return (
		<article className="teacher-item">
			<header>
				<img src="https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Maria Alves"/>
				<div>
					<strong>Maria Alves</strong>
					<span>Philosophy</span>
				</div>
			</header>
			<p>
				I believe that continuous learning can be of great benefit to all facets of life, and my passion for teaching and helping others has also led to a passion in education. By using the following guidelines, I hope that you too will be able to formulate your own teaching philosophy statement and be proud of your profession. I believe that a statement about the philosophy of teaching will form a strong basis for your teaching objectives. The construction of your philosophical statements will help you find the most effective ways to guide your students in their learning and self-esteem development.
				<br/><br/>
				Teaching is an art, and different individuals have different artistic teaching and learning styles. Each teacher has his own interpretation of what the teaching of learning should be.
			</p>

			<footer>
				<p>
					Price/Hour
					<strong>$ 45.00</strong>
				</p>

				<button type="button">
					<img src={whatsAppIcon} alt="The whatsApp icon"/>
					Contact me
				</button>
			</footer>
		</article>
	);
}

export default TeacherItem;