import GlobalStyles from './styles/Global';
import styled from 'styled-components';
import { Profile, MainSection } from './components';

const AppContainer = styled.div`
	display: grid;
	grid-template-columns: 0.25fr 0.75fr;
	gap: 6rem;
`;

export default function App() {
	return (
		<>
			<GlobalStyles />
			<AppContainer>
				<Profile />
				<MainSection />
			</AppContainer>
		</>
	);
}
