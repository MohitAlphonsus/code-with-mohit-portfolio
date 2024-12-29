import { HeroSection, HeroTextBox } from '../styles/styles';
import { SubHeading, Button } from './Helpers';
import { CircularText } from '../components';

export default function Hero() {
	return (
		<HeroSection>
			<HeroTextBox>
				<SubHeading title="Hello There!" />
				<span className="hero__tagline">
					Aspiring Front-End Developer | Crafting User-Friendly Web Interfaces
				</span>
				<h1 className="hero__heading">Hello, I'm Mohit Jadhav</h1>
				<blockquote className="hero__description">
					"Welcome to my portfolio! I’m a passionate front-end developer with a
					knack for creating beautiful and functional web experiences."
				</blockquote>
				<Button>My Projects</Button>
				<CircularText />
			</HeroTextBox>
		</HeroSection>
	);
}
