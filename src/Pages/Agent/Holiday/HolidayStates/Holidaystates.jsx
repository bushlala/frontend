import React from 'react'
import Header from '../../../../Component/Layout/Agent/Header/Header';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import hodliday5 from '../../../../assets/images/holiday5.jpg'
import icon1 from '../../../../assets/images/holidayicon1.png'
import icon2 from '../../../../assets/images/holidayicon2.png'
import icon3 from '../../../../assets/images/holidayicon3.png'
import icon4 from '../../../../assets/images/holidayicon4.png'
import './Holidaystates.css'
export default function Holidaystates() {
  return (
    <>
      <Toaster
            position="top-right"
            reverseOrder={false}
        />
        <Header/>
        {/* ---------------------------------------------------- */}

        <div className="container-fluid holdiaybanner">
            <div className="container">
                   <div className="col-lg-8 mx-auto">
                        <div className="card shadow p-3">
                        <div className="row">
                        <div className="col-lg-8 col-md-8">
                        <select class="form-select form-control p-3" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <button className='holidaybtn w-100'>Search</button>
                        </div>
                      </div>
                      </div>
                   </div>
            </div>
        </div>


        <div className="container holidaystate mt-5">
            <div className="row">
              <div className="col-lg-4 col-md-6 mx-auto mb-3">
               <Link to={"/agent/holidaybooking/holidetails"}>
                <div class="card card-box" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                        <h4>Goa</h4>
                        <div className="col-lg-12 ">
                            <div className="row mt-3">
                              <div className="col-2">
                                <img src={icon1} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Hotel</h6> 
                              </div>
                              <div className="col-4">
                                <img src={icon2} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'>Sightseeing</h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon3} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Transfer </h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon4} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Activity </h6> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0'>Starting From:</p>  
                            <h4 className='hostateprice m-0' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='hostatebtn mt-2'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                    </Link>
              </div>
              <div className="col-lg-4 col-md-6 mx-auto mb-3">
               <Link to={"/agent/holidaybooking/holidetails"}>  
                 <div class="card card-box" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                        <h4>Goa</h4>
                        <div className="col-lg-12 ">
                            <div className="row mt-3">
                              <div className="col-2">
                                <img src={icon1} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Hotel</h6> 
                              </div>
                              <div className="col-4">
                                <img src={icon2} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'>Sightseeing</h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon3} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Transfer </h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon4} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Activity </h6> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0'>Starting From:</p>  
                            <h4 className='hostateprice m-0' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='hostatebtn mt-2'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                    </Link>
              </div>
              <div className="col-lg-4 col-md-6 mx-auto mb-3">
               <Link to={"/agent/holidaybooking/holidetails"}> 
                <div class="card card-box" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                        <h4>Goa</h4>
                        <div className="col-lg-12 ">
                            <div className="row mt-3">
                              <div className="col-2">
                                <img src={icon1} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Hotel</h6> 
                              </div>
                              <div className="col-4">
                                <img src={icon2} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'>Sightseeing</h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon3} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Transfer </h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon4} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Activity </h6> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0'>Starting From:</p>  
                            <h4 className='hostateprice m-0' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='hostatebtn mt-2'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                    </Link>
              </div>

              <div className="col-lg-4 col-md-6 mx-auto mb-3">
               <Link to={"/agent/holidaybooking/holidetails"}> 
                 <div class="card card-box" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                        <h4>Goa</h4>
                        <div className="col-lg-12 ">
                            <div className="row mt-3">
                              <div className="col-2">
                                <img src={icon1} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Hotel</h6> 
                              </div>
                              <div className="col-4">
                                <img src={icon2} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'>Sightseeing</h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon3} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Transfer </h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon4} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Activity </h6> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0'>Starting From:</p>  
                            <h4 className='hostateprice m-0' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='hostatebtn mt-2'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                    </Link>
              </div>

              <div className="col-lg-4 col-md-6 mx-auto mb-3">
               <Link to={"/agent/holidaybooking/holidetails"}> 
                 <div class="card card-box" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                        <h4>Goa</h4>
                        <div className="col-lg-12 ">
                            <div className="row mt-3">
                              <div className="col-2">
                                <img src={icon1} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Hotel</h6> 
                              </div>
                              <div className="col-4">
                                <img src={icon2} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'>Sightseeing</h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon3} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Transfer </h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon4} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Activity </h6> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0'>Starting From:</p>  
                            <h4 className='hostateprice m-0' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='hostatebtn mt-2'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                    </Link>
              </div>

              <div className="col-lg-4 col-md-6 mx-auto mb-3">
                <Link to={"/agent/holidaybooking/holidetails"}> 
                  <div class="card card-box" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                        <h4>Goa</h4>
                        <div className="col-lg-12 ">
                            <div className="row mt-3">
                              <div className="col-2">
                                <img src={icon1} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Hotel</h6> 
                              </div>
                              <div className="col-4">
                                <img src={icon2} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'>Sightseeing</h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon3} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Transfer </h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon4} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Activity </h6> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0'>Starting From:</p>  
                            <h4 className='hostateprice m-0' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='hostatebtn mt-2'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                 </Link>                 
              </div>

              <div className="col-lg-4 col-md-6 mx-auto mb-3">
               <Link to={"/agent/holidaybooking/holidetails"}> 
                 <div class="card card-box" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                        <h4>Goa</h4>
                        <div className="col-lg-12 ">
                            <div className="row mt-3">
                              <div className="col-2">
                                <img src={icon1} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Hotel</h6> 
                              </div>
                              <div className="col-4">
                                <img src={icon2} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'>Sightseeing</h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon3} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Transfer </h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon4} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Activity </h6> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0'>Starting From:</p>  
                            <h4 className='hostateprice m-0' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='hostatebtn mt-2'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                 </Link> 
              </div>
              <div className="col-lg-4 col-md-6 mx-auto mb-3">
               <Link to={"/agent/holidaybooking/holidetails"}> 
                  <div class="card card-box" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                        <h4>Goa</h4>
                        <div className="col-lg-12 ">
                            <div className="row mt-3">
                              <div className="col-2">
                                <img src={icon1} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Hotel</h6> 
                              </div>
                              <div className="col-4">
                                <img src={icon2} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'>Sightseeing</h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon3} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Transfer </h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon4} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Activity </h6> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0'>Starting From:</p>  
                            <h4 className='hostateprice m-0' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='hostatebtn mt-2'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                 </Link> 
              </div>
              <div className="col-lg-4 col-md-6 mx-auto mb-3">
               <Link to={"/agent/holidaybooking/holidetails"}> 
                <div class="card card-box" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                        <h4>Goa</h4>
                        <div className="col-lg-12 ">
                            <div className="row mt-3">
                              <div className="col-2">
                                <img src={icon1} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Hotel</h6> 
                              </div>
                              <div className="col-4">
                                <img src={icon2} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'>Sightseeing</h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon3} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Transfer </h6> 
                              </div>

                              <div className="col-3">
                                <img src={icon4} alt="" width="40px" height="40px" />  
                                <h6 className='mt-2'> Activity </h6> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0'>Starting From:</p>  
                            <h4 className='hostateprice m-0' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='hostatebtn mt-2'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                 </Link> 
              </div>
            </div>
        </div>
    </>
  )
}
