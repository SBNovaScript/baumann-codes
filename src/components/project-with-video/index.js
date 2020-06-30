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
import FadeInOrder from '../fade-in-order';

const useStyles = makeStyles(theme => ({
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
			<CardMedia className={classes.media}>
				<ReactPlayer url={url} playing volume={0} muted controls loop />
			</CardMedia>
			{/*TODO: Fix Video Caption.*/}
			{/*<CardContent>*/}
			{/*	<Typography className={classes.typography} variant={'body2'}>*/}
			{/*		{subtitle}*/}
			{/*	</Typography>*/}
			{/*</CardContent>*/}
		</Card>
	);

	const Image = ({ image, imageTitle }) => (
		<Card>
			<CardMedia className={classes.media} image={image} title={imageTitle} />
			<CardContent>
				<Typography className={classes.typography} variant={'body2'}>
					{imageTitle}
				</Typography>
			</CardContent>
		</Card>
	);

	return (
		<CenterSpace useSpaceBetween>
				<Typography gutterBottom variant={'h3'}>
					{title}
				</Typography>
				<Typography className={classes.typography} variant={'body1'}>
					{description1}
				</Typography>
				<ReactPlayerWithSubtitle subtitle={videoSubtitle} url={url} />
				<Typography className={classes.typography} variant={'body1'}>
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
