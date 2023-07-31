import React, {useState, useEffect} from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home.jsx'
import Start from './Start.jsx'
import Past from './Past.jsx'
import Mid from './Mid.jsx'
import End from './End.jsx'
import Begin from './Begin.jsx'
import Hide from './Hide.jsx';
import Fullscreen from './Fullscreen.jsx';

import { PastProvider } from './PastContext';

export default function App() {
  const [showHeader, setShowHeader] = useState(true);


  //ENABLE REFRESH
  const handleKeyDown = (event) => {
    if (event.key === 'F5') {
      event.preventDefault();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    // Rimuovi l'ascoltatore dell'evento keydown quando il componente viene smontato
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  //END ENABLE REFRESH

  //DISABLE DEVELOPER MODE
  document.onkeydown = function (event) {
    if (event.keyCode === 123) {
      return false;
    }
  };
  //END DISABLE DEVELOPER MODE


  return (
    <>
    <Hide/>

    <div className="app">
      <PastProvider>
        <Router>
          <Routes>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path="/" element={<Begin/>}/>
            <Route path="/qWu8rF5yT3VpM7sGzXk2eYcE9iN0lA1oH6jB" element={<Start/>}/>
            <Route path="7sXGzLk3cP4A9jFV6pEoD2nRmKwYbQyNqH1aZ" element={<Past/>}/>
            <Route path="/mid" element={<Mid/>}/>
            <Route path="/the_end" element={<End/>}/>
          </Routes>
        </Router>   
      </PastProvider>
    </div>
    <div className="footer">
          <Fullscreen/>
          {/* <h6 className="donate"><a href="https://ko-fi.com/?gad=1" target="_blank"><span>ドナ・オラ</span> <br/>SUPPORT US</a></h6> */}
          {/* <h5 className='unSelect'>PRE<br/>ALPHA <br/>VERSION <br/> <span>バージョン0.1.0</span></h5> */}
          <h5 className='unSelect'>バージョン 0.1.1</h5>
    </div>
    </>
  )
}