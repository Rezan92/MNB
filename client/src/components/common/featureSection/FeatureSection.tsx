import './FeatureSection.css';
import { PaintRoller, Smile, Wand2 } from 'lucide-react';
import { FeatureCard } from '../featureCard/FeatureCard';

export const FeatureSection = () => {
	const cardData = [
		{
			icon: Wand2,
			title: 'Kvalitetssnickeri',
			description:
				'Allt från montering av kök och dörrar till avancerade träkonstruktioner. Vi bygger med precision och hållbara material.',
			variant: 'dark',
			delay: '0ms',
		},
		{
			icon: PaintRoller,
			title: 'Professionellt Måleri',
			description:
				'Vi garanterar perfekta ytor, skarpa linjer och en hållbar finish som lyfter hela rummet. Inne- som utemålning.',
			variant: 'primary',
			delay: '100ms',
		},
		{
			icon: Smile,
			title: 'Trygg & Ren Service',
			description:
				'Vi respekterar ditt hem. Vi kommer i tid, arbetar effektivt och lämnar alltid arbetsplatsen skinande ren efter oss.',
			variant: 'dark',
			delay: '200ms',
		},
	];

	return (
		<section className='feature-section'>
			<div className='feature-grid'>
				{cardData.map((card, index) => (
					<FeatureCard
						key={index}
						icon={card.icon}
						title={card.title}
						description={card.description}
						variant={card.variant as 'dark' | 'primary'}
						animationDelay={card.delay}
					/>
				))}
			</div>
		</section>
	);
};
