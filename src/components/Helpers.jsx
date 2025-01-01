import { Subheading, ButtonElement } from '../styles/helpers';
import { FaHand, FaUser, FaDiagramProject } from 'react-icons/fa6';

export const SubHeading = ({ iconName = 'HERO', title }) => {
	let Icon;
	if (iconName === 'HERO') {
		Icon = FaHand;
	} else if (iconName === 'ABOUT') {
		Icon = FaUser;
	} else if (iconName === 'PROJECT') {
		Icon = FaDiagramProject;
	}

	return (
		<Subheading>
			<Icon className="subheading__icon " />
			<span>{title}</span>
		</Subheading>
	);
};

// BUTTON
export const Button = ({ children }) => {
	return <ButtonElement>{children}</ButtonElement>;
};
