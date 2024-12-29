import { AsideSection } from '../styles/styles';
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa6';

export default function Profile() {
	const first = `< code with mohit `;
	const second = '>';

	return (
		<AsideSection>
			<p className="profile__name">
				<span>{first}</span>
				<span className="profile--divider">/</span>
				<span>{second}</span>
			</p>
			<div className="profile__picture">
				{/* <img src="images/profile-image.webp" alt="profile-picture"/>  */}
			</div>
			<div className="profile__adress">
				<address></address>
			</div>
			<ul className="profile__socials">
				<a href="#">
					<FaFacebook />
				</a>
				<a href="#">
					<FaLinkedin />
				</a>
				<a href="#">
					<FaInstagram />
				</a>
				<a href="#">
					<FaGithub />
				</a>
			</ul>
		</AsideSection>
	);
}
