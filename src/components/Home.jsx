import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile from '../images/profile.jpg';
import profileavatar from '../images/profileavatar.png';
import narutoPull from '../images/naruto-pull.gif';
// import ohayo from '../audio/Azu-nyan Ohayo.mp3';
// import konnichiwa from '../audio/Cute Konnichiwa.mp3';
// import moshi from '../audio/Moshi Moshi - Shinobu Kocho.mp3';
import Footer from './Footer';
import Socials from './Socials';

const Home = () => {
	const mousemove = event => {
		const vw = window.screen.width;
		const vh = window.screen.availHeight;
		const halfWidth = vw / 2;
		const halfHeight = vh / 2;
		const mousePosX = event.pageX;
		const mousePosY = event.pageY;

		let emousePos = 0;
		if (mousePosY > halfHeight - 150 && mousePosY < halfHeight + 250) {
			mousePosX > halfWidth ? (emousePos = 90) : (emousePos = -90);
		} else if (mousePosX > halfWidth - 100 && mousePosX < halfWidth + 300) {
			mousePosY > halfHeight ? (emousePos = 180) : (emousePos = 0);
		} else if (mousePosY < halfHeight - 150 && mousePosX < halfWidth - 150) {
			emousePos = -45;
		} else if (mousePosY < halfHeight + 100 && mousePosX > halfWidth + 300) {
			emousePos = 45;
		} else if (mousePosY > halfHeight + 100 && mousePosX < halfWidth - 100) {
			emousePos = -135;
		} else if (mousePosY > halfHeight + 150 && mousePosX > halfWidth + 300) {
			emousePos = 135;
		}
		document.documentElement.style.setProperty(
			'--animation',
			` rotateZ(${emousePos}deg)`
		);
	};
	useEffect(() => {
		const vw = window.screen.width;
		const homePage = document.querySelector('.home-page');
		homePage.classList.add('bg-style-none');
		if (window.innerWidth > 1000) {
			setTimeout(() => {
				homePage.classList.remove('bg-style-none');
			}, 2000);
		} else {
			homePage.classList.remove('bg-style-none');
		}
		setTimeout(
			() => {
				window.addEventListener('mousemove', mousemove);
			},
			vw > 1000 ? 4000 : 0
		);
		return () => {
			window.removeEventListener('mousemove', mousemove);
			document.documentElement.style.setProperty(
				'--animation',
				'rotateZ(0deg)'
			);
		};
	}, []);

	// const date = new Date();
	// const hour = date.getHours();
	// useEffect(() => {
	// 	let audio = document.getElementById('audio1');
	// 	if (hour < 12) {
	// 		audio.src = ohayo;
	// 	} else if (hour < 16) {
	// 		audio.src = moshi;
	// 	} else audio.src = konnichiwa;
	// 	audio.play();
	// }, [hour]);
	const handleHomeContact = () => {
		const homeContact = document.querySelector('.fa-address-book');
		homeContact.classList.replace('fa-address-book', 'fa-phone');
	};
	const handleHomeContactRemove = () => {
		const homeContactRemove = document.querySelector('.fa-phone');
		homeContactRemove.classList.replace('fa-phone', 'fa-address-book');
	};

	return (
		<main>
			<img src={narutoPull} alt="narutoPull" />
			<section className="bg-style-container">
				<div className="bg-style-small"></div>
				<div className="bg-style-xsmall"></div>
				<div className="bg-style"></div>
				<div className="bg-style-small bg-style-small-half"></div>
				<img src={profileavatar} alt="profile" />
			</section>
			<article className="home-page">
				<div className="hello">
					<i>👋</i>
					<span>
						Hello, I am <br /> <b>Toyyib</b>
					</span>
				</div>
				<div className="hello-sub">
					<span>Fullstack developer</span>
					<span>Tech Enthusiast</span>
				</div>
				<div className="home-elements-container">
					<Link to={`/projects`}>
						<div className="home-projects">
							<div className="home-projects-white">
								<i className="fas fa-diagram-project"></i>
							</div>
							Projects
						</div>
					</Link>
					<Link to={`/about`}>
						<div className="home-about">
							<img src={profile} alt="profile" />
							About
						</div>
					</Link>
					<Link to={`/contact`}>
						<div className="home-contact">
							<div className="home-contact-white">
								<i
									className="fas fa-address-book"
									onMouseOver={handleHomeContact}
									onMouseLeave={handleHomeContactRemove}
								></i>
							</div>
							Contact
						</div>
					</Link>
					{/* <audio src={ohayo} id="audio1"></audio> */}
				</div>
				<Socials />
				<Footer />
			</article>
		</main>
	);
};

export default Home;
