import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/signIn';
import Landing from './components/landing';
import DataDashboard from './components/dataDashboard';
import Navbar from './components/navbar';
import ContactForm from './components/contactForm';
import About from './components/about';
import Footer from './components/footer';
import { signedIn } from './components/signIn';

function App() {
  const signInOrOut = signedIn ? {path: "/signIn", label:<SignIn/>} : {path: "/landing", label:<Landing/>};
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path={signInOrOut.path} element={signInOrOut.label} />
        <Route path="/dataDashboard" element={<DataDashboard/>} />
        <Route path="/contactUs" element={<ContactForm/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
    <Footer/>
    </>
    
  );
}

export default App;
