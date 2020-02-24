import React, { Fragment } from 'react';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import BackgroundParticles from '../../components/background-particles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import CenterSpace from '../../components/center-space';
import Button from '@material-ui/core/Button';
import Main from '../main';

const useStyles = makeStyles({
	wrapperBackground: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%'
	}
});

const theme = createMuiTheme({
	palette: {
		type: 'dark'
	}
});

const Home = () => {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<div className={classes.wrapperBackground}>
				<BackgroundParticles />
			</div>
			<Main />
		</ThemeProvider>
	);
};

export default Home;
