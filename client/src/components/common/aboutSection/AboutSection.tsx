import './AboutSection.css';
import { Paintbrush, Check } from 'lucide-react';
import aboutImage from '@/assets/aboutSection/aboutSection.png';

export const AboutSection = () => {
	return (
		<section className='about-section'>
			<div className='container'>
				<div className='image-column'>
					<img
						src={aboutImage}
						alt='Construction worker'
						className='about-image'
					/>
					<div className='floating-icon-box'>
						<Paintbrush
							size={40}
							color='var(--color-brand-dark)'
						/>
					</div>
				</div>

				<div className='text-column'>
					<span className='about-section-subtitle'>
						VÄLKOMMEN TILL STJÄRN BYGG & MÅLERI
					</span>
					<h2 className='title'>Där hantverksskicklighet möter perfektion</h2>

					<div className='intro-text'>
						<Check
							size={24}
							className='intro-icon'
						/>
						<p>
							Med mångårig erfarenhet erbjuder vi marknadens främsta tjänster
							inom måleri, snickeri och totalrenovering.
						</p>
					</div>

					<p className='description'>
						Vi tror på att ett hållbart resultat börjar med ett gediget
						grundarbete. Oavsett om det gäller en finmålning av villan,
						platsbyggda snickerier eller en omfattande lägenhetsrenovering, ser
						vi till att varje detalj blir perfekt. Vårt mål är att överträffa
						dina förväntningar genom kvalitet och pålitlighet.
					</p>
				</div>
			</div>
		</section>
	);
};
