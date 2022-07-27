import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro'
import Skills from './components/skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
