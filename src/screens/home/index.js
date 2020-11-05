import React from 'react';
import {
	createMuiTheme,
	CssBaseline,
	responsiveFontSizes
} from '@material-ui/core';
import BackgroundParticles from '../../components/background-particles';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Main from '../main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../about';
import Projects from '../projects';
import BlackHoleProject from '../project-list/black-hole-project';
import ProjectEGG from '../project-list/project-egg';
import MoodWeb from '../project-list/mood-web';
import ScrumPointer from '../project-list/scrum-pointer';
import ElectionTracker from '../project-list/election-tracker';

const useStyles = makeStyles({
	wrapperBackground: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%'
	}
});

const theme = responsiveFontSizes(
	createMuiTheme({
		palette: {
			type: 'dark'
		}
	})
);

const Home = () => {
	const classes = useStyles();

	const routes = {
		black_hole: <BlackHoleProject />,
		project_egg: <ProjectEGG />,
		mood_web: <MoodWeb />,
		scrum_pointer: <ScrumPointer />,
		election_tracker: <ElectionTracker />
	};

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
					{Object.entries(routes).map((route, i) => (
						<Route key={i} path={'/projects/' + route[0]}>{route[1]}</Route>
					))}
					<Route path={'/'}>
						<Main />
					</Route>
				</Switch>
			</ThemeProvider>
		</Router>
	);
};

export default Home;
