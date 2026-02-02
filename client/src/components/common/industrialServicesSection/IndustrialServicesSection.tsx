import { StatCard } from '../statCard/StatCard';
import './IndustrialServicesSection.css';
import { HardHat, Smile } from 'lucide-react';
import bgImage from '@/assets/industrialServices/industrialServices.png';

export const IndustrialServicesSection = () => {
	return (
		<section className='industrial-services-section'>
			<div
				className='industrial-services-right-bg'
				style={{ backgroundImage: `url(${bgImage})` }}
			>
				{' '}
			</div>
			<div className='industrial-services-section-container'>
				<div className='industrial-services-left-content'>
					<span className='industrial-services-subtitle'>
						ETT ENGAGEMANG FÖR KVALITET
					</span>
					<h2 className='industrial-services-title'>
						Skillnaden ligger i detaljerna
					</h2>
					<p className='industrial-services-description'>
						En perfekt finish är endast möjlig med ett noggrant underarbete. Vi
						lägger ner den tid som krävs för att förbereda varje yta, skydda
						dina möbler och se till att arbetsplatsen är fläckfri vid dagens
						slut.
					</p>
					<p className='industrial-services-description'>
						Vi använder material av högsta kvalitet och beprövade
						hantverkstekniker för att leverera ett slutresultat som inte bara är
						vackert, utan byggt för att hålla. Din nöjdhet är vår högsta
						prioritet.
					</p>
				</div>

				<div className='industrial-services-stats-wrapper'>
					<StatCard
						icon={HardHat}
						count='136'
						label='PROJEKT SLUTFÖRDA'
						variant='primary'
					/>
					<StatCard
						icon={Smile}
						count='128'
						label='NÖJDA KUNDER'
						variant='light'
					/>
				</div>
			</div>
		</section>
	);
};
