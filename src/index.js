import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {NavBar} from'./Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Components/Banner';
// import { App } from 'react-bootstrap-icons';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';

// import { ProjectCard } from './Components/ProjectCard';
// import { App } from 'react-bootstrap-icons';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <App/> */}
{/* 
    <Banner/>
    <NavBar/>
    <Contact/>
    <Skills/>
    <Projects/>
    <Footer/>
    <ProjectCard/>
    <Newsletter/> */}

    <BrowserRouter>
       <Routes> 
         <Route path='/' element={<NavBar/>}></Route>
         <Route path='/ban' element={<Banner/>}></Route>
         <Route path='/skill' element={<Skills/>}></Route>
         <Route path='/project' element={<Projects/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route> 
          <Route path='/footer' element={<Footer/>}></Route>
        
        
         {/* <Route path='/card' element={<ProjectCard/>}></Route>  */}
       </Routes>
    </BrowserRouter>
  </React.StrictMode> 
);

reportWebVitals();
