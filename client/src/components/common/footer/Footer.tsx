import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	MapPin,
	Phone,
	Mail,
	ChevronRight,
	Twitter,
	Facebook,
	Instagram,
} from 'lucide-react';
import './Footer.css';

// A small sub-component for consistent link styling
const FooterLink: React.FC<{ to: string; label: string }> = ({ to, label }) => (
	<NavLink
		to={to}
		className='footer-link-item'
	>
		<ChevronRight
			size={16}
			className='footer-link-icon'
		/>
		<span>{label}</span>
	</NavLink>
);

// A small sub-component for consistent contact info styling
const ContactItem: React.FC<{ icon: React.ReactNode; text: string }> = ({
	icon,
	text,
}) => (
	<div className='footer-contact-item'>
		<div className='footer-contact-icon'>{icon}</div>
		<span>{text}</span>
	</div>
);

export const Footer: React.FC = () => {
	return (
		<footer className='footer-section'>
			<div className='footer-grid'>
				{/* Column 1: About */}
				<div className='footer-column'>
					<h3 className='footer-column-title'>OM OSS</h3>
					<p className='footer-about-text'>
						Stjärn Bygg & Måleri specialiserar sig på professionellt måleri och
						högkvalitativt snickeri. Vi strävar efter att leverera ett felfritt
						resultat och personlig service till varje kund i Stockholm.
					</p>
					<div className='footer-social-icons'>
						<a
							href='https://twitter.com'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Twitter'
						>
							<Twitter size={20} />
						</a>
						<a
							href='https://facebook.com'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Facebook'
						>
							<Facebook size={20} />
						</a>
						<a
							href='https://instagram.com'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Instagram'
						>
							<Instagram size={20} />
						</a>
					</div>
				</div>

				{/* Column 2: Links */}
				<div className='footer-column'>
					<h3 className='footer-column-title'>LÄNKAR</h3>
					<nav className='footer-links-list'>
						<FooterLink
							to='/projects'
							label='Projekt'
						/>
						<FooterLink
							to='/about'
							label='Om oss'
						/>
						<FooterLink
							to='/services'
							label='Tjänster'
						/>
						<FooterLink
							to='/contact'
							label='Kontakt'
						/>
					</nav>
				</div>

				{/* Column 3: Services */}
				<div className='footer-column'>
					<h3 className='footer-column-title'>TJÄNSTER</h3>
					<div className='footer-links-list'>
						<FooterLink
							to='/services'
							label='Måleri (Inne & Ute)'
						/>
						<FooterLink
							to='/services'
							label='Snickeri & Träarbete'
						/>
						<FooterLink
							to='/services'
							label='Golvläggning'
						/>
						<FooterLink
							to='/services'
							label='Totalrenovering'
						/>
					</div>
				</div>

				{/* Column 4: Questions */}
				<div className='footer-column'>
					<h3 className='footer-column-title'>HAR DU FRÅGOR?</h3>
					<div className='footer-contact-list'>
						<ContactItem
							icon={<MapPin size={20} />}
							text='Serviceområde: Stockholm med omnejd'
						/>
						<ContactItem
							icon={<Phone size={20} />}
							text='072-911 25 31 (Ring eller SMS)'
						/>
						<ContactItem
							icon={<Mail size={20} />}
							text='info@stjarnbyggmaleri.se'
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};
