//import React from 'react';
//import { Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import GuestRoute from "../Component/Common/GuestRoute/GuestRoute.js";
import PrivateRoute from "../Component/Common/PrivateRoute/PrivateRoute.js";
//import store from "../components/Store"
import StoreData from "../Component/Store/index.js";
import React from 'react'
import { Routes, Route } from 'react-router-dom';


// import Admin 

// Admin Dashboard
    import AdDashboard from '../Pages/Admin/Dashboard/Dashboard.jsx';

// Admin Agent List and add List
    import AdAgentList from '../Pages/Admin/Agent/Index.jsx';
    import AdAgentAdd from '../Pages/Admin/Agent/Add.jsx';
    import AdAgentedit from '../Pages/Admin/Agent/Edit.jsx';
    import AdAgentview from '../Pages/Admin/Agent/View.jsx';

/* Admin Country List and Add Country */
    import CountryList from '../Pages/Admin/Country/Index';
    import CreateCountry from '../Pages/Admin/Country/Create.jsx';

/* Admin State List and Add State */
    import CreateState from '../Pages/Admin/State/Create.jsx';
    import StateList from '../Pages/Admin/State/Index.jsx';

/* Admin City List and Add City */
    import CreateCity from '../Pages/Admin/City/Create.jsx';
    import CityList from '../Pages/Admin/City/Index.jsx';

/* Admin Booking List  */
    import AdFlightOnlineBooking from '../Pages/Admin/AllBooking/FlightOnlineBookings/FlightBooking.jsx';
    import AdFlightOfflineBooking from '../Pages/Admin/AllBooking/OfflineFlightBooking/OfflineFlightBooking.jsx'
    import AdHotelBooking from '../Pages/Admin/AllBooking/HotelBooking/HotelBooking.jsx'
    import AdActivityBooking from '../Pages/Admin/AllBooking/ActivityBooking/ActivityBooking.jsx'

/* Admin Accounts Details  */
    import AdFlightInvoice from '../Pages/Admin/Accounts/FlightInvoice/FlightInvoice.jsx'
    import AdHotelInvoice from '../Pages/Admin/Accounts/HotelInvoice/HotelInvoice.jsx'
    import AdBalanceSheet from '../Pages/Admin/Accounts/AdminBalanceSheet/BalanceSheet.jsx'
    import AdAgentCreditDebit from "../Pages/Admin/Accounts/AgentCreditDebit/AgentCreditDebit.jsx";

/* Admin  Queries  */ 
    import AdQueries from "../Pages/Admin/Queries/All-Queries/AdQueries.jsx";
    import AdminAddQueries from "../Pages/Admin/Queries/Add-Queries/addQueries.jsx";

/*  Admin Hotel Enquiry */ 
    import AdHotelEnquiry from "../Pages/Admin/Queries/HotelEnquiry/HotelEnquiry.jsx";

/*  Admin Package Enquiry */ 
    import AdPackageEnquiry from "../Pages/Admin/Queries/PackageEnquiry/PackageEnquiry.jsx"

/*  Admin Package Itinerary */ 
    import AdPackageItinerary from "../Pages/Admin/Queries/PackageItinerary/PackageItinerary.jsx"


/*  PaymentSuccess Page */ 
    import PaymentSuccess from "../Pages/Agent/PaymentVerification/PaymentSuccess.jsx";
    import BookingSuccess from "../Pages/Agent/BookingSuccess/BookingSuccess.jsx";
    import AgentReview from "../Pages/Agent/Flights/Review/Review.jsx";
    import BookingHold from "../Pages/Agent/BookingSuccess/BookingHold/BookingHold.jsx"
// import Profileview from '../Pages/Agent/Profile/Profileview.jsx';
// import AdminDash from '../Pages/Admin/Dashboard';
// import AdList from '../Pages/Admin/List';
// import AdEdit from '../Pages/Admin/Edit';
// import AdForm from '../Pages/Admin/Adform';
// import Bookinglist from '../Pages/Admin/booking/Index';
// import CancellationList from '../Pages/Admin/Cancellation/Index';
import Home from "../Pages/Index.jsx";
import Login from "../Pages/Auth/Login/Login.jsx";
import Register from "../Pages/Auth/Register/Register.jsx";


