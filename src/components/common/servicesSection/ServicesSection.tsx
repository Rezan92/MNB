import { ServiceCard } from '../serviceCard/ServiceCard';
import './ServicesSection.css';
import { PaintRoller, Sheet, Wand2 } from 'lucide-react';
import paintingImage from '@/assets/serviceSection/Painting.png';
import patchingImage from '@/assets/serviceSection/Patching.png';
import installationImage from '@/assets/serviceSection/installation.png';
import type { Service } from '../serviceModal/ServiceModal';

import { useAppDispatch } from '@/store/hooks';
import { openServiceModal } from '@/store/slices/uiSlice';

const servicesData: Service[] = [
	{
		title: 'Måleritjänster',
		image: paintingImage,
		icon: PaintRoller,
		description:
			'Högkvalitativt måleri för både interiör och exteriör. Vi ger dina väggar, tak och snickerier ett nytt liv.',
		details: [
			'Ett perfekt måleriprojekt handlar om 90% förarbete. Vi tar inget lätt på underlaget.',
			'Vi täcker noggrant golv och möbler, spacklar, slipar och grundar för att säkerställa en helt slät yta innan vi applicerar premiumfärg.',
			'Vi arbetar med de bästa leverantörerna för att garantera ett miljövänligt och hållbart resultat som tål vardagens slitage.',
		],
	},
	{
		title: 'Snickeri & Bygg',
		image: patchingImage,
		icon: Wand2,
		description:
			'Från platsbyggda garderober till montering av kök och altaner. Vi utför allt inom byggnadssnickeri.',
		details: [
			'Våra snickare har bred kompetens inom både fin- och grovsnickeri, vilket gör att vi kan hantera hela din renovering.',
			'Vi hjälper dig med allt från att bygga nya innerväggar till att montera komplexa kökslösningar och platsbyggda detaljer.',
			'Varje projekt planeras noggrant för att optimera både funktion och estetik i ditt hem eller på ditt kontor.',
		],
	},
	{
		title: 'Golvläggning & Renovering',
		image: installationImage,
		icon: Sheet,
		description:
			'Vi lägger alla typer av golv och utför kompletta renoveringar av rum, källare och kontor.',
		details: [
			'Golvet är rummets bas. Vi lägger parkett, laminat och trägolv med hög precision för ett resultat som håller i generationer.',
			'Vi erbjuder även totalentreprenad för mindre projekt där vi samordnar olika yrkesgrupper för att göra din renovering smidig.',
			'Från rivning till sista list – vi tar hand om hela processen så att du kan fokusera på annat.',
		],
	},
];

export const ServicesSection = () => {
	const dispatch = useAppDispatch();

	const handleCardClick = (service: Service) => {
		dispatch(openServiceModal(service));
	};

	return (
		<section className='services-section'>
			<div className='services-section-header'>
				<span className='services-section-subtitle'>Våra Tjänster</span>
				<h2 className='services-section-title'>Allt inom Måleri & Bygg</h2>
			</div>

			<div className='services-section-grid'>
				{servicesData.map((service) => (
					<ServiceCard
						key={service.title}
						icon={service.icon}
						imageSrc={service.image}
						title={service.title}
						description={service.description}
						onClick={() => handleCardClick(service)}
					/>
				))}
			</div>

			{/* Modal is removed from here */}
		</section>
	);
};
