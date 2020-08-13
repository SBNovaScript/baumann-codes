import { makeStyles } from '@material-ui/styles';

export const useProjectStyles = makeStyles(theme => ({
	media: {
		[theme.breakpoints.down('sm')]: {
			height: theme.spacing(30),
			width: '90vw'
		},
		[theme.breakpoints.up('sm')]: {
			height: theme.spacing(45),
			width: theme.spacing(80)
		}
	},
	typography: {
		textAlign: 'center'
	},
	description: {
		textAlign: 'center',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(10),
			marginRight: theme.spacing(10)
		}
	}
}));