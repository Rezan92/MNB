import React from 'react';
import './ContactForm.css';
import { Button } from '../button/Button';

export const ContactForm: React.FC = () => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert('Form submitted! (This is a demo)');
	};

	return (
		<div className='contact-form-wrapper'>
			<h2 className='contact-form-title'>Skicka ett meddelande</h2>
			<p className='contact-form-intro'>
				Fyll i formuläret nedan så återkommer vi till dig så snart som möjligt.
			</p>
			<form
				className='contact-form'
				onSubmit={handleSubmit}
			>
				<div className='form-group-grid'>
					<div className='form-group'>
						<label htmlFor='name'>Fullständigt namn*</label>
						<input
							type='text'
							id='name'
							name='name'
							required
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='phone'>Telefonnummer</label>
						<input
							type='tel'
							id='phone'
							name='phone'
						/>
					</div>
				</div>
				<div className='form-group'>
					<label htmlFor='email'>E-post*</label>
					<input
						type='email'
						id='email'
						name='email'
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='service'>Vilken tjänst är du intresserad av?*</label>
					<select
						id='service'
						name='service'
						required
					>
						<option value=''>-- Vänligen välj en tjänst --</option>
						<option value='Måleri'>Måleri (Inne/Ute)</option>
						<option value='Snickeri'>Snickeri & Bygg</option>
						<option value='Golvläggning'>Golvläggning</option>
						<option value='Renovering'>Totalrenovering</option>
						<option value='Övrigt'>Övrigt</option>
					</select>
				</div>
				<div className='form-group'>
					<label htmlFor='message'>Projektbeskrivning*</label>
					<textarea
						id='message'
						name='message'
						rows={5}
						placeholder='Beskriv ditt projekt (t.ex. antal rum, typ av arbete, önskat startdatum)'
						required
					></textarea>
				</div>
				<Button
					type='submit'
					variant='primary'
					className='contact-submit-btn'
				>
					Skicka meddelande
				</Button>
			</form>
		</div>
	);
};
