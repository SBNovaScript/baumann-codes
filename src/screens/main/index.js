import Typography from '@material-ui/core/Typography';
import CenterSpace from '../../components/center-space';
import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Main = () => {
	const ButtonSection = () => (
		<Fragment>
			<Grid container justify={'center'}>
				<Button>{'More About Me'}</Button>
				<Button>{'My Projects'}</Button>
			</Grid>
		</Fragment>
	);

	return (
		<CenterSpace>
			<Typography variant={'h3'}>{'Hello!'}</Typography>
			<Typography variant={'h5'}>
				{'I am Steven Baumann, a fourth year ' +
					'Computer Science and Innovation student.'}
			</Typography>
			<ButtonSection />
		</CenterSpace>
	);
};

export default Main;
