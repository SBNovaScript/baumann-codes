import React from 'react';
import Typography from '@material-ui/core/Typography';
import CenterSpace from '../../components/center-space';
import { makeStyles } from '@material-ui/styles';
import ButtonSection from '../../components/button-section';

const useStyles = makeStyles(theme => ({
	body: {
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(0, 0, 0, 0)
		},
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(0, 20, 0, 20)
		}
	}
}));

const About = () => {
	const classes = useStyles();

	return (
		<CenterSpace>
			<Typography variant={'h3'}>{'More About Me:'}</Typography>
			<Typography variant={'h5'} className={classes.body}>
				{'I am a fourth year Computer Science and' +
					' Innovation major at Champlain College,' +
					' which is located in Burlington, Vermont.' +
					' My hometown is Trumbull, Connecticut, ' +
					'located just an hour away from NYC. I currently ' +
					'have two jobs: one as a lead game programmer' +
					' for an environmentally focused game funded by ' +
					'Champlain College, and as a software engineering intern' +
					' at DealerPolicy, Inc.'}
			</Typography>
			<ButtonSection showHomeButton showProjectsButton />
		</CenterSpace>
	);
};
export default About;
