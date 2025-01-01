import styled from 'styled-components';

// ASIDE
export const AsideSection = styled.aside`
	height: calc(100dvh - 4rem);
	border: 1px solid var(--border-color);
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	.profile__name {
		--size: 1.8rem;
		text-transform: uppercase;
		letter-spacing: 1px;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: var(--size);
	}

	.profile--divider {
		font-size: calc(var(--size) * 2);
	}

	.profile__picture {
		height: 20rem;
		width: 22rem;
		border: 1px solid var(--border-color);
		border-radius: 5px;
	}

	.profile__socials {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-top: 2rem;

		a {
			height: 5rem;
			width: 5rem;
			border-radius: 50%;
			font-size: 1.8rem;
			border: 1px solid var(--border-color);
			display: grid;
			place-content: center;
			color: inherit;
			cursor: pointer;
			transition: all 0.2s ease-in;

			&:hover {
				color: var(--color-primary);
				border-color: var(--color-primary);
			}
		}
	}
`;

// MAIN
export const Main = styled.main`
	height: calc(100dvh - 4rem);
	overflow-y: auto;
	scrollbar-width: none;
`;

// HERO
export const HeroSection = styled.section`
	height: 100dvh;
	position: relative;
`;

export const HeroTextBox = styled.div`
	position: absolute;
	top: 5%;
	left: 50%;
	transform: translate(-50%, -5%);
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;

	.hero__tagline {
		font-size: 1.4rem;
		color: var(--color-primary);
		text-transform: uppercase;
		letter-spacing: 2px;
		font-weight: var(--font-weight-bold);
	}

	.hero__heading {
		font-size: 5rem;
		text-transform: uppercase;
		letter-spacing: 0.6rem;
		line-height: 1;
	}

	.hero__description {
		max-width: 60ch;
		color: var(--text-color-secondary);
		margin-bottom: 1rem;
	}
`;

// ABOUT
export const AboutSection = styled.section`
	padding: 6rem 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;

	p strong {
		color: var(--color-primary);
	}
`;

export const AboutCard = styled.div`
	margin-top: 4rem;
	width: 100%;
	display: flex;
	align-items: center;
	gap: 1rem;
	flex-wrap: wrap;
`;

export const Skill = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 0.5rem 1rem;
	border: 1px solid var(--border-color);
`;

// PROJECTS
export const ProjectSection = styled.section`
	padding: 6rem 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2rem;
`;
