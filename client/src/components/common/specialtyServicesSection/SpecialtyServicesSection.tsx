import React from 'react';
import { Check } from 'lucide-react';
import './SpecialtyServicesSection.css';

const SpecialtyItem: React.FC<{ title: string }> = ({ title }) => {
	return (
		<div className='specialty-item'>
			<Check
				size={20}
				className='specialty-item-icon'
			/>
			<span className='specialty-item-title'>{title}</span>
		</div>
	);
};

export const SpecialtyServicesSection: React.FC = () => {
	const services = [
		'Målning av lister & dörrar',
		'Kökslackering & Målning av luckor',
		'Spackling & Väggstruktur',
		'Flyttmålning',
		'Fondväggar & Dekorativa tekniker',
	];

	return (
		<section className='specialty-services-section'>
			<div className='specialty-services-header'>
				<span className='specialty-services-subtitle'>MER ÄN BARA BASIKEN</span>
				<h2 className='specialty-services-title'>
					Omfattande Finsnickerier & Måleri
				</h2>
			</div>
			<div className='specialty-services-grid'>
				{services.map((service) => (
					<SpecialtyItem
						key={service}
						title={service}
					/>
				))}
			</div>
		</section>
	);
};
