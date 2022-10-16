import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import Home from './Home';
import About from './About';
import Analytics from './Analytics';
import Contact from './Contact';
import AddUsers from './AddUsers';
import { BrowserRouter as Router, Route, Routes, Switch, Link } from 'react-router-dom';

function App() {
    return (
        
            <Routes>
            
                <Route exact path="/login" element={< Login/>}>
                </Route>
                <Route exact path="/home"element={< Home/>}> </Route>
                <Route eaxct path="/about"element={< About/>}> </Route>
                <Route path="/analytics"element={< Analytics/>}> </Route>
                <Route path="/contact"element={< Contact/>}> </Route>
                <Route path="/analytics/adduser"element={< AddUsers/>}> </Route>
                
            </Routes>
    
    );
}

export default App;