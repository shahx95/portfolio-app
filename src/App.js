import './App.css';
import Nav from './components/Nav'
import Header from './components/Header'
import Stack from './components/Stack'
import Project from "./components/Project"
import Blog from "./components/Blog"
import Footer from "./components/Footer"
import MainProjects from "./components/MainProjects"
import OtherProjects from "./components/OtherProjects"
import Consult from "./components/Consult"
import Beyond from "./components/Beyond"
import Form from "./components/ContactForm"


function App() {
  return (
    <div className="App">
      
       <Nav /> 
       <Header />
       <Stack />
       <section className='larger-projects-container'>
          <Project />
          <MainProjects />
        </section>
        <section className='other-projects-container'>
          <OtherProjects />
        </section>
       <Consult /> 
       <Beyond />
        
       <Footer />
    </div>
  );
}

export default App;
