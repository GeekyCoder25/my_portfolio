import styles from '../styles/resume.module.css';
import mine from '../images/profile.jpg';
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
import { useState } from 'react';
import { useEffect } from 'react';
const Resumee = () => {
	const [skills, setSkills] = useState(null);
	const [experiences, setExperiences] = useState(null);
	const [projects, setProjects] = useState(null);
	useEffect(() => {
		const fetchSkills = async () => {
			const res = await fetch('http://localhost:5000/api/skills');
			const data = await res.json();
			return data;
		};
		const fetchExperience = async () => {
			const res = await fetch('http://localhost:5000/api/experiences');
			const data = await res.json();
			return data;
		};
		const fetchProjects = async () => {
			const res = await fetch('http://localhost:5000/api/projects');
			const data = await res.json();
			return data;
		};
		fetchSkills().then(data => setSkills(data));
		fetchExperience().then(data => setExperiences(data));
		fetchProjects().then(data => setProjects(data));
	}, []);
	return (
		<div className={styles.resume}>
			<div>
				<header>
					<span></span>
					<div>
						<h1>Toyyib Lawal</h1>
						<h4>Web Developer</h4>
					</div>
				</header>
				<main>
					<section>
						<div></div>
						<div className={styles.img}>
							<img src={mine} alt="" />
						</div>
						<article>
							<h4>CONTACT</h4>
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
								<a href="tel:+2349073002599">
									<i className="fas fa-phone"></i>
									(234) 9073002599
								</a>
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
							<h4>EDUCATION</h4>
							<p>Bachelor of Engineering</p>
							<p>Computer Engineering</p>
							<p className="school">Bayero University, Kano</p>
							{/* <p>
								<i className="fas fa-calendar"></i>2019 - Present
							</p> */}
							<p>
								<i className="fas fa-location-dot"></i>Kano, Nigeria
							</p>
							<h4>SKILLS</h4>
							<p className={styles.skill}>
								<img src={html} alt="html" />
								HTML
							</p>
							<p className={styles.skill}>
								<img src={css} alt="css" />
								CSS
							</p>
							<p className={styles.skill}>
								<img src={js} alt="js" />
								JavaScript
							</p>
							<p className={styles.skill}>
								<img src={typescript} alt="typescript" />
								Typescript
							</p>
							<p className={styles.skill}>
								<img src={react} alt="react" />
								React
							</p>
							<p className={styles.skill}>
								<img src={react} alt="react" />
								React Native
							</p>
							<p className={styles.skill}>
								<img src={next} alt="next" />
								Next JS
							</p>
							<p className={styles.skill}>
								<img src={jquery} alt="jquery" />
								jQuery
							</p>
							<p className={styles.skill}>
								<img src={node} alt="node" />
								Node
							</p>
							<p className={styles.skill}>
								<img src={express} alt="express" />
								Express
							</p>
							<p className={styles.skill}>
								<img src={mongodb} alt="mongodb" />
								Mongodb
							</p>
							<p className={styles.skill}>
								<img src={git} alt="git" />
								GIT
							</p>
							<h4>Awards</h4>
							<ul>
								<li>
									<a href="https://toyib.vercel.app/certificates">
										Sololearn Certificates
									</a>
								</li>
								<li>
									<a href="https://toyib.vercel.app/certificates">
										aptlearn Certificate
									</a>
								</li>
							</ul>
						</article>
					</section>
					<section>
						<div>
							<h4>PROFILE</h4>
							<p>
								Innovative, task-driven professional with 3+ years of experience
								in web design and development across diverse industries.
								Equipped with a record of success in consistently identifying
								and providing the technological needs of companies through
								ingenious innovation. Proficient in developing databases,
								creating user interfaces, writing and testing codes,
								troubleshooting simple/complex issues, and implementing new
								features based on user feedback. Fast leaner, hard worker, who
								is proficient in array scripting languages like{' '}
								{skills &&
									skills.map(skill => (
										<span key={skill._id}>
											{skill.skill}
											<span>,</span>{' '}
										</span>
									))}
								and so on.
							</p>
						</div>
						<div className={styles.experience}>
							<h4>WORK EXPERIENCE</h4>
							{experiences &&
								experiences.map(experience => (
									<div key={experience._id}>
										<h5>{experience.title}</h5>
										<p>
											{experience.company} | {experience.country} |{' '}
											{experience.start} - {experience.end}
											<a href={experience.link}>
												<i className="fas fa-up-right-from-square"></i>
											</a>
										</p>
										<ul>
											{experience.about}.
											{experience.points.map((point, index) => (
												<li key={index}>{point.text}</li>
											))}
										</ul>
									</div>
								))}
						</div>
						<div className={styles.projects}>
							<h4>PERSONAL PROJECTS</h4>
							{projects &&
								projects.map(project => (
									<a href={project.link} key={project._id}>
										<span>
											{project.title}
											<span> | </span>
										</span>
									</a>
								))}
							<a href="https://toyib.vercel.app/projects">
								<i className="fas fa-angles-right"></i>
							</a>
						</div>
					</section>
				</main>
			</div>
			<span></span>
		</div>
	);
};
export default Resumee;
