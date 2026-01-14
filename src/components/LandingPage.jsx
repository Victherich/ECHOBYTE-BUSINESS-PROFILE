import React from 'react'
import Home from '../components/Home';
import About from '../components/About';
import Products from '../components/Products';
import Technology from '../components/Technology';
import Gallery from '../components/Gallery';
import Certifications from '../components/Certifications';
import Events from '../components/Events';
import TopProjects from '../components/TopProjects';
import TopClients from '../components/TopClients';
import Documents from '../components/Documents';
import Footer from '../components/Footer';
import SideTabs from '../components/SideTabs';
import MeetTheFounder from '../components/MeetTheFounder';

const LandingPage = ()=>{

    return(
<>
<Home/>
 <About/>
 <Products/>
  <MeetTheFounder/>
 <Technology/>
 <Gallery/>
 <Certifications/>
 <Events/>
 <TopProjects/>
 <TopClients/>
 <Documents/>
 <Footer/>
 <SideTabs/>


</>
    )
}

export default LandingPage