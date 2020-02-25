import Typography from '@material-ui/core/Typography';
import CenterSpace from '../../components/center-space';
import React from 'react';
import ButtonSection from '../../components/button-section';

const Main = () => {
	return (
		<CenterSpace>
			<Typography variant={'h3'}>{'Hello!'}</Typography>
			<Typography variant={'h5'}>
				{'I am Steven Baumann, a fourth year ' +
					'Computer Science and Innovation student.'}
			</Typography>
			<ButtonSection showAboutButton showProjectsButton />
		</CenterSpace>
	);
};

export default Main;
