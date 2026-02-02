import './FeatureCard.css';
import { type LucideIcon } from 'lucide-react';

type FeatureCardProps = {
	icon: LucideIcon;
	title: string;
	description: string;
	variant: 'dark' | 'primary';
	animationDelay: string;
};

export const FeatureCard = ({
	icon: Icon,
	title,
	description,
	variant,
	animationDelay,
}: FeatureCardProps) => {
	const cardClasses = `feature-card ${variant} animate-slide-up`;

	const cardStyle = {
		animationDelay: animationDelay,
	};

	return (
		<div
			className={cardClasses}
			style={cardStyle}
		>
			<div className='icon-wrapper'>
				<Icon size={60} />
			</div>
			<h3 className='card-title'>{title}</h3>
			<p className='card-description'>{description}</p>
			<div className='card-sheen'></div>
		</div>
	);
};
