import { Skill } from '../styles/styles';

export default function AboutSkills({ ...skill }) {
	const { icon: Icon, name } = skill;

	return (
		<Skill>
			<Icon className="skill-icon" />
			<span>{name}</span>
		</Skill>
	);
}
