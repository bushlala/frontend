import React from 'react'
import './ticketpdf.css'
import Indigo from '../../../assets/images/indigo.png';
export default function TicketPdf() {

  return (
    <>
        <div className='card ticketpdf'>
          <div className='row mt-2'>
            <div className='col-8 text-center'>
              <h3>Logo</h3>
            </div>
            <div className='col-4'>
              <h5 className='fw-bold'>Abc Technologies</h5>
              <p>Email: <span>demo@gmail.com</span></p>
              <p className='header-text'>Phone: <span className=''>9876543210</span></p>
              <p className='header-text'>Address : <span>Indore</span></p>
            </div>
          </div>
          <hr></hr>
          <div className='row'>
            <div className='col-5'>
              <div className='p-3'>
                <p>Booking Time: <span>Feb 7, 2024 1:01 PM</span></p>
                <p className='header-text'>Booking ID: <span className=''>TJS98765432100</span></p>
                <p className='header-text'>Booking Status : <span className='fw-bold'>CONFIRMED</span></p>
              </div>
            </div>
            <div className='vr' style={{}}></div>
            <div className='col-6'>
              <div className='row'>
                <div className='col-6'>
                  <div className='d-flex p-3'>
                    <img className='flight-flag' src={Indigo} />
                    <div className=''>
                      <div className="flightname mt-3" id="">GoIndigo</div>
                    </div>
                  </div>
                  <div className='d-flex mt-4 p-3'>
                    <img className='flight-flag' src={Indigo} />
                    <div className=''>
                      <div className="flightname mt-3" id="">GoIndigo</div>
                    </div>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='mt-4'>
                    <h4 className='fw-bold'>NBN9WG</h4>
                    <p>Airline PNR</p>
                  </div>
                  <div className='mt-4'>
                    <h4 className='fw-bold'>NBN9WG</h4>
                    <p>Airline PNR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=' mt-2' style={{ backgroundColor: 'black' , color: 'white'}}>
            <div className='row'>
              <div className='col-lg-2'>
                <h6 className='p-1'>Flight Details</h6>
              </div>
              <div className='col-lg-10'>
                <h6 className='p-1'> * Please Verify flight timings & terminal info with the airlines</h6>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table">
              <thead className=''>
                <tr>
                  <th style={{ backgroundColor: '#e6e6e6' }} scope="col">Flight</th>
                  <th style={{ backgroundColor: '#e6e6e6' }} scope="col">Class</th>
                  <th style={{ backgroundColor: '#e6e6e6' }} scope="col">Type</th>
                  <th style={{ backgroundColor: '#e6e6e6' }} scope="col">Departing</th>
                  <th style={{ backgroundColor: '#e6e6e6' }} scope="col">Arriving</th>
                  <th style={{ backgroundColor: '#e6e6e6' }} scope="col">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h6 className='fw-bold'> SG-485</h6>
                    <h6>Indigo</h6>
                  </td>
                  <td><p>Economy</p></td>
                  <td>Partial Refundable</td>
                  <td>
                    <h6>Wed, Feb 7, 05:25</h6>
                    <p>Bengaluru, Terminal 1 Bangaluru Arpt</p>
                  </td>
                  <td>
                    <h6>Wed, Feb 7, 07:25</h6>
                    <p>Mumbai, Terminal 1 Mumbai Arpt</p>
                  </td>
                  <td>
                    <h6 className='fw-bold'>1h 40m</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=' text-center'style={{ backgroundColor: '#e6e6e6' }}>
            <div className='row'>
              <div className='col-12'>
                <h6 className='p-1'>Layover Time 00h 15m</h6>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table">
              <tbody>
                <tr>
                  <td>
                    <h6 className='fw-bold'> SG-485</h6>
                    <h6>Indigo</h6>
                  </td>
                  <td><p>Economy</p></td>
                  <td>Partial Refundable</td>
                  <td>
                    <h6>Wed, Feb 7, 05:25</h6>
                    <p>Bengaluru, Terminal 1 Bangaluru Arpt</p>
                  </td>
                  <td>
                    <h6>Wed, Feb 7, 07:25</h6>
                    <p>Mumbai, Terminal 1 Mumbai Arpt</p>
                  </td>
                  <td>
                    <h6 className='fw-bold'>1h 40m</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=' mt-2' style={{ backgroundColor: 'black' , color: 'white'}}>
            <div className='row'>
              <div className='col-12'>
                <h6 className='p-1'>Passenger Details</h6>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table">
              <thead className=''>
                <tr>
                  <th  style={{ backgroundColor: '#e6e6e6' }} scope="col">Sr.</th>
                  <th  style={{ backgroundColor: '#e6e6e6' }} scope="col">Name & FF</th>
                  <th  style={{ backgroundColor: '#e6e6e6' }} scope="col">Sector</th>
                  <th  style={{ backgroundColor: '#e6e6e6' }} scope="col">PNR & Ticket No.</th>
                  <th  style={{ backgroundColor: '#e6e6e6' }} scope="col">Baggage</th>
                  <th  style={{ backgroundColor: '#e6e6e6' }} scope="col">Meal, Seat & Other Preference</th>
                  <th  style={{ backgroundColor: '#e6e6e6' }} scope="col">Document Id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> 1 </td>
                  <td><p>Mr demo</p></td>
                  <td>
                    <p className='fw-bold'>BLR-BOM</p>
                    <p className='fw-bold header-text'>BOM-BLR</p>
                  </td>
                  <td>
                    <p className='fw-bold'>NBN9WG</p>
                    <p className='fw-bold header-text'>NBN9WG</p>
                  </td>
                  <td>
                    <p className='fw-bold'>15Kg | 7Kg</p>
                    <p className='fw-bold header-text'>15Kg | 7Kg</p>
                  </td>
                  <td>
                    <p className='fw-bold'>NA</p>
                    <p className='fw-bold header-text'>NA</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='mt-2' style={{ backgroundColor: 'black' , color: 'white'}}>
            <div className='row'>
              <div className='col-12'>
                <h6 className='p-1'>Fare Details</h6>
              </div>
            </div>
          </div>
          <div className='row p-2'>
            <div className='col-6'>
              <p>Base Price</p>
            </div>
            <div className='col-6'>
              <p>₹8,130.00</p>
            </div>
            <div className='col-6'>
              <p>Airline Taxes and Fees</p>
            </div>
            <div className='col-6'>
              <p>(AT70 UDF211 YQ1400 RCF50 AGST482) ₹2,213.00</p>
            </div>
            <div className='col-6'>
              <p>Management Fee</p>
            </div>
            <div className='col-6'>
              <p>₹75.00</p>
            </div>
            <div className='col-6'>
              <p>Meal/ Seat/ Baggage/ Misc Charges</p>
            </div>
            <div className='col-6'>
              <p>0.00</p>
            </div>
            <div className='col-6'>
              <p>Management Fee GST</p>
            </div>
            <div className='col-6'>
              <p>₹13.50 ( IGST(18%) 13.50)</p>
            </div>
            <div className='col-6'>
              <p>Total Price</p>
            </div>
            <div className='col-6'>
              <p className='fw-bold'>₹10,431.50</p>
            </div>
          </div>
          <div className='mt-2' style={{ backgroundColor: 'black' , color: 'white'}}>
            <div className='row'>
              <div className='col-12'>
                <h6 className='p-1'>Important Information</h6>
              </div>
            </div>
          </div>
          <div className=' p-3'>
            <p>- You should carry a print-out of your booking and present for check-in.</p>
            <p>- Date & Time is calculated based on the local time of city/destination.</p>
            <p>- Use the Reference Number for all Correspondence with us.</p>
            <p>- Use the Airline PNR for all Correspondence directly with the Airline</p>
            <p>- For departure terminal please check with airline first.</p>
          </div>
        </div>
    </>
  )
}
