import React from 'react'

import './styles.css'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

function Landing(){
	return(
		<div id="page-landing">
			<div id="page-landing-content" className="container">
				<div className="logo-container">
					<img src={logoImg} alt="Proffy"/>
				  <h2>Your Online Study Platform</h2>
				</div>

				<img
					className="hero-image" 
					src={landingImg}
					alt="Study Platform"
				/>
				<div className="buttons-container">
					<a href="" className="study">
						<img src={studyIcon} alt="Study"/>
						Study
					</a>
					<a href="" className="give-classes">
						<img src={giveClassesIcon} alt="Study"/>
						Give Classes
					</a>
				</div>

				<span className="total-connections">
					Total of 200 connections already made
					<img src={purpleHeartIcon} alt="Purple heart"/>
				</span>

			</div>
		</div>
	)
}

export default Landing;