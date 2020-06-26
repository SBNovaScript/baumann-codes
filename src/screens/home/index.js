import React from 'react';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import BackgroundParticles from '../../components/background-particles';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Main from '../main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../about';
import Projects from '../projects';
import BlackHoleProject from '../black-hole-project';

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
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className={classes.wrapperBackground}>
					<BackgroundParticles />
				</div>
				<Switch>
					<Route path={'/about'}>
						<About />
					</Route>
					<Route exact path={'/projects'}>
						<Projects />
					</Route>
					<Route path={'/projects/black_hole'}>
						<BlackHoleProject />
					</Route>
					<Route path={'/'}>
						<Main />
					</Route>
				</Switch>
			</ThemeProvider>
		</Router>
	);
};

export default Home;
