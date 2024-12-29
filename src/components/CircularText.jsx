import { Circle } from '../styles/helpers';
import { FaArrowDown } from 'react-icons/fa6';

export default function CircularText() {
	const textToRotate = 'my projects - my projects -';
	return (
		<Circle>
			<FaArrowDown />
			<div className="circle__text">
				<p>
					{textToRotate.split('').map((char, i) => (
						<span
							key={Math.random().toString()}
							style={{
								transform: `rotate(${i * 13}deg)`,
							}}
						>
							{char}
						</span>
					))}
				</p>
			</div>
		</Circle>
	);
}
