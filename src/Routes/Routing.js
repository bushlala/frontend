//import React from 'react';
//import { Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import GuestRoute from "../Component/Common/GuestRoute/GuestRoute.js";
import PrivateRoute from "../Component/Common/PrivateRoute/PrivateRoute.js";
//import store from "../components/Store"

import StoreData from "../Component/Store/index.js";

import React from 'react'
import { Routes, Route } from 'react-router-dom';
//import Dashboard from '../Pages/Dashboard/Dashboard';
import Agent from '../Pages/Agent/Index';
import AddEditAgent from '../Pages/Agent/Add';
import Agentedit from '../Pages/Agent/Edit';
import Agentview from '../Pages/Agent/View';
//import Profileview from '../Pages/Profile/Profileview';
// import AdminDash from '../Pages/Admin/Dashboard';
// import AdList from '../Pages/Admin/List';
// import AdEdit from '../Pages/Admin/Edit';
// import AdForm from '../Pages/Admin/Adform';
// import Bookinglist from '../Pages/Admin/booking/Index';
// import CancellationList from '../Pages/Admin/Cancellation/Index';
import CountryList from '../Pages/Admin/Country/Index';
import CreateCountry from '../Pages/Admin/Country/Create.jsx';
import CreateState from '../Pages/Admin/State/Create.jsx';
import StateList from '../Pages/Admin/State/Index.jsx';
import CreateCity from '../Pages/Admin/City/Create.jsx';
import CityList from '../Pages/Admin/City/Index.jsx';
import Home from "../Pages/Index.jsx";
import Login from "../Pages/Auth/Login/Login.jsx";
import Register from "../Pages/Auth/Register/Register.jsx";
// Import for agen
import AgentDashboard from "../Pages/Agent/Dashboard/Dashboard.jsx";
import AgentCustomerList from "../Pages/Agent/Customer/Index.jsx";
import AgentCustomerAdd from "../Pages/Agent/Customer/Add.jsx";
import AgentFlightSearch from "../Pages/Agent/Flights/Search.jsx";

// import my customer
// import MyCustomer from "../Pages/Agent/MyCustomer/Customer.jsx";
import CustomerForm from "../Pages/Agent/MyCustomer/CustomerForm.jsx";
import MyBooking from "../Pages/Agent/MyBooking/Booking.jsx";

// Agent Flight Booking
import Flightreview from "../Pages/Agent/Flights/FlightReview/Flightreview.jsx";
import FlightBook from "../Pages/Agent/Flights/FlightBook/FlightBook.jsx"
import FlightSearchList from "../Pages/Agent/Flights/Component/FlightSearchList.jsx"

// Agent Queries 
import AgentQueries from "../Pages/Agent/Queries/Queries.jsx" 
import AgentQueriesAdd from "../Pages/Agent/Queries/QueriesAdd/QueriesAdd.jsx";

// My Packages
import AgentPackages from "../Pages/Agent/MyPackages/Packages.jsx";
import AgentAddPackages from "../Pages/Agent/MyPackages/AddPackages/AddPackages.jsx";

// Mannual Hotel Booking
import AgentMannualHotel from "../Pages/Agent/HotelBooking/HotelBooking.jsx"

// Manage Markup
import AgentManageMarkup from "../Pages/Agent/ManageMarkup/ManageMarkup.jsx"

import Nopage from "./NoPage.jsx";
//import Flight from "@mui/icons-material/Flight.js";


