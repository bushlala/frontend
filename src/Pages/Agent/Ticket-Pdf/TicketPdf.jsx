import React, { useState, useEffect } from 'react'
import Indigo from '../../../assets/images/indigo.png';
import { usePDF } from 'react-to-pdf';
import { useNavigate, useParams } from 'react-router-dom';
import { FlightSearchService } from "../../../Services/Agent/FlightSearch.Service";
import moment from 'moment';

export default function TicketPdf() {

  const options = { weekday: 'short', month: 'short', day: '2-digit' };
  const { bookingId } = useParams();
  const [print, setPrint] = useState(false);
  const navigate = useNavigate();
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });
  const [ticketDetails, setTicketDetails] = useState();
  const [listOfFlight, setListOfFlight] = useState([]);
  const [fareDetailsId, setFareDetailsId] = useState();
  const [details, setDetails] = useState([]);
  const userData = JSON.parse(localStorage.getItem('userData'));
  let currency = userData.data.currency;
  const [flightName, setFlightName] = useState([]);
  const [mealList, setMealList] = useState([]);
  const [seatList, setSeatList] = useState([]);
  const fullName = userData.data.firstName.toUpperCase() + " " + userData.data.lastName.toUpperCase();
  const storedDataString = localStorage.getItem('print');
  const printData = JSON.parse(storedDataString);

  console.log(printData);

  useEffect(() => {
    fetchBookingDeatils();
  }, [])

  const handleGOBack = () => {
    navigate(`/booking-success/${bookingId}`)
  }
  const fetchBookingDeatils = async () => {
    let bookingData = {
      "bookingId": bookingId && bookingId,
      "passengerPricing": true
    }

    FlightSearchService.getTicketDetails(bookingData).then(async (response) => {
      if (response.data.status) {
        const result = response.data.data;
        setTicketDetails(result);
        let datalist = result.travellerInfos.ssrMealInfos;
        let seatlist = result.travellerInfos.ssrSeatInfos;
        const list = Object.keys(datalist);
        setFlightName(list);
        let mealsList = [];
        let seatDetails = []
        list.forEach(_k => {
          let flightDetails = datalist[_k].desc
          let seatlistDetails = seatlist[_k].code
          mealsList.push(flightDetails)
          seatDetails.push(seatlistDetails);
        });
        setMealList(mealsList)
        setSeatList(seatDetails);

        setFareDetailsId(result.bookingDetails.fareRuleId)

        setListOfFlight(result.listOfFlight);

        let data = result.travellerInfos.pnrDetails;
        let pnrlist = "";
        var details = Object.entries(data);
        for (let i = 0; i < details.length; i++) {
          pnrlist += details[i][0] + "-" + details[i][1] + ",";
        }
        setDetails(pnrlist.split(","));

        if (printData) {
          window.print();
        } else {
          toPDF();
        }

      } else {
        setListOfFlight([]);
        setTicketDetails();
      }
    }).catch((error) => {
      console.log(error)

    });
  }

  return (
    <>
      <div className='container-fluid'>
        {/* <button onClick={handleGOBack} className='btn'>
          <i className="fa-solid fa-arrow-left"  ></i> Back </button> */}
        <div className="col-12 m-auto">
          {/* */}
          <div className='card ticketpdf' ref={targetRef} style={{padding: '0px'}}>
            <div className='row mt-2' style={{ marginBottom: '-25px'}}>
              <div className='col-6 text-center'>
                <h3><img src={Indigo} /></h3>
              </div>
              {printData.withAgency &&
                <div className='col-6'>
                  <h6 className='fw-bold'>{fullName}</h6>
                  <p style={{ marginTop: '-7px', fontSize: '14px'}}>Email: <span>{userData.data.email}</span></p>
                  <p style={{ marginTop: '-15px', fontSize: '14px' }}>Phone: <span className=''>{userData.data.mobileNumber}</span></p>
                  <p style={{ marginTop: '-15px', fontSize: '14px' }}>Address : <span>{userData.data.address}</span></p>
                </div>}
            </div>
            <hr></hr>
            <div className='row' style={{ marginTop: '-10px'}}>
              <div className='col-5'>
                <div className='p-2'>
                  <p style={{fontSize: '14px'}}>Booking Time: <span> {moment(ticketDetails?.bookingDetails?.bookingDate).format('MMM D, YYYY h:mm A')}
                  </span></p>
                  <p style={{ marginTop: '-15px', fontSize: '14px' }}>Booking ID: <span className=''>{bookingId && bookingId}</span></p>
                  <p style={{ marginTop: '-15px', fontSize: '14px' }}>Booking Status : <span className='fw-bold'>{ticketDetails?.bookingDetails.status}</span></p>
                </div>
              </div>
              <div className='vr' style={{}}></div>
              <div className='col-6'>
                {listOfFlight && listOfFlight.map((item, index) => (
                  <div className='d-flex' key={index}>
                    <div className='d-flex p-3'>
                      <img style={{ width: '45px' }} src={item?.flightDetails?.flightLogo} />
                      <div className=''>
                        <div className="flightname mt-3" id="">
                          <span className='fs-14' style={{ marginLeft: '15px'}}>{item?.flightDetails?.flightDescription?.name}</span></div>
                      </div>
                    </div>
                    <div className='mt-3 me-5' style={{ marginLeft: '110px' }}>
                      <h6 className='fw-bold'>{item?.flightDetails?.flightNumber}</h6>
                      <p className='fs-14'>{item?.flightDetails?.flightId}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=' mt-2' style={{ backgroundColor: 'black', color: 'white' }}>
              <div className='row'>
                <div className='col-lg-3 col-md-3 col-sm-3'>
                  <h6 className='p-1'>Flight Details</h6>
                </div>
                <div className='col-lg-9 col-md-9 col-sm-9'>
                  <h6 className='p-1 mt-1' style={{ fontSize: '14px'}}> * Please Verify flight timings & terminal info with the airlines</h6>
                </div>
              </div>
            </div>
            <div class="table-responsive" style={{marginBottom: '-16px'}}>
              <table class="table">
                <thead className=''>
                  <tr>
                    <th style={{ backgroundColor: '#e6e6e6'}}>Flight</th>
                    <th style={{ backgroundColor: '#e6e6e6' }}>Class</th>
                    <th style={{ backgroundColor: '#e6e6e6' }}>Type</th>
                    <th style={{ backgroundColor: '#e6e6e6' }}>Departing</th>
                    <th style={{ backgroundColor: '#e6e6e6' }}>Arriving</th>
                    <th style={{ backgroundColor: '#e6e6e6' }}>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {listOfFlight && listOfFlight.map((item, index) => (<><tr>
                    <td>
                      <h6 className='fw-bold'> {item.flightDetails?.flightCode}-{item.flightDetails?.flightNumber}</h6>
                      <h6>{item.flightDetails?.flightDescription?.name}</h6>
                    </td>
                    <td><p>{item.passengerSSRDetails?.cabinClass}</p></td>
                    <td>{item.passengerSSRDetails?.returnType === 0 ? "Non Refundable" : item.passengerSSRDetails?.returnType === 1 ? "Refundable" : "Partial Refundable"}</td>
                    <td>
                      <h6>{new Date(item.flightDetails?.departureDate).toLocaleDateString('en-US', options)}<span style={{ marginLeft: "20px" }}>{item.flightDetails.departureTime}</span></h6>
                      <p>{item.flightDetails.departureAirportInformation?.city}{item.flightDetails.departureAirportInformation?.terminal}, {item.flightDetails.departureAirportInformation?.name}</p>
                    </td>
                    <td>
                      <h6>{new Date(item.flightDetails?.arrivalDate).toLocaleDateString('en-US', options)}<span style={{ marginLeft: "20px" }}>{item.flightDetails.arrivalTime}</span></h6>
                      <p>{item.flightDetails.arrivalAirportInformation?.city}{item.flightDetails.arrivalAirportInformation?.terminal}, {item.flightDetails.arrivalAirportInformation?.name}</p>
                    </td>
                    <td>
                      <h6 className='fw-bold'>{item.flightDetails.flightDuration}</h6>
                    </td>

                  </tr>
                    {listOfFlight.length > 1 && (index < listOfFlight.length - 1) &&
                      <tr>

                        <td colSpan={6} style={{ backgroundColor: '#e6e6e6' }} >

                          <h6 className='text-center'> Layover Time {ticketDetails?.layover[index].layover}</h6>

                        </td>

                      </tr>
                    }
                  </>))}
                </tbody>
              </table>
            </div>
            <div className='' style={{ backgroundColor: 'black', color: 'white' }}>
              <div className='row'>
                <div className='col-12'>
                  <h6 className='p-1'>Passenger Details</h6>
                </div>
              </div>
            </div>
            <div class="table-responsive" style={{marginBottom: '-24px'}}>
              <table class="table">
                <thead className=''>
                  <tr>
                    <th style={{ backgroundColor: '#e6e6e6' }} scope="col">Sr.</th>
                    <th style={{ backgroundColor: '#e6e6e6' }} scope="col">Name & FF</th>
                    <th style={{ backgroundColor: '#e6e6e6' }} scope="col">Sector</th>
                    <th style={{ backgroundColor: '#e6e6e6' }} scope="col">PNR & Ticket No.</th>
                    <th style={{ backgroundColor: '#e6e6e6' }} scope="col">Baggage</th>
                    <th style={{ backgroundColor: '#e6e6e6' }} scope="col">Meal, Seat & Other Preference</th>
                    <th style={{ backgroundColor: '#e6e6e6' }} scope="col">Document Id</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td> 1 </td>
                    <td><p>{ticketDetails?.travellerInfos?.title} {ticketDetails?.travellerInfos?.firstName} {ticketDetails?.travellerInfos?.lastName}</p></td>
                    <td>
                      {ticketDetails?.travellerInfos?.pnrDetails && Object.entries(ticketDetails?.travellerInfos?.pnrDetails).map(([flight, pnr]) => (
                        <p className='fw-bold'> {flight}</p>
                      ))}

                    </td>
                    <td>
                      {ticketDetails?.travellerInfos?.pnrDetails && Object.entries(ticketDetails.travellerInfos.pnrDetails).map(([flight, pnr]) => (
                        <p key={flight} className='fw-bold'>{pnr}</p>
                      ))}

                    </td>
                    <td>
                      {listOfFlight.map((flight, index) => (
                        <p className='fw-bold'>{flight.passengerSSRDetails.baggageInformation.iB} | {flight.passengerSSRDetails.baggageInformation.cB}</p>

                      ))}


                    </td>
                    <td>
                      <p className='fw-bold'>{mealList},{seatList}</p>

                    </td>
                    <td>NA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='mt-2' style={{ backgroundColor: 'black', color: 'white' }}>
              <div className='row'>
                <div className='col-12'>
                  <h6 className='p-1'>Fare Details</h6>
                </div>
              </div>
            </div>
            <div className='row p-2' style={{marginBottom: '-24px'}}>
              <div className='col-6'>
                <p style={{fontSize: '14px'}}>Base Price</p>
              </div>
              <div className='col-6' >
                <p style={{fontSize: '14px'}}>{currency} {printData.withPrice ? ticketDetails?.fareDetail?.baseFare : 0}</p>
              </div>
              <div className='col-6' style={{marginTop: '-10px'}}>
                <p style={{fontSize: '14px'}}>Airline Taxes and Fees</p>
              </div>
              <div className='col-6' style={{marginTop: '-10px'}}>
                <p style={{fontSize: '14px'}}>(AT70 UDF211 YQ1400 RCF50 AGST482) {currency} {printData.withGST ? ticketDetails?.fareDetail?.texes : 0}</p>
              </div>
              <div className='col-6' style={{marginTop: '-10px'}}>
                <p style={{fontSize: '14px'}}>Management Fee</p>
              </div>
              <div className='col-6' style={{marginTop: '-10px'}}>
                <p style={{fontSize: '14px'}}>{currency} 00</p>
              </div>
              <div className='col-6' style={{marginTop: '-10px'}}>
                <p style={{fontSize: '14px'}}>Meal/ Seat/ Baggage/ Misc Charges</p>
              </div>
              <div className='col-6' style={{marginTop: '-10px'}}>
                <p style={{fontSize: '14px'}}>{currency} {ticketDetails?.fareDetail?.SSRP ? ticketDetails?.fareDetail?.SSRP : 0}</p>
              </div>
              <div className='col-6' style={{marginTop: '-10px'}}>
                <p style={{fontSize: '14px'}}>Management Fee GST</p>
              </div>
              <div className='col-6' style={{marginTop: '-10px'}}>
                <p style={{fontSize: '14px'}}>{currency}  {printData.withGST ? ticketDetails?.fareDetail?.texes : 0}</p>
              </div>
              <div className='col-6' style={{marginTop: '-10px'}}>
                <p style={{fontSize: '14px'}}>Total Price</p>
              </div>
              <div className='col-6' style={{marginTop: '-10px'}}>
                <p className='fw-bold' style={{fontSize: '14px'}}>{currency} {ticketDetails?.fareDetail?.totalFare ? ticketDetails?.fareDetail?.totalFare : 0}</p>
              </div>
            </div>
            <div className='mt-2' style={{ backgroundColor: 'black', color: 'white' }}>
              <div className='row'>
                <div className='col-12'>
                  <h6 className='p-1'>Important Information</h6>
                </div>
              </div>
            </div>
            <div className=' p-2'>
              <p className='' style={{ fontSize: '14px'}}>- You should carry a print-out of your booking and present for check-in.</p>
              <p className='' style={{ fontSize: '14px', marginTop: '-10px'}}>- Date & Time is calculated based on the local time of city/destination.</p>
              <p className='' style={{ fontSize: '14px', marginTop: '-10px'}}>- Use the Reference Number for all Correspondence with us.</p>
              <p className='' style={{ fontSize: '14px', marginTop: '-10px'}}>- Use the Airline PNR for all Correspondence directly with the Airline</p>
              <p className='' style={{ fontSize: '14px', marginTop: '-10px'}}>- For departure terminal please check with airline first.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
