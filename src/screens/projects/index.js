import React from 'react';
import CenterSpace from '../../components/center-space';
import ButtonSection from '../../components/button-section';
import ConditionallyCenteredText from '../../components/conditionally-centered-text';
import { ListItemText } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FadeInOrder from '../../components/fade-in-order';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	listItemText: {
		textAlign: 'center'
	}
});

const Projects = () => {
	const classes = useStyles();

	const projectsTitleText = 'Here is a selection of my projects: ';

	const ListItemButtonLink = props => {
		const { children, link, ...others } = props;

		return (
			<ListItem
				button
				component={'a'}
				href={link}
				target={'_blank'}
				rel={'noopener noreferrer'}
				{...others}
			>
				{children}
			</ListItem>
		);
	};

	const CenteredListItemText = ({ ...props }) => (
		<ListItemText className={classes.listItemText} {...props} />
	);

	const ProjectsList = () => (
		<List>
			<FadeInOrder>
				<ListItemButtonLink
					link={'https://github.com/SBNovaScript/baumann-codes'}
				>
					<CenteredListItemText primary={'Baumann.codes website'} />
				</ListItemButtonLink>
				<ListItemButtonLink
					link={'https://github.com/SBNovaScript/BlackHoleSimulation'}
				>
					<CenteredListItemText primary={'Black Hole Simulation'} />
				</ListItemButtonLink>
				<ListItemButtonLink link={'http://envirobox.emergentmediacenter.com/'}>
					<CenteredListItemText primary={'Habitus Mundi'} />
				</ListItemButtonLink>
				<ListItemButtonLink link={'https://github.com/SBNovaScript'}>
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
