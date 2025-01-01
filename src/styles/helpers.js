import styled from 'styled-components';

export const HeadingSecondary = styled.h2`
	font-size: 3rem;
	text-transform: uppercase;
	letter-spacing: 0.5rem;
	line-height: 1.4;
`;

export const Subheading = styled.p`
	font-size: 1.4rem;
	text-transform: uppercase;
	padding: 0.5rem 1.6rem;
	border: 0.75px solid var(--border-color);
	border-radius: 5px;
	letter-spacing: 1px;

	display: flex;
	align-items: center;
	gap: 1rem;

	margin-bottom: 4rem;

	.subheading__icon {
		height: 1.4rem;
		width: 1.4rem;
	}

	.subheading__icon-animation {
		animation: wobbleEmojiIcon 2s ease 0s infinite normal both;
	}

	span {
		display: inline-block;
	}

	@keyframes wobbleEmojiIcon {
		0%,
		100% {
			transform: rotate(0deg);
			transform-origin: 50% 100%;
		}

		10% {
			transform: rotate(2deg);
		}

		20%,
		40%,
		60% {
			transform: rotate(-4deg);
		}

		30%,
		50%,
		70% {
			transform: rotate(4deg);
		}

		80% {
			transform: rotate(-2deg);
		}

		90% {
			transform: rotate(2deg);
		}
	}
`;

// BUTTON
export const ButtonElement = styled.button`
	font: inherit;
	display: inline-block;
	border: none;
	background: none;
	padding: 1.2rem 4rem;
	background-color: var(--color-primary);
	border-radius: 5px;
	cursor: pointer;
`;

// CIRCULAR TEXT
export const Circle = styled.div`
	--size: 15rem;
	position: relative;
	width: var(--size);
	height: var(--size);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 4rem;

	.circle__text {
		position: absolute;
		height: 100%;
		width: 100%;
		text-transform: uppercase;
		animation: rotateCircularText 10s linear infinite;

		span {
			position: absolute;
			display: inline-block;
			left: 50%;
			font-size: 1.2rem;
			transform-origin: 0 calc(var(--size) / 2);
		}
	}

	@keyframes rotateCircularText {
		to {
			transform: rotate(360deg);
		}
	}
`;
