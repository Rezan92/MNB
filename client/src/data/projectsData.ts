import type { Project } from '@/components/common/projectCard/ProjectCard';
import basementFinishingImage from '@/assets/projectsImages/BasementFinish.png';
import CeilingDamageImage from '@/assets/projectsImages/CeilingDamage.png';
import DrywallPatchingImage from '@/assets/projectsImages/DrywallPatching.png';
import GarageFinishingImage from '@/assets/projectsImages/GarageFinishing.png';
import LivingroomFinishImage from '@/assets/projectsImages/LivingroomFinish.png';

export const projectsData: Project[] = [
	{
		id: 1,
		image: GarageFinishingImage,
		tag: 'Snickeri',
		title: 'Platsbyggd förvaring i garage',
		location: 'Bromma, Stockholm',
		details:
			'Vi skapade en optimerad förvaringslösning i ett privatgarage. Arbetet inkluderade väggmontering, hyllsystem och en tålig ytfinish för maximal hållbarhet.',
	},
	{
		id: 2,
		image: basementFinishingImage,
		tag: 'Totalrenovering',
		title: 'Källarrenovering & Inredning',
		location: 'Täby, Stockholm',
		details:
			'En komplett omvandling av en råkällare till ett ljust och modernt allrum. Vi hanterade allt från gipsning till slutlig målning och listning.',
	},
	{
		id: 3,
		image: LivingroomFinishImage,
		tag: 'Måleri',
		title: 'Vardagsrum med fondvägg',
		location: 'Nacka, Stockholm',
		details:
			'Uppfräschning av sällskapsytor med fokus på perfekta linjer och en modern färgpalett. Vi utförade även reparation av ytskikt innan målning.',
	},
	{
		id: 4,
		image: DrywallPatchingImage,
		tag: 'Reparation',
		title: 'Lagning av väggytor',
		location: 'Södermalm, Stockholm',
		details:
			'Efter en större ommöblering återställde vi väggarna till nyskick genom professionell spackling och punktmålning som smälter in sömlöst.',
	},
	{
		id: 5,
		image: CeilingDamageImage,
		tag: 'Takmålning',
		title: 'Restaurering av vattenskadat tak',
		location: 'Solna, Stockholm',
		details:
			'Vi åtgärdade ett tak efter en läcka genom att byta ut gips, spackla och måla om hela ytan för att eliminera alla spår av skadan.',
	},
];
