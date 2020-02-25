import React, { Fragment } from 'react';
import { Fade } from '@material-ui/core';

const FadeInOrder = ({ children }) => {
	const fadeInTime = iterator => (iterator + 1) * 500;

	return (
		<Fragment>
			{children.map((child, i) =>
				child !== null ? (
					<Fade in timeout={fadeInTime(i)} key={i}>
						{child}
					</Fade>
				) : null
			)}
		</Fragment>
	);
};

export default FadeInOrder;
