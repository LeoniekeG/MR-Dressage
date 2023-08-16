import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import './index.css';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import Home from './pages/Home';
import Horses from './pages/Horses';
import HorseDetail from './pages/HorseDetail';
import ForSale from './pages/ForSale';
import AboutMe from './pages/AboutMe';
import Instruction from './pages/Instruction';
import Training from './pages/Training';
import HorseTaxi from './pages/HorseTaxi';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />}/>
    <Route path="aboutme" element={<AboutMe />}/>
    <Route path="horses" element={<Horses />} />
    <Route path="forsale" element={<ForSale />} />
    <Route path="horses/:id" element={<HorseDetail />} />  
    <Route path="instruction" element={<Instruction />} />
    <Route path="training" element={<Training />} />
    <Route path="horsetaxi" element={<HorseTaxi />} />
    <Route path="calendar" element={<Calendar />} />
    <Route path="contact" element={<Contact />}/>
  
    <Route path="*" element={<NotFound />}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);




