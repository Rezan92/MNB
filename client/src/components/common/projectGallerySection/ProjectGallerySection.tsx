import './ProjectGallerySection.css';
import { ProjectCard } from '../projectCard/ProjectCard';
import type { Project } from '../projectCard/ProjectCard';
import { ChevronDown } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
	setFilter,
	selectFilteredProjects,
	selectActiveFilter,
	selectProjectCategories,
} from '@/store/slices/projectsSlice';
import { openProjectModal } from '@/store/slices/uiSlice';

export const ProjectGallerySection = () => {
	const dispatch = useAppDispatch();

	const filteredProjects = useAppSelector(selectFilteredProjects);
	const activeFilter = useAppSelector(selectActiveFilter);
	const filterCategories = useAppSelector(selectProjectCategories);

	const handleCardClick = (project: Project) => {
		dispatch(openProjectModal(project));
	};

	const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(setFilter(event.target.value));
	};

	return (
		<section className='project-gallery-section'>
			<div className='project-gallery-header'>
				<span className='project-gallery-subtitle'>VÅRT ARBETE</span>
				<h2 className='project-gallery-title'>Ett urval av våra projekt</h2>
			</div>

			<div className='project-filter-dropdown-wrapper'>
				<label
					htmlFor='project-filter'
					className='project-filter-label'
				>
					Filtrera efter tjänst:
				</label>
				<div className='project-filter-select-container'>
					<select
						id='project-filter'
						className='project-filter-select'
						value={activeFilter}
						onChange={handleFilterChange}
					>
						{filterCategories.map((category) => (
							<option
								key={category}
								value={category}
							>
								{category}
							</option>
						))}
					</select>
					<ChevronDown
						size={20}
						className='project-filter-icon'
					/>
				</div>
			</div>

			<div className='project-gallery-grid'>
				{filteredProjects.map((project) => (
					<ProjectCard
						key={project.id}
						project={project}
						onClick={() => handleCardClick(project)}
					/>
				))}
			</div>
		</section>
	);
};
