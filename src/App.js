import React from 'react';
import Navbar from './components/Navbar';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';

import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Time_Table from './components/pages/Time-Table';
import SignUp from './components/pages/SignUp';
import ContactUs from './components/pages/ContactUs';
// import UploadFile from './components/UploadForm';
// import UploadForm from './components/UploadForm';
// import Mailer from './components/mailer';

// import ImageGallary from 'ImageGallary';

function App() {
  return (
   
    <>
      <Router>
        <Navbar />
        <Switch>
          
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/tame-table' component={Time_Table} />
          <Route exact path='/contact' component={ContactUs} />
          <Route exact path='/contact' component={ContactUs} />
          {/* <Route exact path='imagegallary' component={ImageGallary}/> */}
         
          {/* < UploadForm/> */}
          <CalendarComponent/>
         





          {/* <Route path='/signup' component={SignUp} /> */}
           {/* <Route path ='/Mailer' component={Mailer} />  */}
        </Switch>
      </Router>
    </>
    
  );
 

}

export default App;
