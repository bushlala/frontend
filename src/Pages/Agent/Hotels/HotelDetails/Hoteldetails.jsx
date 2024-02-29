import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import Header from "../../../../Component/Layout/Agent/Header/Header";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Hoteldetails.css";
export default function Hoteldetails() {
  const [showModal3, setShowModal3] = useState(false);
  const handleClose3 = () => setShowModal3(false);
  const handleShow3 = () => setShowModal3(true);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <div className="main-content p-0">
        <div className="container-fluid hotelbt-bar p-2 bg-secondary text-white">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="mt-4">Home - Delhi,NCR, India Hotels (217)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container hoteldetails">
          <div className="row mt-5">
            <div className="col-lg-8 col-md-8">
              <div className="d-flex">
                <h4 className="me-3 fw-bold">Airport Hotel J P Palace</h4>
                <span className="star-icon mt-1">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </span>
              </div>
              <p>
                <i class="fa-solid fa-location-dot me-1"></i>800/2K block near
                maruti suzuki showroom,igi airport mahipalpur,New Delhi,Delhi,IN
              </p>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card p-2">
                <div className="row">
                  <div className="col-8">
                    <p className="m-0 text-end para">Start From</p>
                    <p className="m-0 text-end para">For 1 Guest & 1 nights </p>
                  </div>
                  <div className="col-4">
                    <h4 className="text-danger mt-2 fw-bold">
                      <i class="fa-solid fa-indian-rupee-sign"></i> 1536
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row shadow p-2">
            <div className="col-lg-6 col-md-6">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://img.freepik.com/free-photo/pattern-with-watercolor-flowers-vintage_1268-29266.jpg?w=1060&t=st=1708677322~exp=1708677922~hmac=71fb5430b2a102fe1951171031f8b55d0968a46c88c9bfff71c695240a9eeba8"
                      class="d-block w-100"
                      alt="..."
                      height="400px"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://img.freepik.com/free-photo/pattern-with-watercolor-flowers-vintage_1268-29266.jpg?w=1060&t=st=1708677322~exp=1708677922~hmac=71fb5430b2a102fe1951171031f8b55d0968a46c88c9bfff71c695240a9eeba8"
                      class="d-block w-100"
                      alt="..."
                      height="400px"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://img.freepik.com/free-photo/pattern-with-watercolor-flowers-vintage_1268-29266.jpg?w=1060&t=st=1708677322~exp=1708677922~hmac=71fb5430b2a102fe1951171031f8b55d0968a46c88c9bfff71c695240a9eeba8"
                      class="d-block w-100"
                      alt="..."
                      height="400px"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="row ">
                <div className="col-lg-6 col-md-6 mb-4">
                  <img
                    src="https://img.freepik.com/free-photo/pattern-with-watercolor-flowers-vintage_1268-29266.jpg?w=1060&t=st=1708677322~exp=1708677922~hmac=71fb5430b2a102fe1951171031f8b55d0968a46c88c9bfff71c695240a9eeba8"
                    alt=""
                    width="100%"
                    height="188px"
                  />
                </div>
                <div className="col-lg-6 col-md-6 mb-4">
                  <img
                    src="https://img.freepik.com/free-photo/pattern-with-watercolor-flowers-vintage_1268-29266.jpg?w=1060&t=st=1708677322~exp=1708677922~hmac=71fb5430b2a102fe1951171031f8b55d0968a46c88c9bfff71c695240a9eeba8"
                    alt=""
                    width="100%"
                    height="188px"
                  />
                </div>
                <div className="col-lg-6 col-md-67">
                  <img
                    src="https://img.freepik.com/free-photo/pattern-with-watercolor-flowers-vintage_1268-29266.jpg?w=1060&t=st=1708677322~exp=1708677922~hmac=71fb5430b2a102fe1951171031f8b55d0968a46c88c9bfff71c695240a9eeba8"
                    alt=""
                    width="100%"
                    height="188px"
                  />
                </div>
                <div className="col-lg-6 col-md-6 ">
                  <img
                    src="https://img.freepik.com/free-photo/pattern-with-watercolor-flowers-vintage_1268-29266.jpg?w=1060&t=st=1708677322~exp=1708677922~hmac=71fb5430b2a102fe1951171031f8b55d0968a46c88c9bfff71c695240a9eeba8"
                    alt=""
                    width="100%"
                    height="188px"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row p-3 shadow mt-5">
            <div className="col-12">
                <div className="d-flex">
                    <h5 className="fw-bold me-1">
                        Airport Hotel J P Palace
                    </h5>
                    <h5 className="text-danger fw-bold">Details</h5>
                </div>
                <div className="mt-4">
                    <p className="fw-bold">
                        general: 
                    </p>
                    <p> Take in the views from a rooftop terrace and a garden and make use of amenities such as complimentary wireless internet access. Additional features at this hotel include concierge services and a reception hall.Grab a..<button className="btn btn-outline-danger mt-1 readmorebtn">Read more</button></p>
                </div>
            </div>
            <hr></hr>
            <div className="col-12">
                <h5 className="fw-bold text-danger">
                    Hotel Policy
                </h5>
                <p>CheckIn Time-Begin: 12:00 PM | CheckIn Time-End: 11:00 AM|CheckOut Time: 12:00 PM|CheckIn Instructions: </p>
                <ul>
                    <li>Extra-person charges may apply and vary depending on property policy</li>
                    <li>Government-issued photo identification and a credit card, d... <button className="btn btn-outline-danger mt-1 readmorebtn">Read more</button></li>
                </ul>
            </div>
            <hr></hr>
            <div className="col-12">
                <div className="d-flex">
                     <h5 className="fw-bold me-1">
                        Airport Hotel J P Palace
                    </h5>
                    <h5 className="text-danger fw-bold">Amenities</h5>
                </div>
              <div className="row mt-3">
                <div className="col-lg-3 col-md-6 ">
                  <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-user fs-5 mt-2"></i>
                    <p className="mt-1">24 hour front desk</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                  <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-snowflake fs-5 mt-2"></i>
                    <p className="mt-1">AC</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-martini-glass-citrus fs-5 mt-2"></i>
                    <p className="mt-1">Bar</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-bath fs-5 mt-2"></i>
                    <p className="mt-1">Bath</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-mug-saucer fs-5 mt-2"></i>
                    <p className="mt-1">Breakfast</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-utensils fs-5 mt-2"></i>
                    <p className="mt-1">Breakfast Buffet</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-table-cells-large fs-5 mt-2"></i>
                    <p className="mt-1">Conference Room</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-bicycle fs-5 mt-2"></i>
                    <p className="mt-1">Fitness</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-message fs-5 mt-2"></i>
                    <p className="mt-1">Massage</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                    <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-outdent fs-5 mt-2"></i>
                    <p className="mt-1">Outdoor Pool(s)</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-car fs-5 mt-2"></i>
                    <p className="mt-1">Parking</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-credit-card fs-5 mt-2"></i>
                    <p className="mt-1">Pay at hotel</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-flag fs-5 mt-2"></i>
                    <p className="mt-1">Pool Bar</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-utensils fs-5 mt-2"></i>
                    <p className="mt-1">Restaurant</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-box fs-5 mt-2"></i>
                    <p className="mt-1">Safe</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-hands-clapping fs-5 mt-2"></i>
                    <p className="mt-1">Spa Service</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-person-swimming fs-5 mt-2"></i>
                    <p className="mt-1">Swimming Pool</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-mug-hot fs-5 mt-2"></i>
                    <p className="mt-1">Tea/Coffee Maker</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-wifi fs-5 mt-2"></i>
                    <p className="mt-1">Wi-Fi</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 ">
                <div className="card safelites d-flex justify-content-center flex-column align-items-center p-1">
                    <i class="fa-solid fa-percent fs-5 mt-2"></i>
                    <p className="mt-1">zero cancellation</p>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="row">
                <h5 className="fw-bold"> Location</h5>
                <div className="col-12 mt-3">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992233.6942053817!2d99.97363989628013!3d13.723724826940103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.                1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sin!4v1708683512766!5m2!1sen!2sin"
                    width="100%"
                    height={600}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row shadow p-4 mt-5">
            <h5 className="fw-bold">Select Room</h5>
            <div className="col-12 table-responsive">
              <table class="table border">
                <thead>
                  <tr>
                    <th scope="col" className="tabel-heading">
                      Room Type
                    </th>
                    <th scope="col" className="tabel-heading">
                      Benefits
                    </th>
                    <th scope="col" className="tabel-heading">
                      Guest & Rooms
                    </th>
                    <th scope="col" className="tabel-heading">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <h5 className="fw-bold"> Deluxe Double bed room</h5>
                      <Button
                        className="cancelpolice btn"
                        onClick={handleShow3}
                      >
                        <i class="fa-regular fa-file-lines"></i> Cancellation
                        Policy
                      </Button>
                      <Modal
                        size="lg"
                        show={showModal3}
                        onHide={handleClose3}
                        centered
                      >
                        <Modal.Header closeButton>
                          <Modal.Title className="fw-bold fs-4">
                            Cancellation Policy
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="col-12 table-responsive">
                            <table class="table table-bordered">
                              <thead>
                                <tr>
                                  <th scope="col" className="fw-bold fs-6">
                                    From Date
                                  </th>
                                  <th scope="col" className="fw-bold fs-6">
                                    To Date
                                  </th>
                                  <th scope="col" className="fw-bold fs-6">
                                    Penalty amount
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th className="fs-6">2024-02-23T00:00:00</th>
                                  <td className="fs-6">2024-02-24T23:59:59</td>
                                  <td className="fs-6">INR 100 %</td>
                                </tr>
                                <tr>
                                  <th colspan="3" className="fs-6">
                                    Super Deluxe Room#^#100.00% of total amount
                                    will be charged, If cancelled between
                                    23-Feb-2024 00:00:00 and 24-Feb-2024
                                    23:59:59.|#!#
                                  </th>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </th>
                    <td>
                      <Button
                        className="hRefundable mt-1 gap-2 d-block"
                        onClick={handleShow3}
                      >
                        <i class="fa-solid fa-check me-2"></i>Refundable
                      </Button>

                      <Button
                        className="cancelpolice btn mt-1"
                        onClick={handleShow3}
                      >
                        <i class="fa-regular fa-file-lines"></i> Cancellation
                        Policy
                      </Button>
                      <h6 className="mt-1 m-0 ">Deluxe Double bed room</h6>
                      <p className="m-0 fs-6">Room Only</p>
                    </td>
                    <td>
                      <h6 className="gap-2">
                        <i class="fa-solid fa-hotel me-1"> </i>Room 1
                      </h6>
                      <h6 className="gap-2">
                        <i class="fa-solid fa-user me-1"></i> Adults 1
                      </h6>
                      <h6 className="gap-2">
                        <i class="fa-solid fa-child-reaching me-1"></i>Child 0
                      </h6>
                    </td>
                    <td>
                      <p className="fs-6"> Total Price</p>
                      <h4 className="fw-bold mt-0 mb-1">
                        <i class="fa-solid fa-indian-rupee-sign"></i> 1536
                      </h4>

                      <Link to={"/agent/hotelbooking/hotelbook"}>
                        <button type="button" className="btn btn-danger">
                          Book Now
                        </button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <h5 className="fw-bold"> Deluxe Double bed room</h5>
                      <Button
                        className="cancelpolice btn"
                        onClick={handleShow3}
                      >
                        <i class="fa-regular fa-file-lines"></i> Cancellation
                        Policy
                      </Button>
                      <Modal
                        size="lg"
                        show={showModal3}
                        onHide={handleClose3}
                        centered
                      >
                        <Modal.Header closeButton>
                          <Modal.Title className="fw-bold fs-4">
                            Cancellation Policy
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="col-12 table-responsive">
                            <table class="table table-bordered">
                              <thead>
                                <tr>
                                  <th scope="col" className="fw-bold fs-6">
                                    From Date
                                  </th>
                                  <th scope="col" className="fw-bold fs-6">
                                    To Date
                                  </th>
                                  <th scope="col" className="fw-bold fs-6">
                                    Penalty amount
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th className="fs-6">2024-02-23T00:00:00</th>
                                  <td className="fs-6">2024-02-24T23:59:59</td>
                                  <td className="fs-6">INR 100 %</td>
                                </tr>
                                <tr>
                                  <th colspan="3" className="fs-6">
                                    Super Deluxe Room#^#100.00% of total amount
                                    will be charged, If cancelled between
                                    23-Feb-2024 00:00:00 and 24-Feb-2024
                                    23:59:59.|#!#
                                  </th>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </th>
                    <td>
                      <Button
                        className="hRefundable mt-1 gap-2 d-block"
                        onClick={handleShow3}
                      >
                        <i class="fa-solid fa-check me-2"></i>Refundable
                      </Button>

                      <Button
                        className="cancelpolice btn mt-1"
                        onClick={handleShow3}
                      >
                        <i class="fa-regular fa-file-lines"></i> Cancellation
                        Policy
                      </Button>
                      <h6 className="mt-1 m-0 ">Deluxe Double bed room</h6>
                      <p className="m-0 fs-6">Room Only</p>
                    </td>
                    <td>
                      <h6 className="gap-2">
                        <i class="fa-solid fa-hotel me-1"> </i>Room 1
                      </h6>
                      <h6 className="gap-2">
                        <i class="fa-solid fa-user me-1"></i> Adults 1
                      </h6>
                      <h6 className="gap-2">
                        <i class="fa-solid fa-child-reaching me-1"></i>Child 0
                      </h6>
                    </td>
                    <td>
                      <p className="fs-6"> Total Price</p>
                      <h4 className="fw-bold mt-0 mb-1">
                        <i class="fa-solid fa-indian-rupee-sign"></i> 1536
                      </h4>

                      <Link to={"/agent/hotelbooking/hotelbook"}>
                        <button type="button" className="btn btn-danger">
                          Book Now
                        </button>
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <h5 className="fw-bold"> Deluxe Double bed room</h5>
                      <Button
                        className="cancelpolice btn"
                        onClick={handleShow3}
                      >
                        <i class="fa-regular fa-file-lines"></i> Cancellation
                        Policy
                      </Button>
                      <Modal
                        size="lg"
                        show={showModal3}
                        onHide={handleClose3}
                        centered
                      >
                        <Modal.Header closeButton>
                          <Modal.Title className="fw-bold fs-4">
                            Cancellation Policy
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="col-12 table-responsive">
                            <table class="table table-bordered">
                              <thead>
                                <tr>
                                  <th scope="col" className="fw-bold fs-6">
                                    From Date
                                  </th>
                                  <th scope="col" className="fw-bold fs-6">
                                    To Date
                                  </th>
                                  <th scope="col" className="fw-bold fs-6">
                                    Penalty amount
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th className="fs-6">2024-02-23T00:00:00</th>
                                  <td className="fs-6">2024-02-24T23:59:59</td>
                                  <td className="fs-6">INR 100 %</td>
                                </tr>
                                <tr>
                                  <th colspan="3" className="fs-6">
                                    Super Deluxe Room#^#100.00% of total amount
                                    will be charged, If cancelled between
                                    23-Feb-2024 00:00:00 and 24-Feb-2024
                                    23:59:59.|#!#
                                  </th>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </th>
                    <td>
                      <Button
                        className="hRefundable mt-1 gap-2 d-block"
                        onClick={handleShow3}
                      >
                        <i class="fa-solid fa-check me-2"></i>Refundable
                      </Button>

                      <Button
                        className="cancelpolice btn mt-1"
                        onClick={handleShow3}
                      >
                        <i class="fa-regular fa-file-lines"></i> Cancellation
                        Policy
                      </Button>
                      <h6 className="mt-1 m-0 ">Deluxe Double bed room</h6>
                      <p className="m-0 fs-6">Room Only</p>
                    </td>
                    <td>
                      <h6 className="gap-2">
                        <i class="fa-solid fa-hotel me-1"> </i>Room 1
                      </h6>
                      <h6 className="gap-2">
                        <i class="fa-solid fa-user me-1"></i> Adults 1
                      </h6>
                      <h6 className="gap-2">
                        <i class="fa-solid fa-child-reaching me-1"></i>Child 0
                      </h6>
                    </td>
                    <td>
                      <p className="fs-6"> Total Price</p>
                      <h4 className="fw-bold mt-0 mb-1">
                        <i class="fa-solid fa-indian-rupee-sign"></i> 1536
                      </h4>

                      <Link to={"/agent/hotelbooking/hotelbook"}>
                        <button type="button" className="btn btn-danger">
                          Book Now
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
