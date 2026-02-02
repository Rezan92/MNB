import React from 'react';
import './ContactDetails.css';
import ContactInfoBlock from '../contactInfoBlock/ContactInfoBlock';
import { Button } from '../button/Button';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

export const ContactDetails: React.FC = () => {
	const phoneNumber = '46729112531';
	const phoneDisplay = '072-911 25 31';
	const whatsappLink = `https://wa.me/${phoneNumber}`;
	return (
		<div className='contact-details-wrapper'>
			<h2 className='contact-details-title'>Kontakta Oss</h2>
			<p className='contact-details-intro'>
				Vi hjälper dig att förvandla ditt hem. Kontakta oss idag för en
				kostnadsfri offert. Vi svarar normalt inom 24 timmar.
			</p>

			<div className='contact-details-blocks'>
				<ContactInfoBlock
					icon={Phone}
					bold='Ring eller SMS:'
					title={phoneDisplay}
					subtitle='Mån-Fre, 08:00 - 18:00'
				/>
				<ContactInfoBlock
					icon={Mail}
					bold='E-post:'
					title='info@stjarnbyggmaleri.se'
					subtitle='Kontakta oss för en offert'
				/>
				<ContactInfoBlock
					icon={MapPin}
					bold='Serviceområde:'
					title='Stockholms län'
					subtitle='Vi utför arbeten i hela Stockholm med omnejd'
				/>
				<ContactInfoBlock
					icon={Clock}
					bold='Öppettider:'
					title='Mån - Fre: 08:00 - 18:00'
					subtitle='Lör: 09:00 - 13:00, Sön: Stängt'
				/>
			</div>

			<Button
				href={whatsappLink}
				target='_blank'
				variant='dark'
				className='whatsapp-btn'
			>
				Kontakta oss via WhatsApp
			</Button>
		</div>
	);
};
