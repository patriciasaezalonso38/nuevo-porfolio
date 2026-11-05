import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Footer from './components/layout/Footer';
export default function App(){return <LanguageProvider><div className="site-shell"><Navbar/><main><Hero/><About/><Skills/><Projects/><section id="contact" className="contact"><div className="grain"/><div className="section-wrap"><span className="eyebrow">04 / Contacto</span><h2 className="display">¿Creamos algo que importe?</h2><p>Si tienes una idea, una marca que necesita una nueva dirección o simplemente quieres conversar sobre creatividad e inteligencia artificial, escríbeme.</p><a className="pill pill-dark" href="mailto:hola@patriciasaez.com">hola@patriciasaez.com <span>↗</span></a></div></section></main><Footer/></div></LanguageProvider>}
