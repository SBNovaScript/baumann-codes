import React from 'react';
import CenterSpace from '../../components/center-space';
import ButtonSection from '../../components/button-section';
import ConditionallyCenteredText from '../../components/conditionally-centered-text';
import Button from '@material-ui/core/Button';

const About = () => (
	<CenterSpace>
		<ConditionallyCenteredText title>
			{'More About Me:'}
		</ConditionallyCenteredText>
		<ConditionallyCenteredText body>
			{'I have recently graduated with a degree in Computer Science and' +
				' Innovation, with a specialty in Software Engineering,' +
				' and a minor in Game Programming from Champlain College.' +
				' My hometown is Trumbull, Connecticut, ' +
				'located just an hour away from NYC. My previous experience includes being ' +
				'both a Lead Game Programmer for an environmentally-focused game ' +
				'funded by Champlain College, and as a Software Engineering Intern.' +
				' For more information: '}
			<Button
				component={'a'}
				target={'_blank'}
				rel={'noopener noreferrer'}
				href={'https://www.linkedin.com/in/cs-stevenbaumann/'}
			>
				{'Linkedin'}
			</Button>
		</ConditionallyCenteredText>
		<ButtonSection showHomeButton showProjectsButton />
	</CenterSpace>
);
export default About;
