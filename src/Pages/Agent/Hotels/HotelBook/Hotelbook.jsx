import React from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Header from "../../../../Component/Layout/Agent/Header/Header";
import { Form } from "react-router-dom";
import "./Hotelbook.css";

export default function Hotelbook() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <div className="main-content p-0">
        <div className="container HotelBook">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-8 col-md-8">
                  <h5 className="btitle fw-bold">Review your Booking</h5>
                </div>
                <div className="col-lg-4 col-md-4 bback">
                  <Link to={"/hotel/flight"}>
                    <button type="button" className=" ">
                      {" "}
                      Back to search
                    </button>
                  </Link>
                </div>
              </div>
              <div className="row rounded shadow  mt-4">
                <div className="col-12 Hinform border">
                  <h6 className=" mt-2 mb-2">Hotel Information</h6>
                </div>
                <div className="co-lg-10 col-md-10 pt-4 pb-4">
                  <div className="d-flex">
                     <h5 className="btitle fw-bold me-3">
                     Radition Blue Main Road
                     </h5>
                     <span className="star-icon">
                     <i class="fa-solid fa-star me-1"></i>
                     <i class="fa-solid fa-star me-1"></i>
                     <i class="fa-solid fa-star me-1"></i>
                     <i class="fa-solid fa-star me-1"></i>
                     <i class="fa-solid fa-star"></i>
                     </span>
                  </div>
                  <p>
                     800/2K block near maruti suzuki showroom,igi airport mahipalpur,New Delhi,Delhi,IN 
                  </p>
                </div>
                <div className="co-lg-2 col-md-2 pt-4 pb-4">
                <img src="https://i.travelapi.com/lodging/31000000/30440000/30431000/30430999/w2115h1404x0y2-b7c4620f_z.jpg" alt="" width="75" height="69" />
                </div>
                <div className="col-12 Hclassic p-1 mb-2">
                  <div className="row">
                    <div className="col-12">
                      <h5 className="fw-bold text-danger mt-3">Standard Double Room,1 King Bed,NonSmoking </h5>
                    </div>
                    <div className="co-lg-3 col-md-3">
                      <p className="hcheckin mb-0 mt-1 fs-12">CHECK IN</p>
                      <h6 className="fw-bold mt-1">
                        24 February 2024
                      </h6>
                      <p className="hcheckin mt-1 fs-12">Saturday</p>
                    </div>
                    <div className="col-lg-2 col-md-2 ">
                      <button className="mt-4 rounded-pill btn btn-light fs-12">
                        {" "}
                        1 NIGHT(S)
                      </button>
                    </div>
                    <div className="co-lg-3 bg- col-md-3 ">
                      <p className="hcheckin mb-0 mt-1 fs-12">CHECK OUT</p>
                      <h6 className="fw-bold mt-1">
                        25 February 2024
                      </h6>
                      <p className="hcheckin mt-1 fs-12">Sunday</p>
                    </div>
                    <div className="co-lg-4 bg- col-md-4 d-flex pt-4">
                      <p className="me-1  mt-1">1 Adults</p>
                      <p className="me-1  mt-1">|</p>
                      <p className="me-1  mt-1">0 Childs</p>
                      <p className="me-1  mt-1">|</p>
                      <p className="me-1  mt-1">1 Rooms</p>
                    </div>
                  </div>
                </div>
              </div>

              <form action="">
                <div className="row rounded shadow  mt-4 pb-3">
                  <div className="col-12 Hinform border">
                    <h6 className="mt-2 mb-2">PAX Details</h6>
                  </div>
                  <div className="col-12 Hpaxrom p-1 ">
                    <h6>Room - 1</h6>
                  </div>
                  <div className="col-lg-4 col-md-4 mt-4">
                    <label className="">Title</label>
                    <select
                      class="form-select form-control mt-2"
                      aria-label="Default select example"
                    >
                      <option selected>Select</option>
                      <option value="1">Mr.</option>
                      <option value="2">Mrs</option>
                      <option value="3">Ms.</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-4 mt-4">
                    <label htmlFor="">First Name</label>
                    <input type="text" className="mt-2 form-control" />
                  </div>
                  <div className="col-lg-4 col-md-4 mt-4">
                    <label htmlFor="">Last Name</label>
                    <input type="text" className="mt-2 form-control" />
                  </div>
                </div>

                <div className="row rounded shadow  mt-4 mb-5">
                  <div className="col-12 Hinform border mb-4">
                    <h6 className="mt-2 mb-2">Contact Details</h6>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <label htmlFor="">Email</label>
                    <input type="text" className="mt-2 form-control" />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <label htmlFor="">Phone</label>
                    <input type="text" className="mt-2 form-control" />
                  </div>
                  <div className="col-12 m-3 ">
                    <div class="form-check   ">
                      <input
                        class="form-check-input mb-1"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label ms-1 mb-2"
                        for="flexCheckChecked"
                      >
                        I have a GST number (Optional)
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 mb-3">
                    <label htmlFor="">Company Name</label>
                    <input type="text" className="mt-2 form-control" />
                  </div>
                  <div className="col-lg-4 col-md-4 mb-3">
                    <label htmlFor="">GST No</label>
                    <input type="text" className="mt-2 form-control" />
                  </div>
                  <div className="col-lg-4 col-md-4 mb-3">
                    <label htmlFor="">Email</label>
                    <input type="text" className="mt-2 form-control" />
                  </div>
                  <div className="col-12 Hinform d-flex justify-content-end  border p-3 mt-4">
                    <Link to={"/agent/hotelbooking/payonline"}>
                      <button type="button" className="btn btn-danger">
                        Proceed To Review
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="col-12 Hinform  border p-2">
                      <h6 className="">Fare Summary</h6>
                    </div>
                    <div className="card-body p-3">
                      <div className="col-lg-12 border-bottom d-flex justify-content-between">
                        <p className="mb-2">Room Price</p>
                        <p className=" mb-2">₹1348.52</p>
                      </div>
                      <div className="col-lg-12 border-bottom d-flex justify-content-between">
                        <p className="mb-2 mt-2">Taxes & Fee</p>
                        <p className="mb-2 mt-2">₹192</p>
                      </div>
                      <div className="col-lg-12 border-bottom d-flex justify-content-between">
                        <p className="mb-2 mt-2">Amount to Pay</p>
                        <p className="mb-2 mt-2">₹1541</p>
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
  );
}
