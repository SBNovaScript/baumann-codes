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
			{'I am a fourth year Computer Science and' +
				' Innovation major at Champlain College,' +
				' which is located in Burlington, Vermont.' +
				' My hometown is Trumbull, Connecticut, ' +
				'located just an hour away from NYC. I am currently employed as ' +
				'both a Lead Game Programmer for an environmentally-focused game, ' +
				'funded by Champlain College, and as a Software Engineering Intern ' +
				'at DealerPolicy, Inc. For more information: '}
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
