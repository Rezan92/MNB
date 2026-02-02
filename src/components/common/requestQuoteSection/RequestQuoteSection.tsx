import './RequestQuoteSection.css';
import { Button } from '@/components/common/button/Button';

export const RequestQuoteSection = () => {
	return (
		<section className='request-quote-section'>
			<div className='request-quote-content'>
				<h2 className='request-quote-title'>
					Redo att förverkliga ditt projekt?
				</h2>
				<p className='request-quote-description'>
					Kontakta oss idag för att diskutera dina idéer. Vi erbjuder snabba och
					kostnadsfria offerter för både små och stora uppdrag.
				</p>
				<Button
					variant='primary'
					to='/contact'
				>
					FÅ EN GRATIS OFFERT
				</Button>
			</div>
		</section>
	);
};
