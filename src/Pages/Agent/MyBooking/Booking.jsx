import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../../Component/Layout/Agent/AgentLayout'
import axios from 'axios';
import toast from 'react-hot-toast';
import { FlightSearchService } from '../../../Services/Agent/FlightSearch.Service';
import Select from 'react-select'
import { Search } from '@mui/icons-material';
import Moment from 'moment';


const options = [
    { value: '0', label: 'UNCONFIRMED' },
    { value: '1', label: 'CONFIRM' },
    { value: '2', label: 'PENDING' },
    { value: '3', label: 'ABORTED' },
    { value: '4', label: 'ONHOLD' },
    { value: '5', label: 'CANCELLED' }
]
export default function Index() {
    const [bookTicketList, setBookTickets] = useState([]);
    const [pagination, setPagination] = useState(true)
    const [selectedOptions, setSelectedOptions] = useState("");
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [bookingId, setbookingId] = useState();
    const [routeInfo,setRouteInfo]= useState([]);
    const[bookingType,setBookingType]= useState("");




    const handleBookTicket = () => {
        let Values = {
            "pagination": pagination ? pagination : false,
            "startDate": startDate ? startDate : "",
            "endDate": endDate ? endDate : "",
            "status": selectedOptions ? selectedOptions : "",
            "bookingId":bookingId ?bookingId:"",
            "bookingType":bookingType ?bookingType:""
        };
    
        // Convert Values object to query parameters
        const queryParams = new URLSearchParams(Values).toString();
    
        FlightSearchService.BookTicket(`?${queryParams}`).then(async (response) => {
            if (response.status === 200) {
                if (response.data.status) {
                    let data = response.data.data.rows;
                    setBookTickets(data);
    
                    let routeInfo = data.map(item => item.routeInfo);
    
                    for (const ddd of routeInfo) {
                        setRouteInfo(JSON.parse(ddd));
                    }
                } else {
                    toast.error(response.data.message.message);
                }
            } else {
                toast.error("Something went wrong");
            }
    
        }).catch((e) => {
            console.log(e);
            toast.error('Something went wrong');
        });
    };
    
    // const handleBookTicket = () => {
    //     let Values = {
    //         "pagination": pagination ? pagination : false,
    //         "startDate": startDate ? startDate : "",
    //         "endDate": endDate ? endDate : "",
    //         "status": selectedOptions ? selectedOptions : ""
    //     }
     
    //     FlightSearchService.BookTicket(Values).then(async (response) => {
    //         if (response.status === 200) {
    //             if (response.data.status) {
    //                 let data =response.data.data.rows;
    //                 setBookTickets(data)
    //                 let routeInfo =data.map(item=>item.routeInfo)
  
    //               for(const ddd of routeInfo){
    //               setRouteInfo(JSON.parse(ddd)) 
    //               }
              
                   
    //             } else {
    //                 toast.error(response.data.message.message);
    //             }
    //         } else {
    //             toast.error("Something went wrong");
    //         }

    //     }).catch((e) => {
    //         console.log(e);
    //         toast.error('Something went wrong');

    //     });

    // }

    const handleSelectStatus = (selectOptions) => {
        setSelectedOptions(selectOptions.value);
       
    }
    const handleStartDate = (e) => {
        setStartDate(e.target.value)
       
    }
    const handleEndDate = (e) => {
        setEndDate(e.target.value)
       
    }
    const handlebookingId = (e) => {
        setbookingId(e.target.value);
     
    }

    useEffect(() => {
        handleBookTicket();
    }, [])
const handleSerachData =()=>{
    handleBookTicket();
}
    return (
        <>
            <Layout />
            <div className="main-content app-content booking">
                <div className="container-fluid">
                    {/* <!-- PAGE-HEADER --> */}
                    <div className="page-header">
                        <h1 className="page-title my-auto">My Booking</h1>
                        <div>
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <Link to={`/`}>Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">My Booking</li>
                            </ol>
                        </div>
                    </div>
                    {/* <!-- PAGE-HEADER END--> */}

                    <div className='row'>
                        <div class="col-xl-12">
                            <div className='card mt-4'>
                                <div class="card-body">
                                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active border btn-primary" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"><i class="fa-solid fa-plane-up me-1"></i> Flight Booking </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link border btn-info" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><i class="fa-solid fa-hotel me-1"></i> Hotel Booking </button>
                                        </li>
                                    </ul>
                                    <hr></hr>
                                    <div class="tab-content" id="pills-tabContent">
                                        <div class="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="col-sm-12 col-lg-12">
                                                <div id="responsiveDataTable_filter" className="dataTables_filter row d-flex">
                                                    <div className='col-4 text-start'>
                                                        <h5 className='fw-bold mt-3'> Flight Booking </h5>
                                                    </div>
                                                    <div className='col-2 text-start'>
                                                        <label>From Date</label>
                                                        <input type="date" className="form-control" placeholder='From Date'
                                                            aria-label="date" value={startDate}
                                                            onChange={handleStartDate}
                                                        />
                                                    </div>
                                                    <div className='col-2 text-start'>
                                                        <label>To Date</label>
                                                        <input type="date" className="form-control"
                                                            aria-label="date"
                                                            value={endDate}
                                                            onChange={handleEndDate}
                                                        />
                                                    </div>
                                                    <div className='col-2 text-start'>
                                                        <label>Status</label>
                                                        <Select options={options}
                                                            onChange={handleSelectStatus}
                                                        />
                                                    </div>
                                                    <div className='col-2 text-start float-end'>
                                                        <label>Booking ID</label>
                                                        <input className="form-control" placeholder="Booking ID" aria-controls="responsiveDataTable"
                                                            value={bookingId}
                                                            onChange={handlebookingId}
                                                        />
                                                    </div>
                                                    <div className="col-2 text-start">
                                                    <button className='btn btn-success' onClick={handleSerachData}>Serach</button>
                                                 </div>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div className="table-responsive">
                                                <table className="table text-nowrap w-100">
                                                    <thead>
                                                        <tr>
                                                            <th>Booking Date</th>
                                                            <th>Booking Id</th>
                                                            <th>PNR</th>
                                                            <th>Flight</th>
                                                            <th>From</th>
                                                            <th>To</th>
                                                            <th>Journey Date</th>
                                                            <th>Status</th>
                                                            <th>Total Fare</th>
                                                            <th>Commission</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {bookTicketList && bookTicketList.map((item, index) => (
                                                            <tr key={index}>
                                                                <td>{Moment(item.createdAt).format('DD-MM-YYYY')}</td>
                                                                <td><Link to={`/agent/manage-carts/cart-detail/${item.id}`}>{item.id}</Link> Summary  <Link to={`/booking-success/${item.id}`}>View</Link></td>
                                                               
                                                                <td>{item.PNR === null ? "not available" : ""}</td>

                                                               
                                                                <td> {item.flightInfo.map((flight, i) => (
                                                                    <span key={i}><div>{flight.flightNumber}<span style={{marginLeft:"10px"}}>{flight.flightName}</span></div></span>
                                                                ))}</td>
                                                                <td> {routeInfo.map((flight, i) => (
                                                                    <span key={i}><div>{flight.fromCityOrAirport.city} - {flight.fromCityOrAirport.name}</div></span>
                                                                ))}</td>
                                                                <td> {routeInfo.map((flight, i) => (
                                                                    <span key={i}><div>{flight.toCityOrAirport.city} - {flight.toCityOrAirport.name}</div></span>
                                                                ))}</td>
                                                                <td> {item.flightInfo.map((flight, i) => (
                                                                    <span key={i}><div>{Moment(flight.departureDate).format('DD-MM-YYYY')}</div></span>
                                                                ))}</td>
                                                                <td>{item.bookingStatus == 0 ? "UNCONFIRMED" : item.bookingStatus == 1 ? "CONFIRM" : item.bookingStatus == 2 ? "PENDING" : item.bookingStatus == 3 ? "ABORTED" : item.bookingStatus == 4 ? "ONHOLD" : "CANCELLED"}</td>
                                                                <td>{item.payAmount}</td>
                                                                <td>Data Not Available</td>
                                                            </tr>
                                                        ))}

                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-7">
                                                    <div className="dataTables_info" id="datatable-basic_info" role="status" aria-live="polite">Total Records: 1-0 of 0</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="col-sm-12 col-lg-12">
                                                <div id="responsiveDataTable_filter" className="dataTables_filter row d-flex">
                                                    <div className='col-6 text-start'>
                                                        <h5 className='fw-bold mt-3'> Hotel Booking </h5>
                                                    </div>
                                                    <div className='col-2 text-start'>
                                                        <label>From Date</label>
                                                        <input type="date" className="form-control" placeholder='From Date'
                                                            aria-label="date" />
                                                    </div>
                                                    <div className='col-2 text-start'>
                                                        <label>To Date</label>
                                                        <input type="date" className="form-control"
                                                            aria-label="date" />
                                                    </div>
                                                    <div className='col-2 text-start float-end'>
                                                        <label>Search</label>
                                                        <input type="search" className="form-control" placeholder="Search..." aria-controls="responsiveDataTable" />
                                                    </div>
                                                </div>
                                            </div>
                                            <hr></hr>
                                            <div className="table-responsive">
                                                <table className="table text-nowrap w-100">
                                                    <thead>
                                                        <tr>
                                                            <th>Booking ID</th>
                                                            <th>Hotel</th>
                                                            <th>Date</th>
                                                            <th>Room Type</th>
                                                            <th>Pax</th>
                                                            <th>Amount</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>--</td>
                                                            <td>--</td>
                                                            <td>--</td>
                                                            <td>--</td>
                                                            <td>--</td>
                                                            <td>--</td>
                                                            <td>--</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-7">
                                                    <div className="dataTables_info" id="datatable-basic_info" role="status" aria-live="polite">Total Records: 1-0 of 0</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )

}