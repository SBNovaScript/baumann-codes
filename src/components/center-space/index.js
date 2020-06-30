import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	centerPage: {
		minHeight: '100vh'
	},
	parentGrid: {
		padding: 20,
		overflowX: 'hidden'
	}
}));

const CenterSpace = ({ children, useSpaceBetween = false }) => {
	const classes = useStyles();

	// If the user wants spacing around their components,
	// Use 5. Else, the user does not want spacing.
	const spacingAmount = useSpaceBetween ? 5 : 0;

	// Same logic for the parent of the grid;
	// We need to use 20 spacing here as a workaround for Material-ui's
	// Negative margin limitation.
	const parentSpacing = useSpaceBetween ? classes.parentGrid : '';

	return (
		<div className={parentSpacing}>
			<Grid
				container
				direction={'column'}
				justify={'center'}
				alignItems={'center'}
				className={classes.centerPage}
				spacing={spacingAmount}
			>
				{children.map((child, i) => (
					<Grid item key={i}>
						{child}
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default CenterSpace;
