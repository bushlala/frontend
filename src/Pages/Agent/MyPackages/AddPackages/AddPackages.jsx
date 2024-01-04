import React, {useState} from "react";
import Header from '../../../../Component/Layout/Agent/Header/Header'
import Sidebar from '../../../../Component/Layout/Agent/Sidebar/Sidebar'
import banner from '../../../../assets/images/nobannerblue.png'
import {Modal, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './AddPackages.css';
export default function AddPackages() {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const [showModal2, setShowModal2] = useState(false);
    const handleClose2 = () => setShowModal2(false);
    const handleShow2 = () => setShowModal2(true);

    const [showModal3, setShowModal3] = useState(false);
    const handleClose3 = () => setShowModal3(false);
    const handleShow3 = () => setShowModal3(true);
  return (
    <>
      <Header />
      <Sidebar />
        <div className="main-content app-content addpackages">
            <div className="container-fluid">
                {/* <!-- PAGE-HEADER --> */}
                <div className="page-header">
                    <h1 className="page-title my-auto">All Packages - Edit Package</h1>
                    <div>
                      <Link to={'/agent/Packages'}><button className='btn btn-primary'>Back to list</button></Link>
                    </div>
                </div>
                <div className='row'>
                    <div class="col-xl-12">
                         <div className='card custom-card'>
                        <div class="card-body">
                            <div className="card-title">
                                <h6 className=''>Package Details</h6>
                            </div>
                            <hr></hr>
                            <div className='header-box'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <h6>Package Title / Banner / Itinerary / Pricing</h6>
                                    </div>
                                    <div className='col-6'>

                                    {/* Edit Button */}

                                    <Button className="nextButton btn-primary float-end" onClick={handleShow3}>
                                        <i class="fa-solid fa-pen-to-square"></i> Package Price Setting
                                    </Button>
                                    <Modal size="lg" show={showModal3} onHide={handleClose3} centered>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Package Price Setting</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="row">
                                                <div className="col-6">
                                                    <label class="form-label">Per Adult Price</label>
                                                    <div class="input-group">
                                                        <input type="number" class="form-control" id="inlineFormInputGroupUsername" />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <label class="form-label">Per Child Price</label>
                                                    <div class="input-group">
                                                        <input type="number" class="form-control" id="inlineFormInputGroupUsername"  />
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="primary" onClick={handleClose3}>
                                                Save <i class="fa-solid fa-bookmark"></i>
                                            </Button>
                                        </Modal.Footer>
                                    </Modal> 

                                    {/* Edit Button 2 */}

                                    <Button className="nextButton btn-primary float-end me-2" onClick={handleShow2}>
                                    <i class="fa-solid fa-pen-to-square"></i> Edit Title / Banner / Itinerary
                                    </Button>
                                    <Modal size="xl" show={showModal2} onHide={handleClose2} centered>
                                        <Modal.Header closeButton>
                                        <Modal.Title>Edit Title / Banner / Itinerary</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div className="row">
                                                <div className="col-6 mb-4">
                                                    <label class="form-label">Package Title*</label>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                    </div>
                                                </div>
                                                <div className="col-6 mb-4">
                                                    <label class="form-label">Package Banner</label>
                                                    <div class="input-group">
                                                       <input class="form-control" type="file" id="input-image" />
                                                    </div>
                                                </div>
                                                <div className="col-6 mb-4">
                                                    <label class="form-label">Select Location</label>
                                                    <select className='form-select'>
                                                        <option>Select</option>
                                                        <option></option>
                                                        <option></option>
                                                        <option></option>
                                                        <option></option>
                                                    </select>
                                                </div>
                                                <div className="col-6 mb-4">
                                                    <label class="form-label">Package Duration*</label>
                                                    <select className='form-select'>
                                                        <option>0 Nights / 1 Days</option>
                                                        <option>1 Nights / 2 Days</option>
                                                        <option>2 Nights / 3 Days</option>
                                                        <option>3 Nights / 4 Days</option>
                                                        <option>4 Nights / 5 Days</option>
                                                    </select>
                                                </div>
                                                <div className="col-6 mb-4">
                                                    <label class="form-label">Package Theme</label>
                                                    <select className='form-select'>
                                                        <option>Adventure Trips</option>
                                                        <option>Budget Friendly</option>
                                                        <option>Family Vacations</option>
                                                        <option>Group Tours</option>
                                                        <option>Honeymoon Trips</option>
                                                        <option>Indian Holidays</option>
                                                        <option>International Holidays</option>
                                                        <option>Solo Trips</option>
                                                        <option>Weekend Getaways</option>
                                                    </select>
                                                </div>
                                                <div className="col-6 mb-4">
                                                    <label class="form-label">Show On Website</label>
                                                    <select className='form-select'>
                                                        <option>Yes</option>
                                                        <option>No</option>
                                                    </select>
                                                </div>
                                                <div className="col-2 mb-4">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                        <label class="form-check-label" for="flexCheckChecked">
                                                            Flight Icon
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-4">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                        <label class="form-check-label" for="flexCheckChecked">
                                                            Hotel Icon
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-4">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                        <label class="form-check-label" for="flexCheckChecked">
                                                            Sightseeing Icon
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-4">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                        <label class="form-check-label" for="flexCheckChecked">
                                                            Transfer Icon
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-4">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                        <label class="form-check-label" for="flexCheckChecked">
                                                            Activity Icon
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-2 mb-4">
                                                    <div class="form-check">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                        <label class="form-check-label" for="flexCheckChecked">
                                                            Cruise Icon
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-4">
                                                    <label class="form-label">Package Overview</label>
                                                    <div class="input-group">
                                                        <textarea type="text" class="form-control" placeholder="Write something about package"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                        <Button variant="primary" onClick={handleClose2}>
                                            Save <i class="fa-solid fa-bookmark"></i>
                                        </Button>
                                        </Modal.Footer>
                                    </Modal> 
                                    </div>
                                </div> 
                                <hr></hr> 
                                <div className='row p-3'>
                                  <div className='col-9'>
                                      <div className='d-flex'>
                                        <img className='banner-img' src={ banner } />
                                        <div className=''>
                                            <div className="hedding-text" id="">Untitl</div>
                                            <div className="hedding-text2" id="">2 Nights: / 3 Days: - Theme: Adventure Trips</div>
                                        </div>
                                      </div>  
                                  </div>
                                  <div className='col-3'>
                                        <div className='row '>
                                            <div className='col-6'>
                                                <h6 className=''>Per Adult Price:</h6>
                                                <h6 className=''>Per Adult Price:</h6>
                                            </div>
                                            <div className='col-6'>
                                                <h6 className=''>0</h6>
                                                <h6 className=''>0</h6>
                                            </div>
                                        </div>
                                  </div>
                                </div>
                             </div>
                             <div className='mt-5 middle-box'>
                                <div className='text-center'> <h4><i class="fa-solid fa-list-check"></i> Package Itinerary</h4></div>
                             </div>
                             <div className='row'>
                                <div className='col-3'>
                                    <div className='card-box mt-4 p-1'>
                                        <p className='p-1'><i class="fa-solid fa-calendar-days"></i> Itinerary Days</p>
                                    </div>
                                    <div className='card-box-day'>
                                        <h6>Day 1</h6>
                                    </div>
                                </div>
                                <div className='col-9'>
                                     <div className='header-box mt-4'>
                                        <h6 className='mt-2'> <i class="fa-solid fa-calendar-days"></i> Day 1</h6>
                                        <hr></hr>
                                        <div className='d-flex justify-content-center card-box-Write'>
                                        <div className='text-center'>
                                            <div className="hedding-text" id=""><i class="fa-solid fa-file text-primary" style={{ fontSize: '40px' }}></i></div>
                                            <div className="hedding-text2 mt-1" id="">Write About The Day</div>
                                            <div className='mt-1 edit-btn'>
                                                <Button className="nextButton btn-primary" onClick={handleShow}>
                                                    <i class="fa-solid fa-pen-to-square"></i>Edit
                                                </Button>
                                                <Modal size="lg" show={showModal} onHide={handleClose} centered>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>Edit Day 1 Details</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div className="row">
                                                            <div className="col-12 mb-4">
                                                                <label class="form-label">Title*</label>
                                                                <div class="input-group">
                                                                    <input type="text" class="form-control" id="inlineFormInputGroupUsername" />
                                                                </div>
                                                            </div>
                                                            <div className="col-12 mb-4">
                                                                <label class="form-label">Day Details</label>
                                                                <div class="input-group">
                                                                    <textarea type="text" class="form-control"></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 mb-4">
                                                                <label class="form-label">Image Upload</label>
                                                                <div class="input-group">
                                                                    <input class="form-control" type="file" id="input-image" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="primary" onClick={handleClose}>
                                                            Save <i class="fa-solid fa-bookmark"></i>
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
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
            </div>
        </div>
    </>
  )
}
