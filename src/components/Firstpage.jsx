// import { useNavigate } from "react-router";
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import mine from '../images/profile.jpg';

const Firstpage = () => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		const first = document.querySelector('.first-page');
		first.classList.add('first-page-animation');
		setTimeout(() => navigate(`/home`), 1000);
	};
	useEffect(() => {
		const redirect = setTimeout(() => {
			handleNavigate();
		}, 10000);
		return () => {
			clearTimeout(redirect);
		};
	});
	return (
		<article className="first-page">
			<img src={mine} alt="Toyyib" />
			<h1>
				<span className="welcome">WELCOME</span>
				You're accessing Toyyib Lawal's Portfolio, hope you have a nice time👋{' '}
				<br />
				<Link to="" onKeyUp={handleNavigate}>
					<i className="fas fa-angles-down" onClick={handleNavigate}></i>
				</Link>
			</h1>
			<div className="App-bg"></div>
		</article>
	);
};

export default Firstpage;
