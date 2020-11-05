import React from 'react';
import ProjectWithVideo from '../../../components/project-with-video';
import Outlook from '../../../media/election-tracker/Outlook.jpg';

const ElectionTracker = () => {
	return (
		<ProjectWithVideo
			title={'2020 Presidential Election Tracker'}
			url={'https://youtu.be/8Oz0sbeu238'}
			description1={
				'I created a mobile first 2020 presidential election tracker,' +
				' which polls a New York Times ' +
				'data source in order to retrieve real-time data. ' +
				'Data refreshes and updates every minute.'
			}
			videoSubtitle={'A live demo in the Hololens.'}
			description2={
				'This project was created as a mini-hackathon project ' +
				'during election night, when the ' +
				'NYT data became available. The project was created with React,' +
				' using the Tailwind css framework.'
			}
			link={'https://baumann.codes/election'}
			linkDescription={'The App'}
			image={Outlook}
			imageTitle={'The Main Outlook'}
		/>
	);
};

export default ElectionTracker;
