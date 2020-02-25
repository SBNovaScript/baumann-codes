import React from 'react';
import CenterSpace from '../../components/center-space';
import ButtonSection from '../../components/button-section';
import ConditionallyCenteredText from '../../components/conditionally-centered-text';

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
				'located just an hour away from NYC. I currently ' +
				'have two jobs: one as a lead game programmer' +
				' for an environmentally focused game funded by ' +
				'Champlain College, and as a software engineering intern' +
				' at DealerPolicy, Inc.'}
		</ConditionallyCenteredText>
		<ButtonSection showHomeButton showProjectsButton />
	</CenterSpace>
);
export default About;
