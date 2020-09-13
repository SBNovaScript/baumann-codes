import React from 'react';
import ProjectWithVideo from '../../../components/project-with-video';
import BlackHoleImage from '../../../media/black-hole/BlackHole.jpg';

const BlackHoleProject = () => {
	return (
		<ProjectWithVideo
			title={'Black Hole Project'}
			url={'https://www.youtube.com/watch?v=ZfDB6imimPA'}
			description1={
				'For my senior college capstone project, my capstone partner and I ' +
				'created a fully functional and accurate augmented reality black hole ' +
				'simulation. Our focus for this project was to provide educators, ' +
				'students, and anyone with an interest in astronomy a simulated ' +
				'black hole that they could view in their real environments. ' +
				'The simulation has three main sections; a ' +
				'newtonian orbiting example, a time dilation example, and the black hole. ' +
				'This project is meant to be viewed on the Microsoft HoloLens, a wire ' +
				'free augmented reality device. A demo from this device can be seen below.'
			}
			videoSubtitle={'A live demo in the Hololens.'}
			description2={
				'This project was created in the Unity3D engine, which we chose in ' +
				'order to take advantage of it’s shader system as well as it’s ' +
				'integration with the HoloLens. The scripts for the project were ' +
				'written in C#, and the shader in HLSL.'
			}
			link={'https://github.com/SBNovaScript/BlackHoleSimulation'}
			linkDescription={'Project Code'}
			image={BlackHoleImage}
			imageTitle={'The Black Hole'}
		/>
	);
};

export default BlackHoleProject;
