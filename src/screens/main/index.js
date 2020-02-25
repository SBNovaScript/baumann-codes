import CenterSpace from '../../components/center-space';
import React from 'react';
import ButtonSection from '../../components/button-section';
import ConditionallyCenteredText from '../../components/conditionally-centered-text';

const Main = () => {
	return (
		<CenterSpace>
			<ConditionallyCenteredText title>{'Hello!'}</ConditionallyCenteredText>
			<ConditionallyCenteredText body>
				{'I am Steven Baumann, a fourth year ' +
					'Computer Science and Innovation student.'}
			</ConditionallyCenteredText>
			<ButtonSection showAboutButton showProjectsButton />
		</CenterSpace>
	);
};

export default Main;
