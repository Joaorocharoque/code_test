import React,{ Component} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Comments from './home/comments';
import Posts from './home/posts';
import Navbar from './Navbar';
import './App.css'

function App(){
  
    return (
      <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/Comments" element={<Comments />} />
     
      </Routes>
  </Router>
    )
  }
  export default App;
