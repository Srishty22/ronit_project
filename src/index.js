import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import Home from './Home';
import About from './About';
import Analytics from './Analytics';
import Contact from './Contact';
import AddUsers from './AddUsers';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
    <Home />
    <About />
    <Analytics />
    <AddUsers/>
    <Contact />
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
