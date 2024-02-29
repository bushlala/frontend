import React from "react";
import Layout from "../../../Component/Layout/Agent/AgentLayout";
import Logo from "../../../assets/images/indigo.png"

export default function ManageCart() {
  return (
    <>
      <Layout />
      <div className="main-content app-content">
        <div className="container-fluid">
          <div className="row">
            <div class="col-xl-12">
              <div className="card mt-5">
                <div class="card-body">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <p>
                        Type : <span className="fw-bold">CANCELLATION</span>
                      </p>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <p>
                          Booking ID : <span className="fw-bold">TJS108100872822</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div class="col-xl-12">
              <div className="card ">
                <div class="card-body">
                  <div className="d-flex">
                    <p className="fw-bold me-2">Bengaluru</p>
                    <span className="me-2"><i class="fa-solid fa-arrow-right"></i></span>
                    <p className="fw-bold">Delhi on Feb 29, 2024</p>
                  </div>
                  <div className="card p-3">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="d-flex">
                                <img src={ Logo } />
                                <div className="">
                                    <h6>Indigo</h6>
                                    <span>ING -535</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                          <div className="text-center">
                            <h6>Bengaluru India (Bengaluru Intl Arpt) - BLR</h6>
                            <h6 >16:00, Thu 29-Feb</h6>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <h6 className="text-center mt-3">Non-Stop</h6>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="text-center">
                            <h6>Delhi India (Delhi Indira Gandhi Intl) - DEL</h6>
                            <h6 >17:10, Thu 29-Feb</h6>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="card p-3">
                            <div class="form-check mx-auto">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                   Mr. John shon
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="card p-3">
                            <div class="form-check mx-auto">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                   Mr. John shon
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="card p-3">
                            <div class="form-check mx-auto">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                   Mr. John shon
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="card p-3">
                            <div class="form-check mx-auto">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                   Mr. John shon
                                </label>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card ">
                <div class="card-body">
                  <div className="d-flex">
                    <p className="fw-bold me-2"> Delhi</p>
                    <span className="me-2"><i class="fa-solid fa-arrow-right"></i></span>
                    <p className="fw-bold">Bengaluru on Feb 30, 2024</p>
                  </div>
                  <div className="card p-3">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="d-flex">
                                <img src={ Logo } />
                                <div className="">
                                    <h6>Indigo</h6>
                                    <span>ING -535</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                          <div className="text-center">
                            <h6>Delhi India (Delhi Indira Gandhi Intl) - DEL</h6>
                            <h6 >16:00, Thu 30-Feb</h6>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <h6 className="text-center mt-3">Non-Stop</h6>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="text-center">
                            <h6>Bengaluru India (Bengaluru Intl Arpt) - BLR</h6>
                            <h6 >17:10, Thu 30-Feb</h6>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="card p-3">
                            <div class="form-check mx-auto">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                   Mr. John shon
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="card p-3">
                            <div class="form-check mx-auto">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                   Mr. John shon
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="card p-3">
                            <div class="form-check mx-auto">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                   Mr. John shon
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="card p-3">
                            <div class="form-check mx-auto">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label class="form-check-label" for="flexCheckChecked">
                                   Mr. John shon
                                </label>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card text-danger">
                <div class="card-body">
                  <h6 className="text-danger fw-bold"> Disclaimer</h6>
                  <ul className="text-danger">
                    <li>
                        Due to the unforeseen Corona Virus Outbreak, we are experiencing high volumes of amendments and long waits. Kindly co-operate for any delay in processing.
                    </li>
                    <li>
                      For faster processing and immediate closures please call the airline directly and get the refunds processed.
                    </li>
                  </ul>
                  <h6 className="text-danger fw-bold">Indigo Normal Cancellation:</h6>
                    <ul className="text-danger">
                      <li>
                          Cancel through Portal for Auto-Refund.
                      </li>
                      <li>
                        If Mix Airline Bookings raise amendment for Indigo separately for Auto-Refund.
                      </li>
                    </ul>
                    <div className="text-center">
                      <button className="btn btn-success">Submit</button>
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