// Import for agent
import AgentDashboard from "../Pages/Agent/Dashboard/Dashboard.jsx";
import AgentCustomerList from "../Pages/Agent/Customer/Index.jsx";
import AgentCustomerAdd from "../Pages/Agent/Customer/Add.jsx";
import AgentFlightSearch from "../Pages/Agent/Flights/Search.jsx";



// import my customer

// My Booking
import MyBooking from "../Pages/Agent/MyBooking/Booking.jsx";
import ManageCart from "../Pages/Agent/MyBooking/ManageCart.jsx";

// import MyCustomer from "../Pages/Agent/MyCustomer/Customer.jsx";
import CustomerForm from "../Pages/Agent/MyCustomer/CustomerForm.jsx";


// Agent Flight Booking
import AgentFlightReviewBook from "../Pages/Agent/Flights/FlightReviewBook/FlightReviewBook.jsx";
import FlightBook from "../Pages/Agent/Flights/FlightBook/FlightBook.jsx"
import FlightSearchList from "../Pages/Agent/Flights/Component/FlightSearchList.jsx"

/*Agent Queries */
import AgentQueries from "../Pages/Agent/Queries/Queries.jsx" 
import AgentQueriesAdd from "../Pages/Agent/Queries/QueriesAdd/QueriesAdd.jsx";

// My Packages
import AgentPackages from "../Pages/Agent/MyPackages/Packages.jsx";
import AgentAddPackages from "../Pages/Agent/MyPackages/AddPackages/AddPackages.jsx";

// Mannual Hotel Booking
import AgentMannualHotel from "../Pages/Agent/HotelBookingList/HotelBooking.jsx"

// Manage Markup
import AgentManageMarkup from "../Pages/Agent/ManageMarkup/ManageMarkup.jsx"

// Web Check-in
import AgentWebCheck from "../Pages/Agent/WebCheck-in/WebCheck.jsx"

// Reminder Web Checkin
import AgentReminderWebCheckin from "../Pages/Agent/ReminderWebCheck/ReminderWebCheck.jsx"

// Online-Recharge
import AgentOnlineRecharge from "../Pages/Agent/OnlineRecharge/OnlineRecharge.jsx"

// Invoice
import AgentInvoice from "../Pages/Agent/Invoice/Invoice.jsx"

// Generate-Invoice 
import AgentGenerateInvoice from "../Pages/Agent/Generate-Invoice/GenerateInvoice.jsx"

// Agent Profile
import AgentProfile from "../Pages/Agent/Agent-Profile/AgentProfile.jsx"


// Agent RoundTrip 
import FlightRoundSearchList from "../Pages/Agent/Flights/Component/FlightRoundSearchList.jsx";

// Ticket 
 import TicketPdf from "../Pages/Agent/Ticket-Pdf/TicketPdf.jsx";
 import Emailticket from "../Pages/Agent/Ticket-Pdf/Email-ticket.jsx/Emailticket.jsx";

import Nopage from "./NoPage.jsx";
//import Flight from "@mui/icons-material/Flight.js";
import InvoiceGenerate from "../Pages/Agent/BookingSuccess/Invoice.jsx";
import ManageCarts from "../Pages/Agent/MyBooking/ManageCart.jsx";



// Hotels booking pages
import Hotelsear from "../Pages/Agent/Hotels/HotelSear/Hotelsear.jsx";
import Hoteldetails from "../Pages/Agent/Hotels/HotelDetails/Hoteldetails.jsx";
import Hotelbook from "../Pages/Agent/Hotels/HotelBook/Hotelbook.jsx";
import Payonline from "../Pages/Agent/Hotels/PayOnline/Payonline.jsx";


// Holiday booking pages
import Holidaysearch from "../Pages/Agent/Holiday/HolidaySearch/Holidaysearch.jsx";
import Holidetails from "../Pages/Agent/Holiday/HolidayDetails/Holidetails.jsx";
import Holidaystates from "../Pages/Agent/Holiday/HolidayStates/Holidaystates.jsx";

