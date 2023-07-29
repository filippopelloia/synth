import React, {useState} from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home.jsx'
import Start from './Start.jsx'
import Past from './Past.jsx'
import Mid from './Mid.jsx'
// import Settings from './Settings.jsx'
import End from './End.jsx'
import Begin from './Begin.jsx'
import Begin2 from './Begin2.jsx'
import Hide from './Hide.jsx';

import { PastProvider } from './PastContext';

export default function App() {
  const [showHeader, setShowHeader] = useState(true);

  return (
    <>
    {/* <div className='header'>
      <Settings />
    </div> */}
    <Hide/>
    
    <div className="app">
      <PastProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/begin" element={<Begin/>}/>
            <Route path="/begin2" element={<Begin2/>}/>
            <Route path="/start" element={<Start/>}/>
            <Route path="past" element={<Past/>}/>
            <Route path="/mid" element={<Mid/>}/>
            <Route path="/the_end" element={<End/>}/>
          </Routes>
        </Router>   
      </PastProvider>
    </div>
    <div className="footer">
          {/* <h6 className="donate"><a href="https://ko-fi.com/?gad=1" target="_blank"><span>ドナ・オラ</span> <br/>SUPPORT US</a></h6> */}
          {/* <h5 className='unSelect'>PRE<br/>ALPHA <br/>VERSION <br/> <span>バージョン0.1.0</span></h5> */}
          <h5 className='unSelect'>バージョン 0.1.1</h5>
    </div>
    </>
  )
}