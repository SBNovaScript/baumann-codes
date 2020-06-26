import React, { Fragment } from 'react';
import CenterSpace from '../center-space';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import ButtonSection from '../button-section';
import ReactPlayer from 'react-player/lazy';
import Button from '@material-ui/core/Button';
import { Card, CardHeader } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(theme => ({
	body: {
		margin: '0 25% 0 25%'
	},
	image: {
		height: theme.spacing(50),
		width: theme.spacing(80)
	}
}));

const ProjectWithVideo = ({
	title,
	url,
	description1,
	description2,
	videoSubtitle,
	image,
	imageTitle,
	link,
	linkDescription
}) => {
	const classes = useStyles();

	const ReactPlayerWithSubtitle = ({ url, subtitle }) => (
		<Card>
			<CardMedia>
				<ReactPlayer url={url} playing volume={0} muted controls loop />
			</CardMedia>
			<CardContent>
				<Typography variant={'body2'}>{subtitle}</Typography>
			</CardContent>
		</Card>
	);

	const Image = ({ image, imageTitle }) => (
		<Card>
			<CardMedia className={classes.image} image={image} title={imageTitle} />
			<CardContent>
				<Typography variant={'body2'}>{imageTitle}</Typography>
			</CardContent>
		</Card>
	);

	return (
		<CenterSpace>
			<Typography gutterBottom variant={'h2'}>
				{title}
			</Typography>
			<Typography className={classes.body} variant={'h5'}>
				{description1}
			</Typography>
			<ReactPlayerWithSubtitle subtitle={videoSubtitle} url={url} />
			<Typography className={classes.body} variant={'h5'}>
				{description2}
			</Typography>
			<Image image={image} imageTitle={imageTitle} />
			<Button
				component={'a'}
				target={'_blank'}
				rel={'noopener noreferrer'}
				href={link}
				variant={'contained'}
			>
				{linkDescription}
			</Button>
			<ButtonSection showAboutButton showProjectsButton showHomeButton />
		</CenterSpace>
	);
};

export default ProjectWithVideo;