// Bus pages
import Bussearching from "../Pages/Agent/BusBooking/BusSearch/Bussearching.jsx";



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
            {/* Here is flight routes */}
            <Route
                path="agent/flight"
               
                element={
                    <PrivateRoute>
                        <AgentFlightSearch />
                    </PrivateRoute>
                }
            />
            <Route
                path="agent/flight-review-book/:ruleId"
                element={
                    <PrivateRoute>
                        <AgentFlightReviewBook />
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
                path="agent/amendmentcard"
                element={
                    <PrivateRoute>
                        <ManageCart />
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
                path="agent/WebCheck-In"
                element={
                    <PrivateRoute>
                        <AgentWebCheck />
                    </PrivateRoute>
                }
            />
            <Route
                path="agent/ReminderWebCheck-in"
                element={
                    <PrivateRoute>
                        <AgentReminderWebCheckin />
                    </PrivateRoute>
                }
            />
            <Route
                path="agent/Online-Recharge"
                element={
                    <PrivateRoute>
                        <AgentOnlineRecharge />
                    </PrivateRoute>
                }
            />
            <Route
                path="agent/Agent-Invoice"
                element={
                    <PrivateRoute>
                        <AgentInvoice />
                    </PrivateRoute>
                }
            />
            <Route
                path="agent/Generate-Invoice"
                element={
                    <PrivateRoute>
                        <AgentGenerateInvoice />
                    </PrivateRoute>
                }
            />
            <Route
                path="agent/My-Profile"
                element={
                    <PrivateRoute>
                        <AgentProfile/>
                    </PrivateRoute>
                }
            />
            <Route
                path="agent/My-booking"
                element={
                    <PrivateRoute>
                        <MyBooking/>
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


{/* Admin section Route */}

{/* Admin Dashboard */}
    <Route exact path='ad/dashboard' element={<AdDashboard />}></Route>

{/* Admin Agent List And Add List  */}
    <Route exact path='admin/agentlist' element={<AdAgentList />}></Route>
    <Route exact path='admin/agent/add' element={<AdAgentAdd />}></Route>
    <Route exact path='admin/agent/edit/:slug' element={<AdAgentedit />}></Route>
    <Route exact path='admin/agent/review' element={<AdAgentAdd />}></Route>

{/* Admin Country List And Add Country  */}
    <Route exact path='admin/country' element={<CountryList />}></Route>
    <Route exact path='admin/country/add' element={<CreateCountry />}></Route>
    <Route exact path='admin/country/edit/:slug' element={<CreateCountry />}></Route>

{/* Admin State List And Add State */}
    <Route exact path='admin/state' element={<StateList />}></Route>
    <Route exact path='admin/state/add' element={<CreateState />}></Route>
    <Route exact path='admin/state/edit/:slug' element={<CreateState />}></Route>

{/* Admin City List And Add City  */}
    <Route exact path='admin/city' element={<CityList />}></Route>
    <Route exact path='admin/city/add' element={<CreateCity />}></Route>
    <Route exact path='admin/city/edit/:slug' element={<CreateCity />}></Route>

 {/* Admin Booking List  */}
    <Route exact path="admin/FlightOnlineBooking" element={<AdFlightOnlineBooking />}></Route>
    <Route exact path="admin/FlightOfflineBooking" element={<AdFlightOfflineBooking />}></Route>
    <Route exact path="admin/HotelBooking" element={<AdHotelBooking />}></Route> 
    <Route exact path="admin/ActivityBooking" element={<AdActivityBooking />}></Route>          

{/* Admin Accounts Details */}
    <Route exact path="admin/FlightInvoice" element={<AdFlightInvoice />}></Route>
    <Route exact path="admin/HotelInvoice" element={<AdHotelInvoice />}></Route>
    <Route exact path="admin/BalanceSheet" element={<AdBalanceSheet />}></Route> 
    <Route exact path="admin/AgentCredit-Debit" element={<AdAgentCreditDebit />}></Route> 
    
{/* Admin  Queries */}
    <Route exact path="admin/All-Queries" element={<AdQueries />}></Route>
    <Route exact path="admin/Add-Queries" element={<AdminAddQueries />}></Route>



{/* Admin Hotel Enquiry */}
    <Route exact path="admin/HotelEnquiry" element={<AdHotelEnquiry />}></Route>

{/* Admin Package Enquiry */}
    <Route exact path="admin/PackageEnquiry" element={< AdPackageEnquiry />}></Route>

{/* Admin Package Itinerary */}
    <Route exact path="admin/Package-Itinerary" element={< AdPackageItinerary />}></Route>
   
    {/* Payment Details */}

     {/* Payment Details */}
  
   

     <Route
     path="/PaymentSuccess"
     element={
         <PrivateRoute>
             <PaymentSuccess />
         </PrivateRoute>
     }
 />
  
     <Route
     path="/booking-success/:bookingId"
     element={
         <PrivateRoute>
             <BookingSuccess />
         </PrivateRoute>
     }
 />
  <Route
     path="/agent/invoice/:bookingId"
     element={
         <PrivateRoute>
             <InvoiceGenerate />
         </PrivateRoute>
     }
 />
  
    <Route exact path="agentreview" element={<AgentReview />}></Route>
    <Route
    path="/agent/flight/booking-hold/:bookingId"
    element={
        <PrivateRoute>
            <BookingHold />
        </PrivateRoute>
    }
/>
            {/* <Route exact path='/profile' element={<Profileview />}></Route> */}
            {/* <Route exact path='/' element={<AdminDash />}></Route>
            <Route exact path='/adlist' element={<AdList />}></Route>
            <Route exact path='/profile' element={<Profileview />}></Route>
            <Route exact path='/adedit' element={<AdEdit />}></Route>
            <Route exact path='/AdForm' element={<AdForm />}></Route>
            <Route exact path='/BookingList' element={<Bookinglist />}></Route> 
            <Route exact path='/CancellationList' element={<CancellationList />}></Route>  */}
{/* Agent Round Trip  */}

<Route
path="/agent/FlightRoundSearchList"
element={
    <PrivateRoute>
        <FlightRoundSearchList />
    </PrivateRoute>
}
/>
<Route
path="/agent/ticketpdf/:bookingId"
element={
    <PrivateRoute>
        <TicketPdf />
    </PrivateRoute>
}
/>
<Route
path="/agent/emailticket"
element={
    <PrivateRoute>
        <Emailticket />
    </PrivateRoute>
}
/>
  

<Route
path="/agent/manage-carts/cart-detail/:bookingId"
element={
    <PrivateRoute>
        <ManageCarts />
    </PrivateRoute>
}
/>

{/* hotel Booking routes */}
<Route
path="agent/hotelbooking/flight"
element={
    <PrivateRoute>
        <Hotelsear />
    </PrivateRoute>
}
/>


<Route
path="agent/hotelbooking/hoteldetails"
element={
    <PrivateRoute>
        <Hoteldetails />
    </PrivateRoute>
}
/>

<Route
path="agent/hotelbooking/hotelbook"
element={
    <PrivateRoute>
        <Hotelbook />
    </PrivateRoute>
}
/>

<Route
path="agent/hotelbooking/payonline"
element={
    <PrivateRoute>
        <Payonline />
    </PrivateRoute>
}
/>

{/* Holiday Booking Routes */}

<Route
path="agent/holidaybooking/holidaysearch"
element={
    <PrivateRoute>
        <Holidaysearch />
    </PrivateRoute>
}
/>

<Route
path="agent/holidaybooking/holidetails"
element={
    <PrivateRoute>
        <Holidetails />
    </PrivateRoute>
}
/>

<Route
path="agent/holidaybooking/holidaystates"
element={
    <PrivateRoute>
        <Holidaystates />
    </PrivateRoute>
}
/>

{/* Bus Booking Routes */}

<Route
path="agent/busbooking/bussearching"
element={
    <PrivateRoute>
        <Bussearching />
    </PrivateRoute>
}
/>
</Routes>
            {/* </BrowserRouter> */}
        </Provider>
    );
};
export default Routing;
