import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	centerPage: {
		height: '100vh',
		padding: theme.spacing(2)
	}
}));

const CenterSpace = ({ children }) => {
	const classes = useStyles();

	return (
		<Grid
			container
			direction={'column'}
			justify={'center'}
			alignItems={'center'}
			className={classes.centerPage}
		>
			{children.map((child, i) => (
				<Grid item key={i}>
					{child}
				</Grid>
			))}
		</Grid>
	);
};

export default CenterSpace;
