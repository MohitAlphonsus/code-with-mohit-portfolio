import { Hero, About, Projects } from '../components';
import { Main } from '../styles/styles';

export default function MainSection() {
	return (
		<Main>
			<Hero />
			<About />
			<Projects />
		</Main>
	);
}
