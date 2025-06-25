import React, { useState } from "react"
import Signup from './pages/Signup'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import CreateNote from "./pages/CreateNote"
import FullView from "./pages/FullView"
import EditNote from "./pages/EditNote"

function App() {


  
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/:userid' element={<Home />}/>
        <Route path='/create/:userid' element={<CreateNote/>}/>
        <Route path='/notes/:noteid' element={<FullView/>}/>
        <Route path="/edit/notes/:userid/:noteid" element={<EditNote/>}/>
        <Route path="*" element={<h1>This page does not exist</h1>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
