import { HeadingSecondary } from '../styles/helpers';
import { AboutCard, AboutSection } from '../styles/styles';
import { SubHeading } from './Helpers';
import { SKILLS } from '../constants/skills';
import { AboutSkills } from '../components';

export default function About() {
	return (
		<AboutSection>
			<SubHeading iconName="ABOUT" title="About" />
			<HeadingSecondary>Eager to Build and Learn</HeadingSecondary>
			<p>
				Hi there! I'm a{' '}
				<strong>passionate and motivated frontend developer</strong> eager to
				kickstart my career in web development. Although I’m just starting out,
				I’ve dedicated countless hours to learning and mastering essential
				frontend technologies.
			</p>
			<p>
				I’ve worked on several personal <strong>projects</strong> to hone my
				skills, such as creating responsive landing pages, interactive forms,
				and simple web applications using React. These experiences have helped
				me develop a solid foundation in problem-solving, attention to detail,
				and a strong understanding of modern development practices.
			</p>
			<AboutCard>
				{SKILLS.map(skill => (
					<AboutSkills key={skill.id} {...skill} />
				))}
			</AboutCard>
		</AboutSection>
	);
}
