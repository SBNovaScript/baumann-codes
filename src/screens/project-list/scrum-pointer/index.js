import React from 'react';
import ProjectWithPicture from '../../../components/project-with-picture';
import ExampleChannel from '../../../media/scrum-pointer/ExampleChannel.jpg';
import HomePage from '../../../media/scrum-pointer/HomePage.jpg';

const ScrumPointer = () => (
	<ProjectWithPicture
		title={'Scrum Pointer'}
		description1={
			'A fullstack, real-time scrum pointing solution! A group ' +
			'of users connects to a room, and collectively point scrum ticket items ' +
			'in real time.'
		}
		image1={HomePage}
		image1Title={'The Home Page.'}
		description2={
			'Scrum pointer uses Typescript, Feathersjs, and Bootstrap to ' +
			'seamlessly connect users together in realtime.'
		}
		image2={ExampleChannel}
		image2Title={'An Example Room.'}
		link={'https://github.com/SBNovaScript/scrum-pointer'}
		linkDescription={'GitHub'}
	/>
);

export default ScrumPointer;
