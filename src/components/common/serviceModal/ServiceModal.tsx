import './ServiceModal.css';
import { X, type LucideIcon } from 'lucide-react';

export type Service = {
	title: string;
	image: string;
	icon: LucideIcon;
	description: string;
	details: string[];
};

type ServiceModalProps = {
	service: Service;
	onClose: () => void;
};

export const ServiceModal = ({ service, onClose }: ServiceModalProps) => {
	return (
		<>
			<div
				className='modal-overlay'
				onClick={onClose}
			></div>
			<div className='modal-content'>
				<button
					className='modal-close-btn'
					onClick={onClose}
				>
					<X size={24} />
				</button>
				<img
					src={service.image}
					alt={service.title}
					className='modal-image'
				/>
				<div className='modal-text-content'>
					<h2 className='modal-title'>{service.title}</h2>
					<div className='modal-divider'></div>
					{service.details.map((paragraph, index) => (
						<p
							key={index}
							className='modal-details'
						>
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</>
	);
};
