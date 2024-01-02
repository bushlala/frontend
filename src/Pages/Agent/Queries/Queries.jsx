import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../Component/Layout/Agent/Header/Header';
import Sidebar from '../../../Component/Layout/Agent/Sidebar/Sidebar';
import './Queries.css';

export default function Queries() {
  return (
    <>
      <Header />
      <Sidebar />
        <div className="main-content app-content queries">
            <div className="container-fluid">
                <div className="page-header">
                    <h4 className="my-auto mt-4">Queries</h4>
                    <div>
                        <Link to={'/agent/QueriesAdd'}><button className='btn add-btn mt-4'>+ Add New Query</button></Link>
                    </div>
                </div>
                <div className='row'>
                    <div class="col-xl-12">
                        <div class="card custom-card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-3 mb-3">
                                        <label class="form-label">From Date</label>
                                        <input type="date" class="form-control"/>
                                    </div>
                                    <div class="col-md-3 mb-3">
                                        <label class="form-label">To</label>
                                        <input type="date" class="form-control"/>
                                    </div>
                                    <div class="col-md-3 mb-3">
                                        <label class="form-label">Keyword</label>
                                        <input type="search" placeholder="Type a keyword..."  class="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div class="col-xl-12">
                        <div class="card custom-card p-4 ">
                            <div className='row justify-content-center '>
                                <div className='col-2 text-center Qu-box'>
                                    <h4>0</h4>
                                    <p>New</p>  
                                </div>
                                <div className='col-2 text-center Qu-box2'>
                                    <h4>0</h4>
                                    <p>Active</p>
                                </div>
                                <div className='col-2 text-center Qu-box3'>
                                    <h4>0</h4>
                                    <p>No Connect</p>
                                </div>
                                <div className='col-2 text-center Qu-box4'>
                                    <h4>0</h4>
                                    <p>Quotation Sent</p>
                                </div>
                            </div>
                            <div className='row justify-content-center mt-3'>
                                <div className='col-2 text-center Qu-box5'>
                                    <h4>0</h4>
                                    <p>Pro. Confirm</p>  
                                </div>
                                <div className='col-2 text-center Qu-box6'>
                                    <h4>0</h4>
                                    <p>Confirmed</p>
                                </div>
                                <div className='col-2 text-center Qu-box7'>
                                    <h4>0</h4>
                                    <p>Cancelled</p>
                                </div>
                                <div className='col-2 text-center Qu-box8'>
                                    <h4>0</h4>
                                    <p>Lost</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className='row'>
                    <div class="col-xl-12">
                        <div class="card custom-card p-2">
                            <h3 className='text-center'>No Query</h3>
                        </div> 
                    </div> 
                </div>     
            </div>
        </div>
    </>
  )
}
