import React from 'react'
import './assets/css/styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import Agent from './Pages/Agent/Index';
import Agentform from './Pages/Agent/Add';
import Agentedit from './Pages/Agent/Edit';
import Agentview from './Pages/Agent/View';
import Profileview from './Pages/Profile/Profileview';
import AdminDash from './Pages/Admin/Dashboard';
import AdList from './Pages/Admin/List';
import AdEdit from './Pages/Admin/Edit';
import AdForm from './Pages/Admin/Form';
function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route exact path='/dashboard' element={<Dashboard />}></Route>
       <Route exact path='/agent' element={<Agent />}></Route>
       <Route exact path='/agentform' element={<Agentform />}></Route>
       <Route exact path='/agentedit' element={<Agentedit />}></Route>
       <Route exact path='/agentview' element={<Agentview />}></Route>
       <Route exact path='/profile' element={<Profileview />}></Route>
       <Route exact path='/' element={<AdminDash />}></Route>
       <Route exact path='/adlist' element={<AdList />}></Route>
       <Route exact path='/profile' element={<Profileview />}></Route>
       <Route exact path='/adedit' element={<AdEdit />}></Route>
       <Route exact path='/AdForm' element={<AdForm />}></Route>

     </Routes>
     </BrowserRouter>
  );
}

export default App;
