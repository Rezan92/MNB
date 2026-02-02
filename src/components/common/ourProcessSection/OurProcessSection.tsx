import React from 'react';
import {
	ClipboardList,
	ShieldCheck,
	PaintRoller,
	Sparkles,
} from 'lucide-react';
import './OurProcessSection.css';

// A sub-component for each step
const ProcessStep: React.FC<{
	icon: React.ElementType;
	step: string;
	title: string;
	description: string;
}> = ({ icon: Icon, step, title, description }) => {
	return (
		<div className='process-step'>
			<div className='process-step-icon-wrapper'>
				<Icon size={40} />
			</div>
			<div className='process-step-content'>
				<span className='process-step-number'>{step}</span>
				<h3 className='process-step-title'>{title}</h3>
				<p className='process-step-description'>{description}</p>
			</div>
		</div>
	);
};

export const OurProcessSection: React.FC = () => {
	return (
		<section className='our-process-section'>
			<div className='our-process-header'>
				<span className='our-process-subtitle'>HUR VI ARBETAR</span>
				<h2 className='our-process-title'>Vår Professionella Process</h2>
			</div>
			<div className='our-process-grid'>
				<ProcessStep
					icon={ClipboardList}
					step='Steg 01'
					title='Konsultation & Offert'
					description='Vi börjar med ett kostnadsfritt besök för att förstå din vision och ge en tydlig, transparent offert utan dolda kostnader.'
				/>
				<ProcessStep
					icon={ShieldCheck}
					step='Steg 02'
					title='Skydd & Förberedelse'
					description='Vi täcker dina golv och möbler noggrant. Sedan förbereder vi alla ytor genom slipning och grundmålning för bästa resultat.'
				/>
				<ProcessStep
					icon={PaintRoller}
					step='Steg 03'
					title='Utförande med Precision'
					description='Vårt team använder material av högsta kvalitet och beprövade tekniker för att leverera ett resultat som imponerar.'
				/>
				<ProcessStep
					icon={Sparkles}
					step='Steg 04'
					title='Besiktning & Rent arbetsställe'
					description='Vi lämnar aldrig ett hem stökigt. Vi går igenom projektet tillsammans med dig för att säkerställa att du är 100% nöjd.'
				/>
			</div>
		</section>
	);
};
