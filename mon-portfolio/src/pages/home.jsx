import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Banner from '../components/Banner.jsx'
import Content from "../components/Content.jsx";
import Footer from "../components/Footer.jsx";


function Home() {
    return (
      <div className='container'>
          <div className='main_conatiner'>
            <Banner />
            <Content>
            <About />
            <Projects />
            <Contact />
            </Content>
        </div>
        <Footer /> 
      </div>
    )
  }

export default Home;
