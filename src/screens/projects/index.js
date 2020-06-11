import React from 'react';
import CenterSpace from '../../components/center-space';
import ButtonSection from '../../components/button-section';
import ConditionallyCenteredText from '../../components/conditionally-centered-text';
import { ListItemText } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FadeInOrder from '../../components/fade-in-order';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
	listItemText: {
		textAlign: 'center'
	},
	listItemButton: {
		margin: '0 auto'
	}
});

const Projects = () => {
	const classes = useStyles();

	const projectsTitleText = 'Here is a selection of my projects: ';

	const ListItemButtonLink = props => {
		const { children, link, ...others } = props;

		return (
			<ListItem {...others}>
				<Button className={classes.listItemButton} component={Link} to={link}>
					{children}
				</Button>
			</ListItem>
		);
	};

	const CenteredListItemText = ({ ...props }) => (
		<ListItemText className={classes.listItemText} {...props} />
	);

	const ProjectsList = () => (
		<List>
			<FadeInOrder>
				<ListItemButtonLink link={'/projects/website'}>
					<CenteredListItemText primary={'Baumann.codes website'} />
				</ListItemButtonLink>
				<ListItemButtonLink link={'/projects/black_hole'}>
					<CenteredListItemText primary={'Black Hole Simulation'} />
				</ListItemButtonLink>
				<ListItemButtonLink link={'/projects/project_egg'}>
					<CenteredListItemText primary={'Project E.G.G.'} />
				</ListItemButtonLink>
				<ListItemButtonLink link={'/projects/github'}>
					<CenteredListItemText primary={'My Github'} />
				</ListItemButtonLink>
			</FadeInOrder>
		</List>
	);

	return (
		<CenterSpace>
			<ConditionallyCenteredText title>
				{projectsTitleText}
			</ConditionallyCenteredText>
			<ProjectsList />
			<ButtonSection showHomeButton showAboutButton />
		</CenterSpace>
	);
};

export default Projects;
