import React, { useState } from 'react'
import Header from '../../../../Component/Layout/Agent/Header/Header';
import './Bussearching.css'
import { Toaster } from 'react-hot-toast';
import { Button, Modal } from 'react-bootstrap';
import bus1 from '../../../../assets/images/bus1.png'
import bus2 from '../../../../assets/images/bus2.png'
import bus3 from '../../../../assets/images/bus3.png'
import busring from '../../../../assets/images/bus4.jpg'
import busseat from '../../../../assets/images/busseat.jpg'
import buseseanot from  '../../../../assets/images/busnot.jpg'
export default function Bussearching() {
    const [showModal3, setShowModal3] = useState(false);
    const handleClose3 = () => setShowModal3(false);
    const handleShow3 = () => setShowModal3(true);
  return (
    <>
       <Toaster
            position="top-right"
            reverseOrder={false}
        />
        <Header/>
  {/* -------------------------------------------------------------------------------- */}
  <div className="container-fluid bussreaching">
     <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-12">
                <div className="card bg-light p-3">
                    <form>
                        <label className="mt-4">From</label>
                        <input type="text" className='form-control border-0 mt-2 p-2 bg-light border-bottom ' placeholder='Enter  Source'/>

                        <label className="mt-3">To</label>
                        <input type="text" className='form-control border-0 mt-2 p-2 bg-light border-bottom ' placeholder='Enter  Destination'/>
                        <label className="mt-3">Travel Date</label>
                        <input type="date" className='form-control border-0 mt-2 p-2 bg-light border-bottom ' placeholder='Enter  Destination'/>
                       
                        <div className='d-flex justify-content-center mt-2'>
                          <button className='busbtnsear mx-auto mt-4 mb-4'>Search</button>
                        </div>

                    </form>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
               <div className="col-12">
                <div className="card bg-light p-3">
                        <h3 className='fw-bold'>Bus Ticket Booking</h3>
                        <ul className='buslist'>
                            <li><i class="fa-solid fa-check"></i>  Travel on buses that mandate covid vaccination</li>
                            <li><i class="fa-solid fa-check"></i> Travel safely Guarantee</li>
                            <li><i class="fa-solid fa-check"></i> Travel with Primo Buses</li>
                            <li><i class="fa-solid fa-check mb-3"></i> Best deals and discount.</li>
                        </ul>
                    </div>
               </div>

                <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-3">
                                        <img src={bus1} width="70px" height="70px" alt="" />
                                    </div>
                                    <div className="col-9">
                                        <p className='fs-5 fw-bold'>Experienced and polite drivers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="card p-3">
                                <div className="row">
                                    <div className="col-3">
                                      <img src={bus2} width="70px" height="70px" alt="" />
                                    </div>
                                    <div className="col-9">
                                      <p className='fs-5 fw-bold'>Clean and comfortable buses</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
     </div>
  </div>

  <div className="container busdetailslist">
    <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="row">
          <div className="col-12">
           <div className="card p-3 mt-4">
             <div className="row">
                <div className="col-12">
                    <h5>Boarding Point</h5>
                </div>
                <div className="col-12 busboardin mt-2">
                  <ul className='buschecked'>
                     <li><input type="checkbox" />  uday travels opp. Patel statue choti gwal toli , indore centex no-</li>
                     <li><input type="checkbox" />  Ambey travels chhotigwatoli</li>
                     <li><input type="checkbox" />  Bapat Square</li>
                     <li><input type="checkbox" />  Barkoti Travels Navlakha Bus Stand</li>
                     <li><input type="checkbox" />  Best Price</li>
                     <li><input type="checkbox" />  Best Price Indore</li>
                     <li><input type="checkbox" />  Bombay Hospital Towards Naka Road</li>
                     <li><input type="checkbox" />  Bombay hospital</li>
                     <li><input type="checkbox" />  Bombay hospital gate</li>
                     <li><input type="checkbox" />  Chhotigwaltoli Square Near Patel Pratima</li>
                     <li><input type="checkbox" />  Chotigwaltoli jai mata ji travels</li>
                     <li><input type="checkbox" />  Dhakkan wala kua indore</li>
                     <li><input type="checkbox" />  Dhariwal Travels 5 Ratnadeep Apartment Navlakha Bus Stand</li>
                     <li><input type="checkbox" />  Gautam Travels Teen Imli</li>
                     <li><input type="checkbox" />  Hans travels office ,pipliyahana in front of pink city near shanti nagar p.t.c. Ring road indore</li>
                     <li><input type="checkbox" />  Hans travels office ,pipliyahana in front of pink city near shanti nagar p.t.c. Ring road indore</li>
                     <li><input type="checkbox" />  Hotel radisson squre</li>
                     <li><input type="checkbox" />  Indore : AICTSL Campus</li>
                     <li><input type="checkbox" />  Jai Bhawani Travels Musakhedi Ambika Dham</li>
                     <li><input type="checkbox" />  Bombay Hospital Towards Naka Road</li>
                     <li><input type="checkbox" />  Bombay hospital</li>
                     <li><input type="checkbox" />  Bombay hospital gate</li>
                     <li><input type="checkbox" />  Chhotigwaltoli Square Near Patel Pratima</li>
                     <li><input type="checkbox" />  Chotigwaltoli jai mata ji travels</li>
                     <li><input type="checkbox" />  Dhakkan wala kua indore</li>
                     <li><input type="checkbox" />  Dhariwal Travels 5 Ratnadeep Apartment Navlakha Bus Stand</li>
                  </ul>
                </div>
             </div>
           </div>
          </div>

          <div className="col-12 m-0">
           <div className="card p-3 ">
             <div className="row">
                <div className="col-12">
                    <h5>Dropping Point</h5>
                </div>
                <div className="col-12 busboardin mt-2">
                  <ul className='buschecked'>
                     <li><input type="checkbox" />  uday travels opp. Patel statue choti gwal toli , indore centex no-</li>
                     <li><input type="checkbox" />  Ambey travels chhotigwatoli</li>
                     <li><input type="checkbox" />  Bapat Square</li>
                     <li><input type="checkbox" />  Barkoti Travels Navlakha Bus Stand</li>
                     <li><input type="checkbox" />  Best Price</li>
                     <li><input type="checkbox" />  Best Price Indore</li>
                     <li><input type="checkbox" />  Bombay Hospital Towards Naka Road</li>
                     <li><input type="checkbox" />  Bombay hospital</li>
                     <li><input type="checkbox" />  Bombay hospital gate</li>
                     <li><input type="checkbox" />  Chhotigwaltoli Square Near Patel Pratima</li>
                     <li><input type="checkbox" />  Chotigwaltoli jai mata ji travels</li>
                     <li><input type="checkbox" />  Dhakkan wala kua indore</li>
                     <li><input type="checkbox" />  Dhariwal Travels 5 Ratnadeep Apartment Navlakha Bus Stand</li>
                     <li><input type="checkbox" />  Gautam Travels Teen Imli</li>
                     <li><input type="checkbox" />  Hans travels office ,pipliyahana in front of pink city near shanti nagar p.t.c. Ring road indore</li>
                     <li><input type="checkbox" />  Hans travels office ,pipliyahana in front of pink city near shanti nagar p.t.c. Ring road indore</li>
                     <li><input type="checkbox" />  Hotel radisson squre</li>
                     <li><input type="checkbox" />  Indore : AICTSL Campus</li>
                     <li><input type="checkbox" />  Jai Bhawani Travels Musakhedi Ambika Dham</li>
                     <li><input type="checkbox" />  Bombay Hospital Towards Naka Road</li>
                     <li><input type="checkbox" />  Bombay hospital</li>
                     <li><input type="checkbox" />  Bombay hospital gate</li>
                     <li><input type="checkbox" />  Chhotigwaltoli Square Near Patel Pratima</li>
                     <li><input type="checkbox" />  Chotigwaltoli jai mata ji travels</li>
                     <li><input type="checkbox" />  Dhakkan wala kua indore</li>
                     <li><input type="checkbox" />  Dhariwal Travels 5 Ratnadeep Apartment Navlakha Bus Stand</li>
                  </ul>
                </div>
             </div>
           </div>
          </div>


          <div className="col-12 m-0">
           <div className="card p-3 ">
             <div className="row">
                <div className="col-12">
                    <h5>Dropping Point</h5>
                </div>
                <div className="col-12 busboardin mt-2">
                  <ul className='buschecked'>
                     <li><input type="checkbox" />  uday travels opp. Patel statue choti gwal toli , indore centex no-</li>
                     <li><input type="checkbox" />  Ambey travels chhotigwatoli</li>
                     <li><input type="checkbox" />  Bapat Square</li>
                     <li><input type="checkbox" />  Barkoti Travels Navlakha Bus Stand</li>
                     <li><input type="checkbox" />  Best Price</li>
                     <li><input type="checkbox" />  Best Price Indore</li>
                     <li><input type="checkbox" />  Bombay Hospital Towards Naka Road</li>
                     <li><input type="checkbox" />  Bombay hospital</li>
                     <li><input type="checkbox" />  Bombay hospital gate</li>
                     <li><input type="checkbox" />  Chhotigwaltoli Square Near Patel Pratima</li>
                     <li><input type="checkbox" />  Chotigwaltoli jai mata ji travels</li>
                     <li><input type="checkbox" />  Dhakkan wala kua indore</li>
                     <li><input type="checkbox" />  Dhariwal Travels 5 Ratnadeep Apartment Navlakha Bus Stand</li>
                     <li><input type="checkbox" />  Gautam Travels Teen Imli</li>
                     <li><input type="checkbox" />  Hans travels office ,pipliyahana in front of pink city near shanti nagar p.t.c. Ring road indore</li>
                     <li><input type="checkbox" />  Hans travels office ,pipliyahana in front of pink city near shanti nagar p.t.c. Ring road indore</li>
                     <li><input type="checkbox" />  Hotel radisson squre</li>
                     <li><input type="checkbox" />  Indore : AICTSL Campus</li>
                     <li><input type="checkbox" />  Jai Bhawani Travels Musakhedi Ambika Dham</li>
                     <li><input type="checkbox" />  Bombay Hospital Towards Naka Road</li>
                     <li><input type="checkbox" />  Bombay hospital</li>
                     <li><input type="checkbox" />  Bombay hospital gate</li>
                     <li><input type="checkbox" />  Chhotigwaltoli Square Near Patel Pratima</li>
                     <li><input type="checkbox" />  Chotigwaltoli jai mata ji travels</li>
                     <li><input type="checkbox" />  Dhakkan wala kua indore</li>
                     <li><input type="checkbox" />  Dhariwal Travels 5 Ratnadeep Apartment Navlakha Bus Stand</li>
                  </ul>
                </div>
             </div>
           </div>
          </div>

          <div className="col-12 m-0">
           <div className="card p-3 ">
             <div className="row">
                <div className="col-12">
                    <h5>Travels</h5>
                </div>
                <div className="col-12 busboardin mt-2">
                  <ul className='buschecked'>
                     <li><input type="checkbox" />  uday travels opp. Patel statue choti gwal toli , indore centex no-</li>
                     <li><input type="checkbox" />  Ambey travels chhotigwatoli</li>
                     <li><input type="checkbox" />  Bapat Square</li>
                     <li><input type="checkbox" />  Barkoti Travels Navlakha Bus Stand</li>
                     <li><input type="checkbox" />  Best Price</li>
                     <li><input type="checkbox" />  Best Price Indore</li>
                     <li><input type="checkbox" />  Bombay Hospital Towards Naka Road</li>
                     <li><input type="checkbox" />  Bombay hospital</li>
                     <li><input type="checkbox" />  Bombay hospital gate</li>
                     <li><input type="checkbox" />  Chhotigwaltoli Square Near Patel Pratima</li>
                     <li><input type="checkbox" />  Chotigwaltoli jai mata ji travels</li>
                     <li><input type="checkbox" />  Dhakkan wala kua indore</li>
                     <li><input type="checkbox" />  Dhariwal Travels 5 Ratnadeep Apartment Navlakha Bus Stand</li>
                     <li><input type="checkbox" />  Gautam Travels Teen Imli</li>
                     <li><input type="checkbox" />  Hans travels office ,pipliyahana in front of pink city near shanti nagar p.t.c. Ring road indore</li>
                     <li><input type="checkbox" />  Hans travels office ,pipliyahana in front of pink city near shanti nagar p.t.c. Ring road indore</li>
                     <li><input type="checkbox" />  Hotel radisson squre</li>
                     <li><input type="checkbox" />  Indore : AICTSL Campus</li>
                     <li><input type="checkbox" />  Jai Bhawani Travels Musakhedi Ambika Dham</li>
                     <li><input type="checkbox" />  Bombay Hospital Towards Naka Road</li>
                     <li><input type="checkbox" />  Bombay hospital</li>
                     <li><input type="checkbox" />  Bombay hospital gate</li>
                     <li><input type="checkbox" />  Chhotigwaltoli Square Near Patel Pratima</li>
                     <li><input type="checkbox" />  Chotigwaltoli jai mata ji travels</li>
                     <li><input type="checkbox" />  Dhakkan wala kua indore</li>
                     <li><input type="checkbox" />  Dhariwal Travels 5 Ratnadeep Apartment Navlakha Bus Stand</li>
                  </ul>
                </div>
             </div>
           </div>
          </div>


          </div>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="row">
             <div className="col-12 mt-4">
                <div className="card p-2">
                    <div className="row">
                        <div className="col-6">
                            <span className='busheading fs-5 me-2'>Jnpmabalpur</span>
                            <span className='busheading fs-5 me-2'><i class="fa-solid fa-arrow-right"></i></span>
                            <span className='busheading fs-5 me-1'>Indore </span>
                            <span className='busheading fs-5 me-2'>|</span>
                            <span className='busheading fs-5 me-1'>27 February 2024</span>
                        </div>
                        <div className="col-6">
                            <p className='text-end mb-0 fs-5'>22 Buses Found.</p>
                        </div>
                    </div>
                </div>
             </div>
             <div className="col-12">
                <div className="card p-3 border">
                  <div className="row">
                     <div className="col-lg-1 col-md-1">
                     <img src={bus3} alt="" width="50px" height="50px" />
                     </div>
                     <div className="col-lg-3 col-md-3 text-center">
                         <p className='m-0'>Jai Mata Ji Travels</p>
                         <p className='m-0 busnon'>NON AC Seater /</p>
                         <p className='m-0 busnon'>Sleeper 2+1</p>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='mt-4 fw-bold'>5:35 PM</h6>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='text-center'>12h:41m</h6>
                        <hr />
                        <span className='busheading ms-2'>32 Seat(s) left</span>
                     </div>
                       <div className="col-lg-2 col-md-2">
                     <h6 className='mt-4 fw-bold'>6:16 AM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3">
                        <h4>₹ 807</h4>
                        <Button className="cancelpolice btn mt-2" onClick={handleShow3} > View Seate
                        </Button>
                        <Modal size="xl" show={showModal3} onHide={handleClose3}  centered>
                            <Modal.Header closeButton>
                                <Modal.Title className='fw-bold fs-4'>Cancellation Policy</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Available Seats</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cancellation Fee</button>
                                </li>
                                
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-12 border p-3">
                                            <p className='text-center'>Tips:Click on available seat/sleeper to select it.Click again to deselect it.</p>
                                           <div className="row">
                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-4">
                                                      <img src={busring} alt=""  />
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>


                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-12">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                               </div>
                                           </div>
                                        </div>
                                        <div className="col-lg-3 col-md-12"></div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.2.</div>
                             
                                </div>
                              
                            </Modal.Body>
                           
                        </Modal> 
                     </div>
                  </div>
                </div>


                <div className="card p-3 border">
                  <div className="row">
                     <div className="col-lg-1 col-md-1">
                     <img src={bus3} alt="" width="50px" height="50px" />
                     </div>
                     <div className="col-lg-3 col-md-3 text-center">
                         <p className='m-0'>Jai Mata Ji Travels</p>
                         <p className='m-0 busnon'>NON AC Seater /</p>
                         <p className='m-0 busnon'>Sleeper 2+1</p>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='mt-4 fw-bold'>5:35 PM</h6>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='text-center'>12h:41m</h6>
                        <hr />
                        <span className='busheading ms-2'>32 Seat(s) left</span>
                     </div>
                       <div className="col-lg-2 col-md-2">
                     <h6 className='mt-4 fw-bold'>6:16 AM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3">
                        <h4>₹ 807</h4>
                        <Button className="cancelpolice btn mt-2" onClick={handleShow3} > View Seate
                        </Button>
                        <Modal size="xl" show={showModal3} onHide={handleClose3}  centered>
                            <Modal.Header closeButton>
                                <Modal.Title className='fw-bold fs-4'>Cancellation Policy</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Available Seats</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cancellation Fee</button>
                                </li>
                                
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-12 border p-3">
                                            <p className='text-center'>Tips:Click on available seat/sleeper to select it.Click again to deselect it.</p>
                                           <div className="row">
                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-4">
                                                      <img src={busring} alt=""  />
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>


                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-12">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                               </div>
                                           </div>
                                        </div>
                                        <div className="col-lg-3 col-md-12"></div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.2.</div>
                             
                                </div>
                              
                            </Modal.Body>
                           
                        </Modal> 
                     </div>
                  </div>
                </div>


                <div className="card p-3 border">
                  <div className="row">
                     <div className="col-lg-1 col-md-1">
                     <img src={bus3} alt="" width="50px" height="50px" />
                     </div>
                     <div className="col-lg-3 col-md-3 text-center">
                         <p className='m-0'>Jai Mata Ji Travels</p>
                         <p className='m-0 busnon'>NON AC Seater /</p>
                         <p className='m-0 busnon'>Sleeper 2+1</p>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='mt-4 fw-bold'>5:35 PM</h6>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='text-center'>12h:41m</h6>
                        <hr />
                        <span className='busheading ms-2'>32 Seat(s) left</span>
                     </div>
                       <div className="col-lg-2 col-md-2">
                     <h6 className='mt-4 fw-bold'>6:16 AM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3">
                        <h4>₹ 807</h4>
                        <Button className="cancelpolice btn mt-2" onClick={handleShow3} > View Seate
                        </Button>
                        <Modal size="xl" show={showModal3} onHide={handleClose3}  centered>
                            <Modal.Header closeButton>
                                <Modal.Title className='fw-bold fs-4'>Cancellation Policy</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Available Seats</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cancellation Fee</button>
                                </li>
                                
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-12 border p-3">
                                            <p className='text-center'>Tips:Click on available seat/sleeper to select it.Click again to deselect it.</p>
                                           <div className="row">
                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-4">
                                                      <img src={busring} alt=""  />
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>


                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-12">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                               </div>
                                           </div>
                                        </div>
                                        <div className="col-lg-3 col-md-12"></div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.2.</div>
                             
                                </div>
                              
                            </Modal.Body>
                           
                        </Modal> 
                     </div>
                  </div>
                </div>


                <div className="card p-3 border">
                  <div className="row">
                     <div className="col-lg-1 col-md-1">
                     <img src={bus3} alt="" width="50px" height="50px" />
                     </div>
                     <div className="col-lg-3 col-md-3 text-center">
                         <p className='m-0'>Jai Mata Ji Travels</p>
                         <p className='m-0 busnon'>NON AC Seater /</p>
                         <p className='m-0 busnon'>Sleeper 2+1</p>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='mt-4 fw-bold'>5:35 PM</h6>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='text-center'>12h:41m</h6>
                        <hr />
                        <span className='busheading ms-2'>32 Seat(s) left</span>
                     </div>
                       <div className="col-lg-2 col-md-2">
                     <h6 className='mt-4 fw-bold'>6:16 AM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3">
                        <h4>₹ 807</h4>
                        <Button className="cancelpolice btn mt-2" onClick={handleShow3} > View Seate
                        </Button>
                        <Modal size="xl" show={showModal3} onHide={handleClose3}  centered>
                            <Modal.Header closeButton>
                                <Modal.Title className='fw-bold fs-4'>Cancellation Policy</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Available Seats</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cancellation Fee</button>
                                </li>
                                
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-12 border p-3">
                                            <p className='text-center'>Tips:Click on available seat/sleeper to select it.Click again to deselect it.</p>
                                           <div className="row">
                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-4">
                                                      <img src={busring} alt=""  />
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>


                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-12">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                               </div>
                                           </div>
                                        </div>
                                        <div className="col-lg-3 col-md-12"></div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.2.</div>
                             
                                </div>
                              
                            </Modal.Body>
                           
                        </Modal> 
                     </div>
                  </div>
                </div>


                <div className="card p-3 border">
                  <div className="row">
                     <div className="col-lg-1 col-md-1">
                     <img src={bus3} alt="" width="50px" height="50px" />
                     </div>
                     <div className="col-lg-3 col-md-3 text-center">
                         <p className='m-0'>Jai Mata Ji Travels</p>
                         <p className='m-0 busnon'>NON AC Seater /</p>
                         <p className='m-0 busnon'>Sleeper 2+1</p>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='mt-4 fw-bold'>5:35 PM</h6>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='text-center'>12h:41m</h6>
                        <hr />
                        <span className='busheading ms-2'>32 Seat(s) left</span>
                     </div>
                       <div className="col-lg-2 col-md-2">
                     <h6 className='mt-4 fw-bold'>6:16 AM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3">
                        <h4>₹ 807</h4>
                        <Button className="cancelpolice btn mt-2" onClick={handleShow3} > View Seate
                        </Button>
                        <Modal size="xl" show={showModal3} onHide={handleClose3}  centered>
                            <Modal.Header closeButton>
                                <Modal.Title className='fw-bold fs-4'>Cancellation Policy</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Available Seats</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cancellation Fee</button>
                                </li>
                                
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-12 border p-3">
                                            <p className='text-center'>Tips:Click on available seat/sleeper to select it.Click again to deselect it.</p>
                                           <div className="row">
                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-4">
                                                      <img src={busring} alt=""  />
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>


                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-12">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                               </div>
                                           </div>
                                        </div>
                                        <div className="col-lg-3 col-md-12"></div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.2.</div>
                             
                                </div>
                              
                            </Modal.Body>
                           
                        </Modal> 
                     </div>
                  </div>
                </div>


                <div className="card p-3 border">
                  <div className="row">
                     <div className="col-lg-1 col-md-1">
                     <img src={bus3} alt="" width="50px" height="50px" />
                     </div>
                     <div className="col-lg-3 col-md-3 text-center">
                         <p className='m-0'>Jai Mata Ji Travels</p>
                         <p className='m-0 busnon'>NON AC Seater /</p>
                         <p className='m-0 busnon'>Sleeper 2+1</p>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='mt-4 fw-bold'>5:35 PM</h6>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='text-center'>12h:41m</h6>
                        <hr />
                        <span className='busheading ms-2'>32 Seat(s) left</span>
                     </div>
                       <div className="col-lg-2 col-md-2">
                     <h6 className='mt-4 fw-bold'>6:16 AM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3">
                        <h4>₹ 807</h4>
                        <Button className="cancelpolice btn mt-2" onClick={handleShow3} > View Seate
                        </Button>
                        <Modal size="xl" show={showModal3} onHide={handleClose3}  centered>
                            <Modal.Header closeButton>
                                <Modal.Title className='fw-bold fs-4'>Cancellation Policy</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Available Seats</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cancellation Fee</button>
                                </li>
                                
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-12 border p-3">
                                            <p className='text-center'>Tips:Click on available seat/sleeper to select it.Click again to deselect it.</p>
                                           <div className="row">
                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-4">
                                                      <img src={busring} alt=""  />
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>


                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-12">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                               </div>
                                           </div>
                                        </div>
                                        <div className="col-lg-3 col-md-12"></div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.2.</div>
                             
                                </div>
                              
                            </Modal.Body>
                           
                        </Modal> 
                     </div>
                  </div>
                </div>


                <div className="card p-3 border">
                  <div className="row">
                     <div className="col-lg-1 col-md-1">
                     <img src={bus3} alt="" width="50px" height="50px" />
                     </div>
                     <div className="col-lg-3 col-md-3 text-center">
                         <p className='m-0'>Jai Mata Ji Travels</p>
                         <p className='m-0 busnon'>NON AC Seater /</p>
                         <p className='m-0 busnon'>Sleeper 2+1</p>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='mt-4 fw-bold'>5:35 PM</h6>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='text-center'>12h:41m</h6>
                        <hr />
                        <span className='busheading ms-2'>32 Seat(s) left</span>
                     </div>
                       <div className="col-lg-2 col-md-2">
                     <h6 className='mt-4 fw-bold'>6:16 AM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3">
                        <h4>₹ 807</h4>
                        <Button className="cancelpolice btn mt-2" onClick={handleShow3} > View Seate
                        </Button>
                        <Modal size="xl" show={showModal3} onHide={handleClose3}  centered>
                            <Modal.Header closeButton>
                                <Modal.Title className='fw-bold fs-4'>Cancellation Policy</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Available Seats</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cancellation Fee</button>
                                </li>
                                
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-12 border p-3">
                                            <p className='text-center'>Tips:Click on available seat/sleeper to select it.Click again to deselect it.</p>
                                           <div className="row">
                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-4">
                                                      <img src={busring} alt=""  />
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>


                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-12">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                               </div>
                                           </div>
                                        </div>
                                        <div className="col-lg-3 col-md-12"></div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.2.</div>
                             
                                </div>
                              
                            </Modal.Body>
                           
                        </Modal> 
                     </div>
                  </div>
                </div>


                <div className="card p-3 border">
                  <div className="row">
                     <div className="col-lg-1 col-md-1">
                     <img src={bus3} alt="" width="50px" height="50px" />
                     </div>
                     <div className="col-lg-3 col-md-3 text-center">
                         <p className='m-0'>Jai Mata Ji Travels</p>
                         <p className='m-0 busnon'>NON AC Seater /</p>
                         <p className='m-0 busnon'>Sleeper 2+1</p>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='mt-4 fw-bold'>5:35 PM</h6>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='text-center'>12h:41m</h6>
                        <hr />
                        <span className='busheading ms-2'>32 Seat(s) left</span>
                     </div>
                       <div className="col-lg-2 col-md-2">
                     <h6 className='mt-4 fw-bold'>6:16 AM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3">
                        <h4>₹ 807</h4>
                        <Button className="cancelpolice btn mt-2" onClick={handleShow3} > View Seate
                        </Button>
                        <Modal size="xl" show={showModal3} onHide={handleClose3}  centered>
                            <Modal.Header closeButton>
                                <Modal.Title className='fw-bold fs-4'>Cancellation Policy</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Available Seats</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cancellation Fee</button>
                                </li>
                                
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-12 border p-3">
                                            <p className='text-center'>Tips:Click on available seat/sleeper to select it.Click again to deselect it.</p>
                                           <div className="row">
                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-4">
                                                      <img src={busring} alt=""  />
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>


                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-12">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                               </div>
                                           </div>
                                        </div>
                                        <div className="col-lg-3 col-md-12"></div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.2.</div>
                             
                                </div>
                              
                            </Modal.Body>
                           
                        </Modal> 
                     </div>
                  </div>
                </div>


                <div className="card p-3 border">
                  <div className="row">
                     <div className="col-lg-1 col-md-1">
                     <img src={bus3} alt="" width="50px" height="50px" />
                     </div>
                     <div className="col-lg-3 col-md-3 text-center">
                         <p className='m-0'>Jai Mata Ji Travels</p>
                         <p className='m-0 busnon'>NON AC Seater /</p>
                         <p className='m-0 busnon'>Sleeper 2+1</p>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='mt-4 fw-bold'>5:35 PM</h6>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='text-center'>12h:41m</h6>
                        <hr />
                        <span className='busheading ms-2'>32 Seat(s) left</span>
                     </div>
                       <div className="col-lg-2 col-md-2">
                     <h6 className='mt-4 fw-bold'>6:16 AM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3">
                        <h4>₹ 807</h4>
                        <Button className="cancelpolice btn mt-2" onClick={handleShow3} > View Seate
                        </Button>
                        <Modal size="xl" show={showModal3} onHide={handleClose3}  centered>
                            <Modal.Header closeButton>
                                <Modal.Title className='fw-bold fs-4'>Cancellation Policy</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Available Seats</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cancellation Fee</button>
                                </li>
                                
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-12 border p-3">
                                            <p className='text-center'>Tips:Click on available seat/sleeper to select it.Click again to deselect it.</p>
                                           <div className="row">
                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-4">
                                                      <img src={busring} alt=""  />
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>


                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-12">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                               </div>
                                           </div>
                                        </div>
                                        <div className="col-lg-3 col-md-12"></div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.2.</div>
                             
                                </div>
                              
                            </Modal.Body>
                           
                        </Modal> 
                     </div>
                  </div>
                </div>


                <div className="card p-3 border">
                  <div className="row">
                     <div className="col-lg-1 col-md-1">
                     <img src={bus3} alt="" width="50px" height="50px" />
                     </div>
                     <div className="col-lg-3 col-md-3 text-center">
                         <p className='m-0'>Jai Mata Ji Travels</p>
                         <p className='m-0 busnon'>NON AC Seater /</p>
                         <p className='m-0 busnon'>Sleeper 2+1</p>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='mt-4 fw-bold'>5:35 PM</h6>
                     </div>
                     <div className="col-lg-2 col-md-2">
                        <h6 className='text-center'>12h:41m</h6>
                        <hr />
                        <span className='busheading ms-2'>32 Seat(s) left</span>
                     </div>
                       <div className="col-lg-2 col-md-2">
                     <h6 className='mt-4 fw-bold'>6:16 AM</h6>
                     </div>
                     <div className="col-lg-2 col-md-3">
                        <h4>₹ 807</h4>
                        <Button className="cancelpolice btn mt-2" onClick={handleShow3} > View Seate
                        </Button>
                        <Modal size="xl" show={showModal3} onHide={handleClose3}  centered>
                            <Modal.Header closeButton>
                                <Modal.Title className='fw-bold fs-4'>Cancellation Policy</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Available Seats</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Cancellation Fee</button>
                                </li>
                                
                                </ul>
                                <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <div className="row">
                                        <div className="col-lg-9 col-md-12 border p-3">
                                            <p className='text-center'>Tips:Click on available seat/sleeper to select it.Click again to deselect it.</p>
                                           <div className="row">
                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-4">
                                                      <img src={busring} alt=""  />
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={busseat} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>

                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-6">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={buseseanot} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="row">
                                                            <div className="col-12 mb-2">
                                                                <img src={buseseanot} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                               <img src={buseseanot} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               </div>


                                               <div className="col-lg-2 col-md-2">
                                                <div className="row">
                                                    <div className="col-12">
                                                    <div className="row">
                                                            <div className="col-12 mb-2">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                            <div className="col-12">
                                                              <img src={busseat} alt=""  />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                               </div>
                                           </div>
                                        </div>
                                        <div className="col-lg-3 col-md-12"></div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">.2.</div>
                             
                                </div>
                              
                            </Modal.Body>
                           
                        </Modal> 
                     </div>
                  </div>
                </div>
                

                
                <div className="card p-3"></div>
                <div className="card p-3"></div>
             </div>
          </div>
        </div>
    </div>
  </div>
    </>
  )
}
