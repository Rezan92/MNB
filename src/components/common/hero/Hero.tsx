import './Hero.css';
import { Button } from '../button/Button';
import heroImage from '@/assets/hero/Hero.png';

const Hero = () => {
	const heroStyle = {
		backgroundImage: `url(${heroImage})`,
	};

	return (
		<div className='hero-container-wrapper'>
			<section
				className='hero'
				style={heroStyle}
			>
				<div className='hero-overlay'></div>
				<div className='hero-container'>
					<div className='hero-content'>
						<h1 className='hero-title'>
							PROFFSIGT MÅLERI
							<br />& SNICKERI I STOCKHOLM
						</h1>
						<p className='hero-subtitle'>
							Vi levererar högkvalitativt hantverk inom måleri, snickeri och
							renovering. Från första penseldraget till färdigställt bygge – vi
							skapar hem att trivas i.
						</p>
						<div className='hero-actions'>
							<Button
								to='/services'
								variant='primary'
								className='hero-button'
							>
								Våra Tjänster
							</Button>
							<Button
								to='/contact'
								variant='light'
								className='hero-button'
							>
								Få en Kostnadsfri Offert
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Hero;
