import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Time_Table from './components/pages/Time-Table';
import SignUp from './components/pages/SignUp';
import ContactUs from './components/pages/ContactUs';
// import Mailer from './components/mailer';

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
           {/* <Route path ='/Mailer' component={Mailer} />  */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
