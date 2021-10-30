 import React from 'react';
import emailjs from 'emailjs-com';
// import Services from './Services'; 
import TextField from '@material-ui/core/TextField';

import '../../App.css'
// import { basename } from 'path/posix';



const ContactUs = () => {
  
  function sendEmail(e){
    e.preventDefault();
    //before this step you should have emailjs account first
    emailjs.sendForm('service_iw9cpkg', 'template_uklwa1d', e.target, 'user_RoT5XVDeZjbLf8pUvtPnS')
    .then(result =>{
      console.log(result.text);

    },
    
    
    
    
    (error) => {
      console.log(error.text)
    }, );

  }
  
  
    return(
        <div style={{ marginTop:"50px", width:"100%",backgroundImage:`url('./images/image.jpg')`, backgroundPosition: 'center',backgroundSize:'550px',backgroundRepeat:'no-repeact'}} > 
        <div style={{margin:'auto', display:'block',width:'fit-content',textAlign:'right', backgroundColor: 'orange',}}>
      <h4>Pick Appoinment for the next training</h4>
      <TextField id='date' label='Choose the convinience date' type='date'
      //  defaultValue='2021-10-28'
      InputLabelProps={{shrink:true}} />
    </div>
        
            <h3 style={{marginTop: '5px',backgroundColor:"lightBlue",width:'400px',textAlign:'center'}}>Contact Form/טופס יצירת קשר</h3>

            <form  className="row" style={{ margin: "15px 55px 655px 50px",width:'350px',backgroundImage: `url('./images/happyGirls3.jpeg') ` , backgroundSize:'300px'}} onSubmit={sendEmail}>

                <label>Name/שֵׁם</label>

                <input type ="text" name="name" className="form-control"/>

                <label>Email/אימייל</label>

                <input type ="email" name="user_name"  className="form-control"/>

                <label>message/הוֹדָעָה</label>

                <textarea name="message" rows='4' className="form-control" />

                <input type='submit' value='Send/לִשְׁלוֹחַ' className="form-control btn btn-secondary" style={{marginTop: "20px",width:'100px'}} />

            </form>

            <div className ="bussinessInfo" style={{backgroundColor:'gray',backgroundImage:"https://www.bing.com/images/search?q=Outdoor+Yoga+Class&mmreqh=ghWfiFxwuVWFeY7jYIJDUfvDEI%2bkyIwWzBIk95ZpwSM%3d&form=INLIRS&first=1&tsc=ImageBasicHover", textDecorationColor:"green" }}>
                {/* <h3 style={{textAlign: 'center', backgroundColor:'blue'}}>Business Address/כתובת עסקית */}
              <h3 className="aboutpage" style={{textAlign:"center"}} ><i> About Limitless</i>
                <br /><small><i>חלל אינטימי לאימונים, סדנאות והרצאות <br/>
אימונים שיקומים, קבוצות קטנות ואימונים אישים<br />
בחיבור עם הקשבה לגוף ולנפש<br/>
כתובתינו - אבולעפיה 22 תל אביב</i></small><br />
<strong> !ברוכה השווה</strong>
<br />
לימיטלס(=ללא גבולות) הוא חלל אינטימי לנשים-
לאימוני כושר שקשובים לגוף שלך,
מפגשי העצמה,
וסדנאות מעוררות השראה

בסטודיו שלנו תוכלי למצוא:

אימונים אישים/ אימונים שיקומים - משולבים עם משקולות, גומיות, רצועות ומגוון ציוד 

קבוצות קטנות עד 6 משתתפות- אימוני כוח משולבים עם מוביליטי ואימונים פונקציונלים

מפגשי הרצאות וסדנאות מגוונים - לו''ז משתנה 

מוזמנות לפנות אליי בשמחה -
 לכל שאלה, התייעצות ותיאום שיעור היכרות

כתובתינו-אבולעפיה 22 תל אביב (יש חניה באיזור)




                <br />
                </ h3>
                <h3 style={{textAlign: 'center', backgroundColor:'white'}}>Business Address/כתובת עסקית
                </h3>
              <hr/>
              <div style={{textAlign:'center'}}>
                <label>Phone Number: 0538248164</label>
                <hr />
                <label>Email : limitlesselin@gmail.com</label>
                <hr />
                <label>Address: Abulafia 22 Tel Aviv</label>
                </div>
                </div>

          
        </div>
        )
        
}
export default ContactUs ;


// // import './ContactUs.css';

// export default function ContactUs() {

//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('service_iw9cpkg', 'template_uklwa1d', e.target, 'user_RoT5XVDeZjbLf8pUvtPnS')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   }

//   return (
//  //"contact-container">
//    <div className = "container border" style={{ marginTop: "50px", width: "50%", backgoundImage: `url('/images/calendar.jpg')`, backgroundPosition: 'center', backgroundSize: 'cover',}} > 
//     <form onSubmit={sendEmail}>
//          <div className ='col' >
//      {/* <div className ='div1'> */}
//       <input  className="inputstyle" style ={{width: '400px', height: '50px'}} type="hidden" name="contact_number" />
//       </div>
//       <label >Name</label>
//       <div className ='div1'>
//       <input  className="inputstyle" style ={{width: '400px', height: '50px'}} type="text" name="user_name" />
//       </div>
//       <label>Email</label>
//       <div className ='div1'>
//       <input  className="inputstyle" style ={{width: '400px', height: '50px'}} type="email" name="user_email" />
//       </div>
//       <label>Message</label>
//      {/* <div className ='div1'> */}
//       {/* <textarea name="message" style ={{width: '400px',height: '100px'}} rows='4'/> */}
//       <textarea name="message"  rows='4' className="form-control"/>

//       {/* </div> */}
//       <div>
//       <input  className="inputstyle" style ={{width: '400px', height: '20px'}} type="submit" value="Send" />
//       </div>
//       </div>
//     </form>
//     </div>

//   );
// }