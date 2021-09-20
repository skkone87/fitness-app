import React from 'react';
import emailjs from 'emailjs-com';
import '../../App.css'

// import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_iw9cpkg', 'template_uklwa1d', e.target, 'user_RoT5XVDeZjbLf8pUvtPnS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
   <div className ="Contact-container">
    <form onSubmit={sendEmail}>
         <div className ='col' >
     <div className ='div1'>
      <input  className="inputstyle" style ={{width: '400px', height: '50px'}} type="hidden" name="contact_number" />
      </div>
      <label >Name</label>
      <div className ='div1'>
      <input  className="inputstyle" style ={{width: '400px', height: '50px'}} type="text" name="user_name" />
      </div>
      <label>Email</label>
      <div className ='div1'>
      <input  className="inputstyle" style ={{width: '400px', height: '50px'}} type="email" name="user_email" />
      </div>
      <label>Message</label>
      <div className ='div1'>
      <textarea name="message" style ={{width: '400px',height: '100px'}} rows='4'/>
      </div>
      <div>
      <input  className="inputstyle" style ={{width: '400px', height: '20px'}} type="submit" value="Send" />
      </div>
      </div>
    </form>
    </div>

  );
}