/// Calling Arrow Routing Function
const Routing = () => {

    return (
        <Provider store={StoreData}>
            {/* <BrowserRouter> */}
            <Routes>

            {/* Home */}

            <Route exact path='/Home' element={<Home />}></Route>
            <Route
                path="/login"
                element={
                    <GuestRoute>
                        <Login />
                    </GuestRoute>
                }
            />
            <Route
                path="/"
                element={
                    <GuestRoute>
                        <Login />
                    </GuestRoute>
                }
            />

             {/* Error page */}  

            <Route exact path='*' element={<Nopage />} />



            <Route exact path='/register' element={<Register />}></Route>


            {/* Here route for agent */}
            <Route
                path="agent/dashboard"
                element={
                    <PrivateRoute>
                        <AgentDashboard />
                    </PrivateRoute>
                }
            />
            <Route
                path="agent/customer"
                element={
                    <PrivateRoute>
                        <AgentCustomerList />
                    </PrivateRoute>
                }
            />
            <Route
                path="agent/flight"
               
                element={
                    <PrivateRoute>
                        <AgentFlightSearch />
                    </PrivateRoute>
                }
            />
             <Route
                path="agent/Flightreview"
                element={
                    <PrivateRoute>
                        <Flightreview />
                    </PrivateRoute>
                }
            />
            <Route
                path="agent/FlightSearchList"
                element={
                    <PrivateRoute>
                        <FlightSearchList />
                    </PrivateRoute>
                }
            />
             <Route
                path="agent/FlightBook"
                element={
                    <PrivateRoute>
                        <FlightBook />
                    </PrivateRoute>
                }
            />
              <Route
                path="agent/Queries"
                element={
                    <PrivateRoute>
                        <AgentQueries />
                    </PrivateRoute>
                }
            />
             <Route
                path="agent/QueriesAdd"
                element={
                    <PrivateRoute>
                        <AgentQueriesAdd />
                    </PrivateRoute>
                }
            />
            <Route
                path="agent/Packages"
                element={
                    <PrivateRoute>
                        <AgentPackages />
                    </PrivateRoute>
                }
            />
            <Route
                path="agent/AddPackages"
                element={
                    <PrivateRoute>
                        <AgentAddPackages />
                    </PrivateRoute>
                }
            />
             <Route
                path="agent/MannualHotel"
                element={
                    <PrivateRoute>
                        <AgentMannualHotel />
                    </PrivateRoute>
                }
            />
             <Route
                path="agent/ManageMarkup"
                element={
                    <PrivateRoute>
                        <AgentManageMarkup />
                    </PrivateRoute>
                }
            />
            <Route
                path="agent/customer/add"
                element={
                    <PrivateRoute>
                        <AgentCustomerAdd />
                    </PrivateRoute>
                }
            />
            <Route
                path="agent/customer/edit/:slug"
                element={
                    <PrivateRoute>
                        <AgentCustomerAdd />
                    </PrivateRoute>
                }
            />

            
            {/* <Route exact path='/dashboard' element={<Dashboard />}></Route> */}
            
            <Route exact path='admin/agent' element={<Agent />}></Route>
            <Route exact path='admin/agent/add' element={<AddEditAgent />}></Route>
            <Route exact path='admin/agent/edit/:slug' element={<AddEditAgent />}></Route>

            <Route exact path='admin/country' element={<CountryList />}></Route>
            <Route exact path='admin/country/add' element={<CreateCountry />}></Route>
            <Route exact path='admin/country/edit/:slug' element={<CreateCountry />}></Route>

            <Route exact path='admin/state' element={<StateList />}></Route>
            <Route exact path='admin/state/add' element={<CreateState />}></Route>
            <Route exact path='admin/state/edit/:slug' element={<CreateState />}></Route>

            <Route exact path='admin/city' element={<CityList />}></Route>
            <Route exact path='admin/city/add' element={<CreateCity />}></Route>
            <Route exact path='admin/city/edit/:slug' element={<CreateCity />}></Route>

            <Route exact path='/agentedit' element={<Agentedit />}></Route>
            <Route exact path='/agentview' element={<Agentview />}></Route>
            {/* <Route exact path='/profile' element={<Profileview />}></Route> */}

            {/* MyCustomer */}
            <Route exact path='/agent/customerform' element={<CustomerForm />}></Route>
            <Route exact path='/agent/booking' element={<MyBooking />}></Route>

            

            {/* <Route exact path='/' element={<AdminDash />}></Route>
            <Route exact path='/adlist' element={<AdList />}></Route>
            <Route exact path='/profile' element={<Profileview />}></Route>
            <Route exact path='/adedit' element={<AdEdit />}></Route>
            <Route exact path='/AdForm' element={<AdForm />}></Route>
            <Route exact path='/BookingList' element={<Bookinglist />}></Route> 
            <Route exact path='/CancellationList' element={<CancellationList />}></Route>  */}

            </Routes>
            {/* </BrowserRouter> */}
        </Provider>
    );
};

export default Routing;