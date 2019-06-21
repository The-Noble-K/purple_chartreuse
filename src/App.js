import React, { Component } from 'react';
import './App.css';
import { Helmet } from 'react-helmet'
import logo from './images/TransparentBlackLogo.png'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Helmet bodyAttributes={{style: 'background-color : #88569d'}} />

        <div className='header'>
          <h1>Purple Chartreuse</h1>
        </div>
          
        <div className='logo-container'>
          <img className='logo' src={logo} alt='Purple Chartreuse logo' />
        </div>
    
        <div className='bio'>
          <p>
            Purple Chartreuse is made up of members Jarod Sneed and Kevin Teachey. We began as roommates, where the idea
            behind Purple Chartreuse was formed through our mutual love of music production. Purple Chartruese, to us, is a blend
            of musical genres, nifty ideas, crazy thoughts and intense feelings into sonic vibration. 
            Our music is made with instruments both digital, physical and analogue. We are proud to boast this fusion of elements
            varying from analogue to digital synthesizers, to guitars, piano, bass and even a didgeridoo. 
          </p>
        </div>
    
        <div className='links'>
    
        </div>
      </div>
    );
  }
}


export default App;
