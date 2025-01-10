import styles from '../styles/resume.module.css';
import mine from '../images/profile.jpg';
import html from '../images/skills/html.png';
import css from '../images/skills/css.png';
import js from '../images/skills/JS.png';
import react from '../images/skills/react.png';
import next from '../images/skills/next.png';
import typescript from '../images/skills/typescript.png';
import jquery from '../images/skills/jquery.svg';
import node from '../images/skills/node.png';
import express from '../images/skills/express.png';
import mongodb from '../images/skills/mongodb.png';
import git from '../images/skills/git.svg';
import {useState} from 'react';
import {useEffect} from 'react';
import {BASE_API_URL} from '../constants';

const Resume = () => {
	const [profile, setProfile] = useState(null);
	const [skills, setSkills] = useState([
		{name: 'HTML', icon: html},
		{name: 'CSS', icon: css},
		{name: 'JavaScript', icon: js},
		{name: 'Typescript', icon: typescript},
		{name: 'React', icon: react},
		{name: 'React Native', icon: react},
		{name: 'Next JS', icon: next},
		{name: 'jQuery', icon: jquery},
		{name: 'Node', icon: node},
		{name: 'Express', icon: express},
		{name: 'Mongodb', icon: mongodb},
		{name: 'GIT', icon: git},
	]);

	const [experiences, setExperiences] = useState([]);
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const getProfile = async () => {
			try {
				const res = await fetch(`${BASE_API_URL}/profile`);

				const data = await res.json();
				if (res.status === 200) {
					setProfile(data);
				}
			} catch (error) {
				console.error('Error fetching profile:', error);
			}
		};
		const fetchSkills = async () => {
			try {
				const res = await fetch(`${BASE_API_URL}/skill`);
				const data = await res.json();
				if (res.status === 200) {
					console.log(data);
					const combinedSkills = [...skills, ...data];
					const skillsWithPosition = combinedSkills.map((skill, index) => ({
						...skill,
						position: skill.position || index + 2,
					}));
					const sortedSkills = skillsWithPosition.sort(
						(a, b) => a.position - b.position
					);
					setSkills(sortedSkills);
				}
			} catch (error) {
				console.error('Error fetching skills:', error);
			}
		};

		const fetchExperience = async () => {
			try {
				const res = await fetch(`${BASE_API_URL}/experience`);
				const data = await res.json();
				if (res.status === 200) {
					const combinedExperiences = [...experiences, ...data];
					const experiencesWithPosition = combinedExperiences.map(
						(experience, index) => ({
							...experience,
							position: experience.position || index + 2,
						})
					);
					const sortedExperiences = experiencesWithPosition.sort(
						(a, b) => a.position - b.position
					);
					setExperiences(sortedExperiences);
				}
			} catch (error) {
				console.error('Error fetching experiences:', error);
			}
		};

		const fetchProjects = async () => {
			try {
				const res = await fetch(`${BASE_API_URL}/project`);
				const data = await res.json();
				if (res.status === 200) {
					const combinedProjects = [...projects, ...data];
					const projectsWithPosition = combinedProjects.map(
						(project, index) => ({
							...project,
							position: project.position || index + 2,
						})
					);
					const sortedProjects = projectsWithPosition.sort(
						(a, b) => a.position - b.position
					);
					setProjects(sortedProjects);
				}
			} catch (error) {
				console.error('Error fetching projects:', error);
			}
		};

		fetchSkills();
		fetchExperience();
		fetchProjects();
		getProfile();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={styles.resume}>
			<div>
				<header>
					<span></span>
					<div>
						<h1>Toyyib Lawal</h1>
						<h4>Web and Mobile App Developer</h4>
					</div>
				</header>
				<main>
					<section>
						<div></div>
						<div className={styles.img}>{/* <img src={mine} alt="" /> */}</div>
						<aside>
							<h4>CONTACT</h4>
							<div>
								<a
									href="mailto:toyibe25@gmail.com"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fas fa-envelope"></i>
									<span>toyibe25@gmail.com</span>
								</a>
							</div>
							<div>
								<a href="tel:+2349073002599">
									<i className="fas fa-phone"></i>
									<span>(234) 9073002599</span>
								</a>
							</div>
							<div>
								<i className="fas fa-location-dot"></i>
								<span>Ilorin, Nigera</span>
							</div>
							<div>
								<a
									href="https://linkedin.com/in/toyyib-lawal"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fab fa-linkedin"></i>
									<span>linkedin.com/in/toyyib-lawal</span>
								</a>
							</div>
							<div>
								<a
									href="https://github.com/GeekyCoder25"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fab fa-github"></i>
									<span>github.com/GeekyCoder25</span>
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
							{skills.map((skill, index) => (
								<p key={index} className={styles.skill}>
									<img src={skill.icon} alt={skill.name.toLowerCase()} />
									{skill.name}
								</p>
							))}
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
						</aside>
					</section>
					<section>
						<div>
							<h4>PROFILE</h4>

							{profile ? (
								<p>{profile}</p>
							) : (
								<p>
									Innovative, task-driven professional with over 3 years of
									experience in web and mobile application development, adept at
									identifying and fulfilling technological needs through
									ingenious solutions. Proficient in advanced front-end and
									back-end technologies including{' '}
									{skills &&
										skills.map(skill => (
											<span key={skill.name}>
												{skill.name}
												<span>,</span>{' '}
											</span>
										))}
									. Experienced in building user-friendly interfaces,
									implementing secure authentication, creating scalable
									architectures, and enhancing user engagement.
								</p>
							)}
						</div>
						{experiences.length > 0 && (
							<div className={styles.experience}>
								<h4>WORK EXPERIENCE</h4>
								{experiences.map(experience => (
									<div key={experience._id}>
										<h5>{experience.title}</h5>
										<p>
											{experience.company} | {experience.country} |{' '}
											{new Date(experience.start).toLocaleDateString('en-US', {
												month: 'long',
												year: 'numeric',
											})}{' '}
											-{' '}
											{experience.end
												? new Date(experience.end).toLocaleDateString('en-US', {
														month: 'long',
														year: 'numeric',
												  })
												: 'present'}
											{experience.link && (
												<a
													href={experience.link}
													target="_blank"
													rel="noreferrer"
												>
													<i className="fas fa-up-right-from-square"></i>
												</a>
											)}
										</p>
										<ul>
											{experience.about}.
											{experience.points.map((point, index) => (
												<li key={index}>
													{point.title} {!point.title.endsWith('.') && '.'}
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						)}
						{projects.length > 0 && (
							<div className={styles.projects}>
								<h4>PERSONAL PROJECTS</h4>
								{projects.map(project => (
									<div key={project._id} className={styles.project}>
										<i className="fas fa-angles-right"></i>
										<div>
											<a href={project.link} target="_blank" rel="noreferrer">
												<span>{project.title}</span>
											</a>
											<p>{project.about}</p>
											{project.link && (
												<a
													href={project.link}
													className={styles.clickLink}
													target="_blank"
													rel="noreferrer"
												>
													Click here to check it out
												</a>
											)}
										</div>
									</div>
								))}
							</div>
						)}
					</section>
				</main>
			</div>
			<span></span>
		</div>
	);
};
export default Resume;
