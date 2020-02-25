import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import FadeInOrder from '../fade-in-order';

const ButtonSection = ({
	showAboutButton,
	showProjectsButton,
	showHomeButton
}) => (
	<Fragment>
		<Grid container justify={'center'}>
			<FadeInOrder>
				{showHomeButton ? (
					<Button component={Link} to={'/'}>
						{'Home'}
					</Button>
				) : null}
				{showAboutButton ? (
					<Button component={Link} to={'/about'}>
						{'More About Me'}
					</Button>
				) : null}
				{showProjectsButton ? (
					<Button component={Link} to={'/projects'}>
						{'My Projects'}
					</Button>
				) : null}
			</FadeInOrder>
		</Grid>
	</Fragment>
);

export default ButtonSection;
