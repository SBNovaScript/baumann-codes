import React from 'react';
import Widescreen from '../../../media/project-egg/Widescreen.jpg';
import Tent from '../../../media/project-egg/Tent.jpg';
import ProjectWithPicture from '../../../components/project-with-picture';

const ProjectEGG = () => (
	<ProjectWithPicture
		title={'Project E.G.G.'}
		description1={
			'An environmentally focused exploration game, where the user changes the world ' +
			'for the user that comes after them. Made on a team of 8, I was one of the founding members ' +
			'of this project, and worked on it from January of 2019 to May of 2020. I was the lead ' +
			"programmer for this game, where I created it's foundation and contributed to the " +
			'creation of incremental updates. I ' +
			'also created the fullstack portion of the game, where it connects to a MySQL database ' +
			'through a PHP based API.'
		}
		image1={Widescreen}
		image1Title={'The Main World'}
		description2={
			'This project was funded by the Emergent Media Center, a branch of Champlain College ' +
			'located in Burlington, Vermont. The name of our team was Envirobox.'
		}
		link={'https://projectegg.emergentmediacenter.com/'}
		linkDescription={'Live Demo'}
		image2={Tent}
		image2Title={"The player's starting location."}
	/>
);

export default ProjectEGG;
