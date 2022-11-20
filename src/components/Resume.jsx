// import mine from '../images/mine.jpg';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/JS.png';
import react from '../images/react.png';
import next from '../images/next.png';
import typescript from '../images/typescript.png';
import jquery from '../images/jquery.svg';
import node from '../images/node.png';
import express from '../images/express.png';
import mongodb from '../images/mongodb.png';
import git from '../images/git.svg';

const Home = () => {
	return (
		<div className="resume">
			<aside>
				<section className="profile">
					{/* <img src={mine} alt="mine" className="mine" /> */}
					<h1>Toyyib Lawal</h1>
					<p>Front-End Developer</p>
					<div>
						<a
							href="mailto:toyibe25@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fas fa-envelope"></i>
							toyibe25@gmail.com
						</a>
					</div>
					<div>
						<i className="fas fa-phone"></i>
						(234) 9073002599
					</div>
					<div>
						<i className="fas fa-location-dot"></i>
						Ilorin, Nigera
					</div>
					<div>
						<a
							href="https://linkedin.com/in/toyib-lawal"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-linkedin"></i>
							linkedin.com/in/toyib-lawal
						</a>
					</div>
					<div>
						<a
							href="https://github.com/GeekyCoder25"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-github"></i>
							github.com/GeekyCoder25
						</a>
					</div>
				</section>
				<section className="about">
					<div>
						<h1>EDUCATION</h1>
						<p>Bachelor of Engineering</p>
						<p>Computer Engineering</p>
						<p className="school">Bayero University</p>

						{/* <p>
							<i className="fas fa-calendar"></i>2020 - Present
						</p> */}
						<p>
							<i className="fas fa-location-dot"></i>Kano, Nigeria
						</p>
					</div>
					<h1>SKILLS</h1>
					<h2>Languages</h2>
					<p className="image">
						<img src={html} alt="html" />
						HTML
					</p>
					<p className="image">
						<img src={css} alt="css" />
						CSS
					</p>
					<p className="image">
						<img src={js} alt="js" />
						JavaScript
					</p>
					<p className="image">
						<img src={typescript} alt="typescript" />
						Typescript
					</p>
					<h2>Libraries & Frameworks</h2>
					<p className="image">
						<img src={react} alt="react" />
						React
					</p>
					<p className="image">
						<img src={react} alt="react" />
						React Native
					</p>
					<p className="image">
						<img src={next} alt="next" />
						Next JS
					</p>
					<p className="image" style={{ marginBottom: '10px' }}>
						<img src={jquery} alt="jquery" />
						jQuery
					</p>
					<p className="image">
						<img src={node} alt="node" />
						Node
					</p>
					<p className="image">
						<img src={express} alt="express" />
						Express
					</p>
					<p className="image">
						<img src={mongodb} alt="mongodb" />
						Mongodb
					</p>
					<h2>CI/CD</h2>
					<p className="image">
						<img src={git} alt="git" />
						GIT
					</p>
				</section>
			</aside>
			<main>
				<section>
					<h1>PROFILE</h1>
					<p>
						Frontend Developer with 3 years of frontend experience able to build
						a web presence from the ground up, with passion and dedication for
						responsive website design. I'm skilled at writing well-designed,
						testable, effiecient code and resusable components using current
						best practices in Web Development. Fast leaner, hard worker, who is
						proficient in array scripting languages and multimedia Web tools.
						I'm skilled and proficient in
						<b>
							HTML, CSS, JavaScript, JQuery, React, Next JS, TypeScript,
							Tailwind CSS, Node JS.
						</b>
					</p>
				</section>
				<section className="work">
					<h1>AREAS OF INTEREST</h1>
					<ul>
						<li>Web Development</li>
						<li>Mobile App Development</li>
						<li>Blogging</li>
						<li>Open Source</li>
					</ul>
				</section>
				<section>
					<h1>Experiences</h1>
					<ul>
						<li>
							<b>Internship at Crediometer</b>
							<p>JULY 2022 - PRESENT | NIGERIA - REMOTE</p>
							<p>Implemented UI Components and making use of API calls</p>
						</li>

						<li>
							Implemented Website and Landing pages from concept through
							development
						</li>
						<li>
							Standardized all outputs with a new, responsive, mobile-first
							approach and strategy
						</li>
						<li>Assessed UX and UI designs for technical feasibilty</li>
					</ul>
				</section>
				<section>
					<h1>Personal Projects</h1>
					<p>Some of past projects include:</p>
					<ul className="links">
						<li>
							<a href="https://mabifus.vercel.app/" rel="noreferrer">
								Mabifus Health Care
							</a>
						</li>
						<li>
							<a href="https://toyib.vercel.app/" rel="noreferrer">
								Portfolio
							</a>
						</li>
						<li>
							<a href="https://qoreeb.vercel.app/" rel="noreferrer">
								Magnificent Portfolio
							</a>
						</li>
						<li>
							<a
								href="https://geekycoder25.github.io/Dees-Estate/"
								rel="noreferrer"
							>
								Dee's Estate
							</a>
						</li>
						<li>
							<a
								href="https://geekycoder25.github.io/Skillers/"
								rel="noreferrer"
							>
								Skillers
							</a>
						</li>
						<li>
							<a href="https://geekycoder25.github.io/Snap/" rel="noreferrer">
								Snap
							</a>
						</li>
						<li>
							{' '}
							<a
								href="https://geekycoder25.github.io/MagVerse/
                                "
								rel="noreferrer"
							>
								Magverse
							</a>
						</li>
					</ul>
				</section>
				<section>
					<h1>Certificates</h1>
					<p>
						<b>SoloLearn</b> Web Development Certification in HTML, CSS,
						JavaScript, React & Redux, Jquery, Responsive Web Design, etc.
						<span className="resume-certi">
							A list of my certificates on my portfolio is{' '}
							<a
								href="https://toyib.vercel.app/certificates"
								style={{ display: 'inline' }}
							>
								here
							</a>
						</span>
					</p>
				</section>
				<section>
					<h1>Languages</h1>
					<ul>
						<li>Yoruba - Native</li>
						<li>English - Fluent</li>
					</ul>
				</section>
			</main>
		</div>
	);
};

export default Home;
