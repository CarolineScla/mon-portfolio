import React from 'react'
import "../styles/footer.scss";

function Contact() {
  return (
    <div className='footer'>
          <div className='footer_container'>
       <div className='footer_logo'>
          <img src='/footerlogo.png' alt='logo footer'></img>
       </div>
       <div className='footer_text'>© 2020 Kasa. All <br className="break-on-small-screens" />rights reserved
       </div>
       </div>
    </div>
  )
}

export default Contact;