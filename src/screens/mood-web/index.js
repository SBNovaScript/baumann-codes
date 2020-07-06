import React from 'react';
import AddNew from '../../media/mood-web/AddNew.jpg';
import Header from '../../media/mood-web/Header.jpg';
import ProjectWithPicture from '../../components/project-with-picture';

const MoodWeb = () => {
	return (
		<ProjectWithPicture
			title={'MoodWeb'}
			description1={
				'MoodWeb is a fullstack social network for sharing your mood.' +
				'Written in Node.js, React, and using a MongoDB backend, Moodweb provides' +
				'A seamless social network experience.'
			}
			image1={AddNew}
			image1Title={'Add a new mood'}
			description2={
				'While this project is still in development, and needs an overhaul of' +
				' design, it does show my proof of concept for the application.'
			}
			link={'https://github.com/SBNovaScript/MoodWeb'}
			linkDescription={'MoodWeb Code'}
			image2={Header}
			image2Title={'The MoodWeb Header'}
		/>
	);
};

export default MoodWeb;
