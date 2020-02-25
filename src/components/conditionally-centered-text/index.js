import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	bodyText: {
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(0, 0, 0, 0),
			textAlign: 'center'
		},
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(1, 20, 1, 20)
		}
	},
	titleText: {
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
			paddingBottom: theme.spacing(1)
		}
	}
}));

const ConditionallyCenteredText = props => {
	const { children, title, body, ...other } = props;
	const classes = useStyles();
	const theme = useTheme();
	const smallScreen = useMediaQuery(theme.breakpoints.up('sm'));
	const correctVariant = title
		? smallScreen
			? 'h3'
			: 'h4'
		: body
		? smallScreen
			? 'h5'
			: 'h5'
		: 'h5';

	return (
		<Fragment>
			{title ? (
				<Typography
					{...other}
					variant={correctVariant}
					className={classes.titleText}
				>
					{children}
				</Typography>
			) : body ? (
				<Typography
					{...other}
					variant={correctVariant}
					className={classes.bodyText}
				>
					{children}
				</Typography>
			) : (
				<Typography
					{...other}
					variant={correctVariant}
					className={classes.bodyText}
				>
					{children}
				</Typography>
			)}
		</Fragment>
	);
};

export default ConditionallyCenteredText;
