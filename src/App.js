import React from 'react'
import './assets/css/styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Dashboard from './Pages/Dashboard/Dashboard';
import Agent from './Pages/Agent/Index';
import AddEditAgent from './Pages/Agent/Add';
import Agentedit from './Pages/Agent/Edit';
import Agentview from './Pages/Agent/View';
import Profileview from './Pages/Profile/Profileview';


import AdminDash from './Pages/Admin/Dashboard';
import AdList from './Pages/Admin/List';
import AdEdit from './Pages/Admin/Edit';
import AdForm from './Pages/Admin/Adform';
import Bookinglist from './Pages/Admin/booking/Index';
import CancellationList from './Pages/Admin/Cancellation/Index';
import CountryList from './Pages/Country/Index';
import CreateCountry from './Pages/Country/Create.jsx';
import CreateState from './Pages/State/Create.jsx';
import StateList from './Pages/State/Index.jsx';
import CreateCity from './Pages/City/Create.jsx';
import CityList from './Pages/City/Index.jsx';

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route exact path='/dashboard' element={<Dashboard />}></Route>
       
       <Route exact path='/agent' element={<Agent />}></Route>
       <Route exact path='/agent/add' element={<AddEditAgent />}></Route>
       <Route exact path='/agent/edit/:slug' element={<AddEditAgent />}></Route>

       <Route exact path='/country' element={<CountryList />}></Route>
       <Route exact path='/country/add' element={<CreateCountry />}></Route>
       <Route exact path='/country/edit/:slug' element={<CreateCountry />}></Route>

       <Route exact path='/state' element={<StateList />}></Route>
       <Route exact path='/state/add' element={<CreateState />}></Route>
       <Route exact path='/state/edit/:slug' element={<CreateState />}></Route>

       <Route exact path='/city' element={<CityList />}></Route>
       <Route exact path='/city/add' element={<CreateCity />}></Route>
       <Route exact path='/city/edit/:slug' element={<CreateCity />}></Route>

       <Route exact path='/agentedit' element={<Agentedit />}></Route>
       <Route exact path='/agentview' element={<Agentview />}></Route>
       <Route exact path='/profile' element={<Profileview />}></Route>


       <Route exact path='/' element={<AdminDash />}></Route>
       <Route exact path='/adlist' element={<AdList />}></Route>
       <Route exact path='/profile' element={<Profileview />}></Route>
       <Route exact path='/adedit' element={<AdEdit />}></Route>
       <Route exact path='/AdForm' element={<AdForm />}></Route>
       <Route exact path='/BookingList' element={<Bookinglist />}></Route> 
       <Route exact path='/CancellationList' element={<CancellationList />}></Route> 

     </Routes>
     </BrowserRouter>
  );
}

export default App;
