import '../styles/App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'


function App() {
  return (
    <div className="App">
        {/* navbar */}
        <Navbar />

        {/* hero */}
        <Hero />

        {/* skills */}
        <Skills />

        {/* projects */}

        {/* contact */}
        {/* footer */}
    </div>
  );
}


export default App;