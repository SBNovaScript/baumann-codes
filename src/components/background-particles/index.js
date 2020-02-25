import React, { Fragment } from 'react';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';
import {
	PARTICLES_CONFIG,
	PARTICLES_CONFIG_SMALL
} from '../../data/particles-config';
import { useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
	particles: {
		height: '100%'
	}
});

const BackgroundParticles = () => {
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.up('sm'));
	const classes = useStyles();

	return (
		<Fragment>
			{smallScreen ? (
				<Particles className={classes.particles} params={PARTICLES_CONFIG} />
			) : (
				<Particles
					className={classes.particles}
					params={PARTICLES_CONFIG_SMALL}
				/>
			)}
		</Fragment>
	);
};

export default BackgroundParticles;
