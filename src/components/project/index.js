import React from 'react';
import CenterSpace from '../center-space';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
	body: {
		margin: '0 25% 0 25%'
	}
}));

const Project = ({ title, url }) => {
	const classes = useStyles();

  // Try out https://www.npmjs.com/package/react-player

	return (
		<CenterSpace>
			<Typography gutterBottom variant={'h2'}>
				{'Black Hole Project'}
			</Typography>
			<Typography className={classes.body} variant={'h5'}>
				{'Implementation of a black hole simulation in' +
					' Unity for the Microsoft Hololens. Our focus of this project is to provide' +
					' educators with an interactable black hole using real equations, to inspire' +
					' more students to persue Astronomy and Computer Science.'}
			</Typography>
		</CenterSpace>
	);
};

export default Project;
