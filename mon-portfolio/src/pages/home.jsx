import React from 'react';
import Banner from '../components/Banner.jsx'
import Content from "../components/Content.jsx";
import Footer from "../components/Footer.jsx";


function Home() {
    return (
      <div className='container'>
          <div className='main_conatiner'>
            <Banner />
            <Content>
            
            </Content>
        </div>
        <Footer /> 
      </div>
    )
  }

export default Home;
