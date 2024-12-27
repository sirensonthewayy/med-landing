  import './App.css';
  import { Routes, Route } from 'react-router-dom'; 
  import Nav from './components/Nav'
  import Offer from './components/Offer';
  import AboutUs from './components/AboutUs';
  import Advantages from './components/Advantages';
  import Specialists from './components/Specialists';
  import Feedback from './components/Feedback';
  import Appointment from './components/Appointment';
  import Contacts from './components/Contacts';
  import Question from './components/Question';
  import { Element } from "react-scroll";
  import 'animate.css'

  function App() {
    return (
      <div className="container">
        <Nav/>
        <Element name="offer">
          <Offer/>
        </Element>
        <Element name="about_us">
          <AboutUs/>
        </Element>  
        <Element name="advantages">
          <Advantages/>
        </Element>
        <Element name="specialists">
          <Specialists/>
        </Element>
        <Element name="feedback">
          <Feedback/>
        </Element>
        <Element name="appointment">
          <Appointment/>
        </Element>
        <Element name="contacts">
          <Contacts/>
        </Element>
        <Element name="question">
          <Question/>
        </Element>
      </div>
    );
  }

  export default App;
