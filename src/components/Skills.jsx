import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/JS.png';
import react from '../images/react.png';
import jquery from '../images/jquery.svg';
import git from '../images/git.svg';
import typescript from '../images/typescript.png';
import node from '../images/node.png';
import express from '../images/express.png';
import mongodb from '../images/mongodb.png';
import next from '../images/next.png';
import Socials from './Socials';
import Footer from './Footer';

const Skills = () => {
	return (
		<article className="skills">
			<h1>Skills & Experiences</h1>
			<div>
				<section className="skills-logo">
					<p className="image">
						<img src={html} alt="html" />
						HTML
					</p>
					<p className="image css-logo">
						<img src={css} alt="css" />
						CSS
					</p>
					<p className="image js-logo">
						<img src={js} alt="js" />
						JavaScrpit
					</p>
					<p className="image react-logo">
						<img src={react} alt="react" />
						React
					</p>
					<p className="image next-logo">
						<img src={next} alt="next" style={{ objectFit: 'contain' }} />
						Next JS
					</p>
					<p className="image jq-logo">
						<img src={jquery} alt="jquery" />
						Jquery
					</p>
					<p className=" typescript-logo">
						<img src={typescript} alt="typescipt" />
						TypeScript
					</p>
					<p className="image react-logo">
						<img src={react} alt="react" />
						React Native
					</p>
					<p className="image">
						<img src={git} alt="git" />
						GIT
					</p>
					<p className="node-logo">
						<img src={node} alt="node" />
						Node JS
					</p>
					<p className="express-logo">
						<img src={express} alt="express" style={{ objectFit: 'contain' }} />
						Express
					</p>
					<p className="mongodb-logo">
						<img src={mongodb} alt="mongo" />
						MonogoDB{' '}
					</p>
				</section>
				<section className="work-exp">
					<div>
						<div>2022</div>
						<div>
							<h1>Software Engineer | Frontend Developer</h1>
							<p>
								aptLearn | United Kingdom | September 2022 - Present <br />{' '}
								<br />
								Built company's Website with other team members, aptLearn is an
								online learning platform for learners to learn different
								technical skills online
							</p>
							<h1>Internship at BigSolve Technology Ltd</h1>
							<p>
								Worked on building a Web App called Franca where users can learn
								languages
							</p>
							<h1>Internship at Crediometer</h1>
							<p>Implemented UI Components and making use of API calls</p>
							<h1>Personal Project | Mabifus Health Care</h1>
							<p>
								A health care website using with user authentication using Next
								JS
							</p>
							<h1>Personal Project | User Portfolio</h1>
							<p>Qoreeb Portfolio</p>
							<h1>Personal Project | aptLearn</h1>
							<p>AptLearn Homepage challenge by APtlearn ceo</p>
						</div>
					</div>
					<div>
						<div>2021</div>
						<div>
							<h1>Personal Project | Skillers</h1>
							<p>Skillers Music Page</p>
							<h1>Personal Project | Metaverse</h1>
							<p>MagVerse landing page</p>
						</div>
					</div>
					<div>
						<div>2020</div>
						<div>
							<h1>Personal Project | Snap</h1>
							<p>Challenge from Frontend Mentor</p>
						</div>
					</div>
					<div>
						<div>2019</div>
						<div>
							<h1>Personal Project </h1>
							<p>Facebook Sign in Page</p>
						</div>
					</div>
				</section>
			</div>
			<Socials />
			<Footer />
		</article>
	);
};

export default Skills;
