import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav_bar from './components/NarBar.jsx'
import {NextUIProvider} from '@nextui-org/react'
import { HashRouter, Routes, Route } from "react-router-dom";
import ContactForm from './components/Contact.jsx'
import CV from './components/CV.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import CarsDB from './Projects/CarsDb/CarsDb.jsx'
import ArcheryApp from './Projects/ArcheryApp/ArcheryApp.jsx'
import Bakery from './Projects/Bakery/Bakery.jsx'
import Home from './home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>   
      
    <NextUIProvider>
    <ChakraProvider>

      <main className='dark text-foreground bg-background'>
        <Nav_bar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/projects" element={<Project/>} ></Route>
          <Route path="/cv" element={<CV/>} ></Route>
          <Route path="/contact" element={<ContactForm/>} ></Route>
          <Route path="/archery" element={<ArcheryApp/>} ></Route>
          <Route path="/bakery" element={<Bakery/>} ></Route>
          <Route path="/cars" element={<CarsDB/>} ></Route>
        </Routes>
        <App />
      </main>

    </ChakraProvider>
    </NextUIProvider>     
  </HashRouter>
  </React.StrictMode>
)
