import { ProjectSection } from '../styles/styles';
import { HeadingSecondary } from '../styles/helpers.js';
import { SubHeading } from './Helpers';

export default function Projects() {
	return (
		<ProjectSection>
			<SubHeading iconName="PROJECT" title="Projects" />
			<HeadingSecondary>My Experiments with Code and Design</HeadingSecondary>
		</ProjectSection>
	);
}
