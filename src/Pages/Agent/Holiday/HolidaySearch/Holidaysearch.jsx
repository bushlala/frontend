import React, {useRef, sliderRef} from 'react'
import { Toaster } from 'react-hot-toast';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Header from '../../../../Component/Layout/Agent/Header/Header';
import './Holidaysearch.css'
import hodliday1 from '../../../../assets/images/holiday1.png'
import hodliday2 from '../../../../assets/images/holiday2.png'
import hodliday3 from '../../../../assets/images/holiday3.png'
import hodliday4 from '../../../../assets/images/holiday4.png'
import hodliday5 from '../../../../assets/images/holiday5.jpg'
import Slider from "react-slick";


export default function Holidaysearch() {

   


    let sliderRef = useRef(null);
    const play = () => {
      sliderRef.slickPlay();
    };
    const pause = () => {
      sliderRef.slickPause();
    };
  
    const settings = {
      dots: true,
      spaceBetween :50,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


  

  return (
    <>
       <Toaster
            position="top-right"
            reverseOrder={false}
        />
        <Header/> 
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

        <div className="container holdiaymain shadow-lg p-3 mt-4">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="row">
                        <div className="col-3">
                            <img src={hodliday1} alt="" width="80px" height="80px" />
                        </div>
                        <div className="col-9">
                            <h5 className='m-0 mt-3'>Travel With Experts</h5>
                            <p className='hcustomer m-0'>10000+ Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="row">
                        <div className="col-3">
                            <img src={hodliday2} alt="" width="80px" height="80px" />
                        </div>
                        <div className="col-9">
                           <h5 className='m-0 mt-3'>Travel Safety Assurance</h5>
                           <p className='hcustomer m-0'>Safe holidays with assured stays, clean cabs & 24x7 support</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="row">
                        <div className="col-3">
                            <img src={hodliday3} alt="" width="80px" height="80px" />
                        </div>
                        <div className="col-9">
                           <h5 className='m-0 mt-3'>Flexible Cancellation</h5>
                           <p className='hcustomer m-0'>Cancel or reschedule your holiday to suit your needs.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="row">
                        <div className="col-3">
                            <img src={hodliday4} alt="" width="80px" height="80px" />
                        </div>
                        <div className="col-9">
                           <h5 className='m-0 mt-3'>Unmatched Pricing</h5>
                           <p className='hcustomer m-0'>Best deals and offers in the industr</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
{/* ---------------------------------------------------------------------------------------------------------- */}

        <div className="container">
          <div className="hodidaysebanner">
              <h1 className='hkeyword text-white d-block'>Give Wings to Your Dreams!</h1>
              <h3 className='text-white d-block'>@trip</h3>
          </div>
        </div>


{/* ----------------------------------------------------------------------------------------------------------- */}
        <div className="container holiday-main mt-5">
            <h2 className='hosliderh mb-4'>Adventure Trips</h2>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                <Link to={"/agent/holidaybooking/holidetails"}>
                  <div class="card" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                        <div className='d-flex d-flex justify-content-between'>
                            <h5 className='hoheading'>Andaman 5N 6D</h5>  
                            <button className='hveiow'>5 N / 6 D</button>
                        </div>
                        <hr />

                        <div className='d-flex d-flex justify-content-between'>
                            <p>Starting From:</p>  
                            <h4 >₹ 1580/-</h4>
                        </div>
                    </div>
                  </div>
                  </Link>
                </div>

                <div className="col-lg-3 col-md-6">
                    <Link to={"/agent/holidaybooking/holidetails"}>
                        <div class="card" >
                            <img src={hodliday5} class="card-img-top" alt="..."/>
                            <div class="card-body ">
                                <div className='d-flex d-flex justify-content-between'>
                                    <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                    <button className='hveiow'>5 N / 6 D</button>
                                </div>
                                <hr />

                                <div className='d-flex d-flex justify-content-between'>
                                    <p>Starting From:</p>  
                                    <h4 className='hopriceing'>₹ 1580/-</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-3 col-md-6">
                  <Link to={"/agent/holidaybooking/holidetails"}>
                    <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 className='hopriceing'>₹ 1580/-</h4>
                            </div>
                        </div>
                        </div>
                    </Link>
                </div>

                <div className="col-lg-3 col-md-6">
                  <Link to={"/agent/holidaybooking/holidetails"}>
                    <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'> Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 className='hopriceing'>₹ 1580/-</h4>
                            </div>
                       </div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>


        {/* ---------------------------------------------------------------------------------------------------- */}

        <div className="container holiday-main">
            <div className="slider-container">        
                <h2 className='hosliderh mb-4 mt-4'>Budget Friendly</h2>
                <Slider className='' ref={slider => (sliderRef = slider)} {...settings}>
                    <div className=''>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                        <div class="card" >
                            <img src={hodliday5} class="card-img-top" alt="..."/>
                            <div class="card-body ">
                                <div className='d-flex d-flex justify-content-between'>
                                    <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                    <button className='hveiow'>5 N / 6 D</button>
                                </div>
                                <hr />

                                <div className='d-flex d-flex justify-content-between'>
                                    <p>Starting From:</p>  
                                    <h4 >₹ 1580/-</h4>
                                </div>
                            </div>
                        </div>
                      </Link>
                    </div>
                    <div className='' >
                        <Link to={"/agent/holidaybooking/holidetails"}>
                          <div class="card" >
                            <img src={hodliday5} class="card-img-top" alt="..."/>
                            <div class="card-body ">
                                <div className='d-flex d-flex justify-content-between'>
                                    <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                    <button className='hveiow'>5 N / 6 D</button>
                                </div>
                                <hr />

                                <div className='d-flex d-flex justify-content-between'>
                                    <p>Starting From:</p>  
                                    <h4 >₹ 1580/-</h4>
                                </div>
                            </div>
                           </div>
                         </Link>  
                        </div>
                    <div className=''>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                        <div class="card" >
                         <img src={hodliday5} class="card-img-top" alt="..."/>
                         <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                      </Link>  
                    </div>
                    <div className='' >
                      <Link to={"/agent/holidaybooking/holidetails"}>
                        <div class="card" >
                         <img src={hodliday5} class="card-img-top" alt="..."/>
                         <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                      </Link>  
                    </div>
                    <div className=''>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                        <div class="card" >
                          <img src={hodliday5} class="card-img-top" alt="..."/>
                          <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                       </Link> 
                    </div>
                    <div className='' >
                      <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card" >
                         <img src={hodliday5} class="card-img-top" alt="..."/>
                         <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                         </div>
                       </Link> 
                    </div>
                </Slider>
                
                </div>
            </div>
     
      {/* ---------------------------------------------------------------------------------------------------- */}

      <div className="container holiday-main">
            <div className="slider-container">        
                <h2 className='hosliderh mb-4 mt-4'>Family Vacations</h2>
                <Slider className='' ref={slider => (sliderRef = slider)} {...settings}>
                    <div className=''>
                     <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card" >
                          <img src={hodliday5} class="card-img-top" alt="..."/>
                          <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                          </div>
                        </div>
                      </Link> 
                    </div>
                    <div className='' >
                      <Link to={"/agent/holidaybooking/holidetails"}>
                        <div class="card" >
                          <img src={hodliday5} class="card-img-top" alt="..."/>
                            <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                          </div>
                        </div>
                      </Link> 
                    </div>
                    <div className=''>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card" >
                         <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                          </div>
                        </div>
                       </Link>
                    </div>
                    <div className='' >
                     <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card" >
                          <img src={hodliday5} class="card-img-top" alt="..."/>
                          <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                       </Link> 
                    </div>
                    <div className=''>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card" >
                         <img src={hodliday5} class="card-img-top" alt="..."/>
                         <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                          </div>
                         </div>
                      </Link>
                    </div>
                    <div className='' >
                      <Link to={"/agent/holidaybooking/holidetails"}>
                        <div class="card" >
                          <img src={hodliday5} class="card-img-top" alt="..."/>
                          <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                          </div>
                        </div>
                        </Link>
                    </div>
                </Slider>
                
                </div>
            </div>


    {/* ---------------------------------------------------------------------------------------------------- */}

      <div className="container holiday-main">
            <div className="slider-container">        
                <h2 className='hosliderh mb-4 mt-4'>Group Tours</h2>
                <Slider className='' ref={slider => (sliderRef = slider)} {...settings}>
                    <div className=''>
                     <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                       </Link>
                    </div>
                    <div className='' >
                     <Link to={"/agent/holidaybooking/holidetails"}>
                      <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                       </Link>
                    </div>
                    <div className=''>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                      </Link>
                    </div>
                    <div className='' >
                     <Link to={"/agent/holidaybooking/holidetails"}>
                      <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                       </Link>
                    </div>
                    <div className=''>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                      </Link>
                    </div>
                    <div className='' >
                     <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                </Slider>
                
                </div>
            </div>


  {/* ---------------------------------------------------------------------------------------------------- */}

      <div className="container holiday-main">
            <div className="slider-container">        
                <h2 className='hosliderh mb-4 mt-4'>Honeymoon Trips</h2>
                <Slider className='' ref={slider => (sliderRef = slider)} {...settings}>
                    <div className=''>
                     <Link to={"/agent/holidaybooking/holidetails"}>
                      <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                      </Link>
                    </div>
                    <div className='' >
                     <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                      </Link>
                    </div>
                    <div className=''>
                     <Link to={"/agent/holidaybooking/holidetails"}> 
                      <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                      </Link>
                    </div>
                    <div className='' >
                     <Link to={"/agent/holidaybooking/holidetails"}> 
                        <div class="card" >
                            <img src={hodliday5} class="card-img-top" alt="..."/>
                            <div class="card-body ">
                                <div className='d-flex d-flex justify-content-between'>
                                    <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                    <button className='hveiow'>5 N / 6 D</button>
                                </div>
                                <hr />

                                <div className='d-flex d-flex justify-content-between'>
                                    <p>Starting From:</p>  
                                    <h4 >₹ 1580/-</h4>
                                </div>
                            </div>
                         </div>
                      </Link>
                    </div>
                    <div className=''>
                     <Link to={"/agent/holidaybooking/holidetails"}> 
                       <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                          </div>
                        </div>
                       </Link>
                    </div>
                    <div className='' >
                      <Link to={"/agent/holidaybooking/holidetails"}> 
                        <div class="card" >
                          <img src={hodliday5} class="card-img-top" alt="..."/>
                          <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                      </Link>
                    </div>
                </Slider>
                
                </div>
            </div>


     {/* ---------------------------------------------------------------------------------------------------- */}

     <div className="container holiday-main">
            <div className="slider-container">        
                <h2 className='hosliderh mb-4 mt-4'>Indian Holidays</h2>
                <Slider className='' ref={slider => (sliderRef = slider)} {...settings}>
                    <div className=''>
                     <Link to={"/agent/holidaybooking/holidetails"}> 
                       <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className='' >
                      <Link to={"/agent/holidaybooking/holidetails"}> 
                        <div class="card" >
                         <img src={hodliday5} class="card-img-top" alt="..."/>
                         <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                       </Link>
                    </div>
                    <div className=''>
                      <Link to={"/agent/holidaybooking/holidetails"}> 
                       <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                       </Link>
                    </div>
                    <div className='' >
                    <Link to={"/agent/holidaybooking/holidetails"}> 
                       <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                      </Link>
                    </div>
                    <div className=''>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card" >
                         <img src={hodliday5} class="card-img-top" alt="..."/>
                         <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                       </Link>
                    </div>
                    <div className='' >
                      <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card" >
                         <img src={hodliday5} class="card-img-top" alt="..."/>
                         <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                      </Link>
                    </div>
                </Slider>
                </div>
            </div>


  {/* ---------------------------------------------------------------------------------------------------- */}

  <div className="container holiday-main">
            <div className="slider-container">        
                <h2 className='hosliderh mb-4 mt-4'>International Holidays</h2>
                <Slider className='' ref={slider => (sliderRef = slider)} {...settings}>
                    <div className=''>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card" >
                         <img src={hodliday5} class="card-img-top" alt="..."/>
                         <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                          </div>
                        </div>
                       </Link>
                    </div>
                    <div className='' >
                     <Link to={"/agent/holidaybooking/holidetails"}>
                       <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                      </Link>
                    </div>
                    <div className=''>
                      <Link to={"/agent/holidaybooking/holidetails"}>
                        <div class="card" >
                          <img src={hodliday5} class="card-img-top" alt="..."/>
                          <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className='' >
                     <Link to={"/agent/holidaybooking/holidetails"}>
                      <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                      </Link>
                    </div>
                    <div className=''>
                     <Link to={"/agent/holidaybooking/holidetails"}>
                      <div class="card" >
                        <img src={hodliday5} class="card-img-top" alt="..."/>
                        <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                         </div>
                        </div>
                      </Link>
                    </div>
                    <div className='' >
                      <Link to={"/agent/holidaybooking/holidetails"}>
                        <div class="card" >
                         <img src={hodliday5} class="card-img-top" alt="..."/>
                          <div class="card-body ">
                            <div className='d-flex d-flex justify-content-between'>
                                <h5 className='hoheading'>Andaman 5N 6D</h5>  
                                <button className='hveiow'>5 N / 6 D</button>
                            </div>
                            <hr />

                            <div className='d-flex d-flex justify-content-between'>
                                <p>Starting From:</p>  
                                <h4 >₹ 1580/-</h4>
                            </div>
                          </div>
                          </div>
                        </Link>
                    </div>
                </Slider>
                
                </div>
            </div>

 {/* -------------------------------------------------------------------------------------------------------------------------- */}

 <div className="container holiday-main mt-5">
            <h2 className='hosliderh mb-4 mt-5'>Weekend Getaways</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                 <Link to={"/agent/holidaybooking/holidetails"}>
                   <div class="card" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                        <div className='d-flex d-flex justify-content-between'>
                            <h5 className='hoheading'>Andaman 5N 6D</h5>  
                            <button className='hveiow'>5 N / 6 D</button>
                        </div>
                        <hr />

                        <div className='d-flex d-flex justify-content-between'>
                            <p>Starting From:</p>  
                            <h4 >₹ 1580/-</h4>
                        </div>
                    </div>
                    </div>
                   </Link>
                </div>

                <div className="col-lg-4 col-md-6">
                 <Link to={"/agent/holidaybooking/holidetails"}>
                  <div  div class="card" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                        <div className='d-flex d-flex justify-content-between'>
                            <h5 className='hoheading'>Andaman 5N 6D</h5>  
                            <button className='hveiow'>5 N / 6 D</button>
                        </div>
                        <hr />

                        <div className='d-flex d-flex justify-content-between'>
                            <p>Starting From:</p>  
                            <h4 className='hopriceing'>₹ 1580/-</h4>
                        </div>
                     </div>
                    </div>
                  </Link>
                </div>

                <div className="col-lg-4 col-md-6">
                 <Link to={"/agent/holidaybooking/holidetails"}>
                   <div class="card" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body ">
                        <div className='d-flex d-flex justify-content-between'>
                            <h5 className='hoheading'>Andaman 5N 6D</h5>  
                            <button className='hveiow'>5 N / 6 D</button>
                        </div>
                        <hr />

                        <div className='d-flex d-flex justify-content-between'>
                            <p>Starting From:</p>  
                            <h4 className='hopriceing'>₹ 1580/-</h4>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>  
            </div>
        </div>
{/* ---------------------------------------------------------------------------------------------------------- */}

        <div className="container">
          <div className="hodidaysebanner">
              <h1 className='hkeyword text-white d-block'>Give Wings to Your Dreams!</h1>
              <h3 className='text-white d-block'>@trip</h3>
          </div>
        </div>


{/* ----------------------------------------------------------------------------------------------------------- */}

{/* ----------------------------------------------------------------------------------------------------------- */}
<div className="container holiday-main mt-5 mb-5">
            <h2 className='hosliderh mb-4 text-center'>Top Destination Packages</h2>
            <div className="row">
                <div className="col-lg-3 col-md-6">
                <Link to={"/agent/holidaybooking/holidaystates"}>
                   <div class="card p-3" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body pb-0">
                       <h3 className='hosliderh text-center text-dark'>Andaman</h3>
                       <p className='text-center mb-0'>View packages from <span className='hopriceing'>Jordan</span></p>
                      
                    </div>
                    </div>
                  </Link>
                </div>

                <div className="col-lg-3 col-md-6">
                   <div class="card p-3" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body pb-0">
                       <h3 className='hosliderh text-center text-dark'>Indonesia</h3>
                       <p className='text-center mb-0'>View packages from <span className='hopriceing'>Indonesia</span></p>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                   <div class="card p-3" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body pb-0">
                       <h3 className='hosliderh text-center text-dark'>Delhi</h3>
                       <p className='text-center  mb-0'>View packages from <span className='hopriceing'>Delhi</span></p>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                   <div class="card p-3" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body pb-0">
                       <h3 className='hosliderh text-center text-dark'>Europe</h3>
                       <p className='text-center mb-0'>View packages from <span className='hopriceing'>Europe</span></p>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                   <div class="card p-3" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body pb-0">
                       <h3 className='hosliderh text-center text-dark'>Andaman</h3>
                       <p className='text-center mb-0'>View packages from <span className='hopriceing'>Jordan</span></p>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                   <div class="card p-3" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body pb-0">
                       <h3 className='hosliderh text-center text-dark'>Indonesia</h3>
                       <p className='text-center mb-0'>View packages from <span className='hopriceing'>Indonesia</span></p>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                   <div class="card p-3" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body pb-0">
                       <h3 className='hosliderh text-center text-dark'>Delhi</h3>
                       <p className='text-center mb-0'>View packages from <span className='hopriceing'>Delhi</span></p>
                    </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                   <div class="card p-3" >
                    <img src={hodliday5} class="card-img-top" alt="..."/>
                    <div class="card-body  pb-0">
                       <h3 className='hosliderh text-center text-dark'>Europe</h3>
                       <p className='text-center mb-0'>View packages from <span className='hopriceing'>Europe</span></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>


        {/* ---------------------------------------------------------------------------------------------------- */}
        
    </>
  )
}
