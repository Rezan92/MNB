import { Phone, MapPin } from 'lucide-react';
import ContactInfoBlock from '../contactInfoBlock/ContactInfoBlock';
import Logo from '../logo/Logo';
import './TopBar.css';

function TopBar() {
	return (
		<>
			<header className='top-bar'>
				<div className='container'>
					<div className='logo-wrapper'>
						<Logo />
					</div>
					<div className='contact-wrapper'>
						<ContactInfoBlock
							icon={Phone}
							bold='Ring eller SMS: '
							title='072-911 25 31'
							subtitle='Mån-Fre, 08:00 - 18:00'
						/>
					</div>
					<div className='contact-wrapper'>
						<ContactInfoBlock
							icon={MapPin}
							title='Vårt Serviceområde'
							subtitle='Vi betjänar hela Stockholm med omnejd'
						/>
					</div>
				</div>
			</header>
		</>
	);
}

export default TopBar;
