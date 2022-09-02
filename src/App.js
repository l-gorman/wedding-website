import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import HomePage from './components/homepage/homepage-component';
import RSVP from './components/rsvp/rsvp-component';
import  Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="main-page-image">



    <Navbar expand="lg" className='navbar'>
        <Nav className='me-auto' >

          <Nav.Link > <Link  className='nav-link' to="/details">Details </Link></Nav.Link>
          <Nav.Link > <Link className='nav-link' to="/rsvp">RSVP</Link></Nav.Link>
          

        </Nav>
      </Navbar>


    <Routes>
          <Route path="/details" element={<HomePage/>}/>
                   

          <Route path="/rsvp" element={<RSVP />}/>
            

          <Route path="/" element={<HomePage/>}/>
    </Routes>

        </div> 
  </Router>
  );
}

export default App;
