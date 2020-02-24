import React from 'react';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';
import { PARTICLES_CONFIG } from '../../data/particles-config';

const useStyles = makeStyles(theme => ({
	particles: {
		height: '100%'
	}
}));

const BackgroundParticles = () => {
	const classes = useStyles();

	return <Particles className={classes.particles} params={PARTICLES_CONFIG} />;
};

export default BackgroundParticles;
