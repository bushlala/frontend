import React from 'react'
import Header from '../../../../Component/Layout/Agent/Header/Header'
import Sidebar from '../../../../Component/Layout/Agent/Sidebar/Sidebar'
import './QueriesAdd.css';
export default function QueriesAdd() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content app-content queriesadd">
          <div className="container-fluid mb-3">
            {/* <!-- PAGE-HEADER --> */}
              <div className="page-header">
                  <h1 className="page-title my-auto">Add Query</h1>
              </div>
              <div className='row'>
                  <div class="col-xl-12">
                    <div className='card custom-card'>
                      <div class="card-body">
                          <div className="card-title">
                              <h6 className=''>Customer Details</h6>
                          </div>
                          <hr></hr>
                          <div class="row">
                              <div class="col-md-4 mb-3">
                                  <label class="form-label">Customer Contact Number*</label>
                                    <div class="input-group">
                                        <div class="input-group-text"><i class="fa-solid fa-phone"></i></div>
                                        <input type="text" class="form-control" id="inlineFormInputGroupUsername" />
                                    </div>
                              </div>
                              <div class="col-md-4 mb-3">
                                    <label class="form-label"> Customer E-Mail ID*</label>
                                    <div class="input-group">
                                        <div class="input-group-text"><i class="fa-solid fa-message"></i></div>
                                        <input type="text" class="form-control" id="inlineFormInputGroupUsername" />
                                    </div>
                              </div>
                              <div class="col-md-4 mb-3">
                                    <label class="form-label">Contact Person Name*</label>
                                    <div class="input-group">
                                        <div className=''>
                                            <select className='form-select'>
                                                <option>Mr.</option>
                                                <option>Mrs.</option>
                                                <option>Ms.</option>
                                                <option>Dr.</option>
                                                <option>Prof.</option>
                                            </select>
                                        </div>
                                        <input type="text" class="form-control" id="inlineFormInputGroupUsername" />
                                    </div>
                              </div>
                              <div class="col-md-4 mb-3">
                                  <label class="form-label">Customer Country*</label>
                                      <select className='form-select'>
                                            <option>Select</option>
                                            <option>India</option>
                                      </select>
                              </div>
                              <div class="col-md-4 mb-3">
                                  <label class="form-label">Customer State</label>
                                      <select className='form-select'>
                                            <option>Select</option>
                                            <option>Madhya Pradesh</option>
                                      </select>
                              </div>
                              <div class="col-md-4 mb-3">
                                  <label class="form-label">Customer City</label>
                                      <select className='form-select'>
                                            <option>Select</option>
                                            <option>Indore</option>
                                            <option>Bhopal</option>
                                            <option>Khargone</option>
                                      </select>
                              </div>
                                <div className="card-title mt-4">
                                     <h6 className=''>Customer Details</h6>
                                </div>
                            <hr></hr>
                                <div class="col-md-3 mb-3">
                                  <label class="form-label">From City</label>
                                    <div class="input-group">
                                        <div class="input-group-text"><i class="fa-solid fa-city"></i></div>
                                        <input type="text" class="form-control" id="inlineFormInputGroupUsername" />
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                  <label class="form-label">Travel Location*</label>
                                    <div class="input-group">
                                        <div class="input-group-text"><i class="fa-solid fa-location-dot"></i></div>
                                        <input type="text" class="form-control" id="inlineFormInputGroupUsername" />
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                  <label class="form-label">Start Date*</label>
                                    <div class="input-group">
                                        <input type="date" class="form-control" id="inlineFormInputGroupUsername" />
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                  <label class="form-label">End Date*</label>
                                    <div class="input-group">
                                        <input type="date" class="form-control" id="inlineFormInputGroupUsername" />
                                    </div>
                                </div>
                                <div class="col-md-2 mb-3">
                                  <label class="form-label">Adult(s)*</label>
                                    <div class="input-group">
                                        <div class="input-group-text"><i class="fa-solid fa-person"></i></div>
                                        <input type="number" class="form-control" id="inlineFormInputGroupUsername" />
                                    </div>
                                </div>
                                <div class="col-md-1 mb-3">
                                  <label class="form-label">Child</label>
                                    <div class="input-group">
                                        <input type="number" class="form-control" id="inlineFormInputGroupUsername" />
                                    </div>
                                </div>
                                <div class="col-md-1 mb-3">
                                  <label class="form-label">Infant</label>
                                    <div class="input-group">
                                        <input type="number" class="form-control" id="inlineFormInputGroupUsername" />
                                    </div>
                                </div>
                                <div class="col-md-3 mb-3">
                                  <label class="form-label">Query Source*</label>
                                       <select className='form-select'>
                                            <option></option>
                                       </select>

                                </div>
                                <div class="col-md-2 mb-3">
                                  <label class="form-label">Query Priority*</label>
                                        <select className='form-select'>
                                            <option>General Query</option>
                                            <option>Hot Query</option>
                                        </select>
 
                                </div>
                                <div class="col-md-3 mb-3">
                                  <label class="form-label">Assign To*</label>
                                        <select className='form-select'>
                                            <option>self</option>
                                        </select>
                                </div>
                                <hr className='mt-4'></hr>
                                <div className="card-title mt-3">
                                    <h6 className=''>Requirement Type</h6>
                                </div>
                                <div class="col-md-1 mb-3 mt-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Package
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-1 mb-3 mt-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Flight
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-1 mb-3 mt-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Transfer
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-1 mb-3 mt-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Hotel
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-1 mb-3 mt-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Sightseeing
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-1 mb-3 mt-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label class="form-check-label" for="flexCheckChecked">
                                            Miscellaneous
                                        </label>
                                    </div>
                                </div>
                                <hr></hr>
                                <div class="col-md-12 mb-3">
                                  <label class="form-label">Description</label>
                                    <div class="input-group">
                                        <textarea className='form-control'></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12 mt-2">
                                    <button type="submit" class="btn btn-primary save-btn">Save <i class="fa-solid fa-floppy-disk"></i></button>  
                                    <button type="submit" class="btn cancel-btn">Cancel</button>
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
