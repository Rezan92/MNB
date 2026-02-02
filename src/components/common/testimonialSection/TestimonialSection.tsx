import React from 'react';
import { TestimonialSlider } from '../testimonialSlider/TestimonialSlider';
import type { Testimonial } from '../testimonialSlider/TestimonialSlider';
import './TestimonialSection.css';

const testimonialsData: Testimonial[] = [
	{
		id: 1,
		quote:
			"Teamet målade om hela vår undervåning och vi kunde inte vara nöjdare. Linjerna är otroligt skarpa och de var väldigt renliga och respektfulla mot vårt hem. Det känns som nytt!",
		author: 'Karin S.',
		role: 'Villaägare i Bromma',
		imageUrl: 'https://i.pravatar.cc/100?img=1',
	},
	{
		id: 2,
		quote:
			"Jag hade ett stort hål i taket efter en vattenläcka. De kom och lagade det perfekt. Man kan absolut inte se var skadan var. Fantastiskt arbete och mycket professionellt.",
		author: 'Erik T.',
		role: 'Lägenhetsinnehavare på Södermalm',
		imageUrl: 'https://i.pravatar.cc/100?img=2',
	},
	{
		id: 3,
		quote:
			"Vi anlitade dem för att färdigställa vårt garage. De höll tidsplanen, budgeten och kvaliteten på slipningen är enastående. Vi kommer definitivt ringa dem igen.",
		author: 'Johan & Anna K.',
		role: 'Husägare i Täby',
		imageUrl: 'https://i.pravatar.cc/100?img=3',
	},
];

export const TestimonialSection: React.FC = () => {
	return (
		<section className='testimonial-section'>
			<div className='testimonial-section_flex'>
				<div className='testimonial-section__left'>
					<div className='testimonial-section__left-container'>
						<h3 className='testimonial-section__subtitle'>
							VAD VÅRA KUNDER SÄGER
						</h3>
						<h2 className='testimonial-section__title'>
							Röster från de hem vi hjälpt
						</h2>
					</div>
				</div>
				<div className='testimonial-section__right'>
					<TestimonialSlider testimonials={testimonialsData} />
				</div>
			</div>
		</section>
	);
};
