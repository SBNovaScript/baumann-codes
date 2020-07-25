import React from 'react';
import AddNew from '../../../media/mood-web/AddNew.jpg';
import Mobile from '../../../media/mood-web/Mobile.jpg';
import ProjectWithPicture from '../../../components/project-with-picture';

const MoodWeb = () => {
	return (
		<ProjectWithPicture
			title={'MoodWeb'}
			description1={
				'MoodWeb is a fullstack social network for sharing your mood. ' +
				'Written in Node.js, React, and using a MongoDB backend, MoodWeb provides ' +
				'A seamless social network experience.'
			}
			image1={AddNew}
			image1Title={'Add a new mood'}
			description2={
				'While this project is still in development, the current demo shows ' +
				"my proof of concept of it's design."
			}
			link={'https://github.com/SBNovaScript/MoodWeb'}
			linkDescription={'MoodWeb Code'}
			image2={Mobile}
			image2Title={'MoodWeb Mobile View'}
		/>
	);
};

export default MoodWeb;
