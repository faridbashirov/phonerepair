import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Sell from './pages/sell';
import Buy from './pages/buy';
import Blog from './pages/blogs';
import Services from './pages/services';
import Contact from './pages/contact';
import Problem from './components/Problem';
import { Routes,Route } from 'react-router-dom';
import BlogDetail from './pages/blog-detail';
import ServiceDetail from './pages/service-detail';
import Estimate from './pages/estimate';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route element={<Navbar/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='sell' element={<Sell/>}/>
        <Route path='buy' element={<Buy/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='blog-detail' element={<BlogDetail/>}/>
        <Route path='service-detail' element={<ServiceDetail/>}/>
        <Route path='estimate' element={<Estimate/>}/>

        
        </Route>
         
        
     </Routes>
     
    </div>
  );
}

export default App;
