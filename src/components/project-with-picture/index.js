import React from 'react';
import CenterSpace from '../center-space';
import Typography from '@material-ui/core/Typography';
import ButtonSection from '../button-section';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useProjectStyles } from '../../lib/common-themes';

const ProjectWithPicture = ({
	title,
	description1,
	description2,
	image1,
	image2,
	image1Title,
	image2Title,
	link,
	linkDescription
}) => {
	const classes = useProjectStyles();

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
			<Typography className={classes.description} variant={'body1'}>
				{description1}
			</Typography>
			<Image image={image1} imageTitle={image1Title} />
			<Typography className={classes.description} variant={'body1'}>
				{description2}
			</Typography>
			<Image image={image2} imageTitle={image2Title} />
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

export default ProjectWithPicture;
