import React from 'react';
import Button from '@material-ui/core/Button';

const Project = ({ title, url }) => {
	return <Button href={url}>{title}</Button>;
};

export default Project;
