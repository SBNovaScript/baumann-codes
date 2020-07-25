import React from 'react';
import ProjectWithVideo from '../../../components/project-with-video';
import BlackHoleDemo from '../../../media/black-hole/BlackHoleDemo.mp4';
import BlackHoleImage from '../../../media/black-hole/BlackHole.jpg';

const BlackHoleProject = () => {
	return (
		<ProjectWithVideo
			title={'Black Hole Project'}
			url={BlackHoleDemo}
			description1={
				'Implementation of a black hole simulation in ' +
				'Unity for the Microsoft Hololens, created in a pair as my senior college project. ' +
				'Our focus for this project was to provide ' +
				'educators with an interactable black hole using real equations, to inspire ' +
				'more students to persue Astronomy and Computer Science.'
			}
			videoSubtitle={'A live demo in the Hololens.'}
			description2={
				'The project contains three main components; ' +
				'The main black hole simulation, ' +
				'A planet orbiting simulation around the black hole, ' +
				'and a time dilation simulation.'
			}
			link={'https://github.com/SBNovaScript/BlackHoleSimulation'}
			linkDescription={'Project Code'}
			image={BlackHoleImage}
			imageTitle={'The Black Hole'}
		/>
	);
};

export default BlackHoleProject;
