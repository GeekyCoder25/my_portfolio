import {
	BrowserRouter as Router,
	// HashRouter,
	Routes,
	Route,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import './fontawesome-free-6.1.1-web/css/all.css';
import ScrollToTop from './components/ScrollToTop';
import Firstpage from './components/Firstpage';
import Home from './components/Home';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Sidenav from './components/Sidenav';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects';
import Error from './components/Error';
import Blur from './components/Blur';
import Submit from './components/Submit';
import Screen from './components/Screen';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import Mode from './components/Mode';
import Resumee from './components/Resumee';
function App() {
	const [colorScheme, setColorScheme] = useState('light');

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme) {
			document.body.classList.add(theme);
			theme === 'dark' && setColorScheme('dark');
		} else document.body.classList.add('light');
	}, []);
	const handleMode = () => {
		if (document.body.classList.contains('dark')) {
			document.body.classList.replace('dark', 'light');
			localStorage.setItem('theme', 'light');
		} else {
			document.body.classList.replace('light', 'dark');
			localStorage.setItem('theme', 'dark');
		}
		colorScheme === 'dark' ? setColorScheme('light') : setColorScheme('dark');
	};
	return (
		<Router>
			<div className="App">
				<ScrollToTop />
				<Blur />
				<Navbar handleMode={handleMode} />
				<Routes>
					<Route path="/" element={<Firstpage />} />
					<Route path="/home" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/certificates" element={<Certificates />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/submit" element={<Submit />} />
					<Route path="/about" element={<About />} />
					<Route path="/screen" element={<Screen />} />
					<Route path="/resumee" element={<Resume />} />
					<Route path="/resume" element={<Resumee />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Sidenav />
				<Mode handleMode={handleMode} colorScheme={colorScheme} />
			</div>
		</Router>
	);
}

export default App;
