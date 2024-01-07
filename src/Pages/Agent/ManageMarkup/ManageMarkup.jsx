import React from 'react'
import Layout from '../../../Component/Layout/Agent/AgentLayout'


export default function ManageMarkup() {
  return (
    <>
      <Layout />
      <div className="main-content app-content">
            <div className="container-fluid">
                <div className='row'>
                     <div class="col-xl-12">
                     <div className='card mt-5'>
                        <div class="card-body">
                           <div className='header-title'>
                            <h4 className='fw-bold'>Manage Markup</h4>
                           </div>
                           <div className='row w-50 mt-5'>
                              <div className='col-3'>
                                <p className='fs-15'>Domestic Flight Markup</p>
                              </div>
                              <div className='col-5'>
                                <input type='text' className='form-control' />
                              </div>
                              <div className='col-1'>
                                <p className='fs-15'>Type</p>
                              </div>
                              <div className='col-2'>
                                <select className='form-select'>
                                    <option>RS</option>
                                    <option>%</option>
                                </select>
                              </div>
                           </div>
                           <hr className='w-50'></hr>
                           <div className='row w-50'>
                              <div className='col-3'>
                                <p className='fs-15'>International Flight Markup</p>
                              </div>
                              <div className='col-5'>
                                <input type='text' className='form-control' />
                              </div>
                              <div className='col-1'>
                                <p className='fs-15'>Type</p>
                              </div>
                              <div className='col-2'>
                                <select className='form-select'>
                                    <option>RS</option>
                                    <option>%</option>
                                </select>
                              </div>
                           </div>
                           <hr className='w-50'></hr>
                           <div className='row w-50'>
                              <div className='col-3'>
                                <p className='fs-15'>Bus Markup</p>
                              </div>
                              <div className='col-5'>
                                <input type='text' className='form-control' />
                              </div>
                              <div className='col-1'>
                                <p className='fs-15'>Type</p>
                              </div>
                              <div className='col-2'>
                                <select className='form-select'>
                                    <option>RS</option>
                                    <option>%</option>
                                </select>
                              </div>
                           </div>
                           <hr className='w-50'></hr>
                           <div className='row w-50'>
                              <div className='col-3'>
                                <p className='fs-15'>Domestic Hotel Markup</p>
                              </div>
                              <div className='col-5'>
                                <input type='text' className='form-control' />
                              </div>
                              <div className='col-1'>
                                <p className='fs-15'>Type</p>
                              </div>
                              <div className='col-2'>
                                <select className='form-select'>
                                    <option>RS</option>
                                    <option>%</option>
                                </select>
                              </div>
                           </div>
                           <hr className='w-50'></hr>
                           <div className='row w-50'>
                              <div className='col-3'>
                                <p className='fs-15'>International Hotel Markup</p>
                              </div>
                              <div className='col-5'>
                                <input type='text' className='form-control' />
                              </div>
                              <div className='col-1'>
                                <p className='fs-15'>Type</p>
                              </div>
                              <div className='col-2'>
                                <select className='form-select'>
                                    <option>RS</option>
                                    <option>%</option>
                                </select>
                              </div>
                           </div>
                           <hr className='w-50'></hr>
                            <div className='row w-50 '>
                              <p className='text-center'><button className='btn btn-primary'>Update Markup</button></p>
                            </div>
                          <hr className='w-50'></hr> 
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
