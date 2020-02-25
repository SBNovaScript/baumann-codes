import React from 'react';
import CenterSpace from '../../components/center-space';
import ButtonSection from '../../components/button-section';
import ConditionallyCenteredText from '../../components/conditionally-centered-text';
import { ListItemText } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import FadeInOrder from '../../components/fade-in-order';

const Projects = () => {
	const projectsTitleText = 'Here are a selection of my projects: ';

	const ProjectsList = () => (
		<List>
			<FadeInOrder>
				<ListItem button>
					<ListItemText primary={'Test1'} />
				</ListItem>
				<ListItem button>
					<ListItemText primary={'Test2'} />
				</ListItem>
				<ListItem button>
					<ListItemText primary={'Test3'} />
				</ListItem>
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
