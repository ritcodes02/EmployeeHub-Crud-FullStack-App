import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddEmployee from './empolyee/AddEmployee';
import EditEmployee from './empolyee/EditEmployee';
import ViewEmployee from './empolyee/ViewEmployee';
import About from './layout/About';

function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar/>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/addemployee' element={<AddEmployee/>}/>
          <Route  path='/editemployee/:id' element={<EditEmployee/>}/>
           <Route path='//view-employee/:id' element={<ViewEmployee/>}/>
           <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App