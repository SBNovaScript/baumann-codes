import React from 'react';
import Widescreen from '../../../media/project-egg/Widescreen.jpg';
import Tent from '../../../media/project-egg/Tent.jpg';
import ProjectWithPicture from '../../../components/project-with-picture';

const ProjectEGG = () => (
	<ProjectWithPicture
		title={'Project E.G.G.'}
		description1={
			'An environmentally focused exploration game, made on a team of 8 for ' +
			"Champlain College's Emergent Media Center. In this game, the user changes the world " +
			'for the user that comes after them. I was the lead ' +
			"programmer for this game, where I created it's foundation and contributed to the " +
			'creation of incremental updates. I ' +
			'also created the fullstack portion of the game, where it connects to a ' +
			'MySQL database through a PHP based API.'
		}
		image1={Widescreen}
		image1Title={'The Main World'}
		description2={
			'While this game is still in development at the EMC, our team was able ' +
			'to portray the ' +
			'intended message with the resulting demo we created.'
		}
		link={'https://projectegg.emergentmediacenter.com/'}
		linkDescription={'Live Demo'}
		image2={Tent}
		image2Title={"The player's starting location."}
	/>
);

export default ProjectEGG;
