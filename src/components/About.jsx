import profile from '../images/profile.jpg';
import Footer from './Footer';
import Socials from './Socials';
import fed from '../images/fed.jpg';
import techgeek from '../images/tech-geek.jpeg';
import otaku from '../images/otaku.jpg';

const About = () => {
	return (
		<article className="about-page">
			<div className="App-bg"></div>
			<h1>About Me</h1>
			<div className="about-content">
				<img src={profile} alt="profile" />
				<div>
					<p>
						I'm Toyyib Lawal, a Fullstack Web developer with 3+ years of Web
						Development experience able to build a web presence from the ground
						up, web design and development across diverse industries with
						dedication for responsive website design. I'm experienced at writing
						well-designed, testable, efficient code and reusable components
						using current best practices in Web Development. Fast leaner, hard
						worker, who is proficient in array scripting languages and
						multimedia Web tools. I'm skilled and proficient in HTML, CSS,
						Tailwind CSS, JavaScript, JQuery, React JS, Next JS, Node JS,
						TypeScript, Express, MongoDB, GIT, JSON and so on. I've worked with
						different companies, aptLearn as an example is an online learning
						platform for learners to learn different tech skills like software
						engineers, product designers, UI/UX designers and so on. I'm
						interested in all things tech and currently expanding my knowledge
						and skillset.
					</p>
					<a href="https://drive.google.com/file/d/1v-v_5hswC6SfGum7gXi72iWjkpm_jqCv/view?usp=sharing">
						Open Resume
					</a>
				</div>
			</div>
			<div className="about-footer">
				<img src={fed} alt="fed" />
				<img src={techgeek} alt="tech-geek" />
				<img src={otaku} alt="otauk" />
			</div>
			<Socials />
			<Footer />
		</article>
	);
};

export default About;
