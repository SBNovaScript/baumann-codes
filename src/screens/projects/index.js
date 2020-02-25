import React from 'react';
import Typography from '@material-ui/core/Typography';
import CenterSpace from '../../components/center-space';
import ButtonSection from '../../components/button-section';

const Projects = () => (
	<CenterSpace>
		<Typography variant={'h3'}>
			{'Here are a selection of my projects: '}
		</Typography>
		<Typography variant={'h5'}>{'Projects'}</Typography>
		<ButtonSection showHomeButton showAboutButton />
	</CenterSpace>
);

export default Projects;
