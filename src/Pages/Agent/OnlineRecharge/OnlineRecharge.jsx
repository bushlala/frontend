import React from 'react'
import Layout from '../../../Component/Layout/Agent/AgentLayout'

export default function OnlineRecharge() {
    const style = { marginLeft: '20px' };
  return (
    <>
      <Layout />
        <div className="main-content app-content online-recharge">
            <div className="container-fluid">
                <div className='row'>
                    <div class="col-xl-12">
                        <div className='card mt-4'>
                            <div class="card-body">
                                <h5 className='fw-bold'>Online Recharge</h5>
                            </div>
                            <div className='row' style={ style }>
                                <div className='col-2'>
                                    <div className='card card-box align-items-center p-3'>
                                        <h4>₹5000</h4>
                                        <div class="form-check form-check-lg">
                                            <input class="form-check-input" type="radio" value="" id="flexCheckChecked" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <div className='card card-box align-items-center p-3'>
                                        <h4>₹10000</h4>
                                        <div class="form-check form-check-lg">
                                            <input class="form-check-input" type="radio" value="" id="flexCheckChecked" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <div className='card card-box align-items-center p-3'>
                                        <h4>₹15000</h4>
                                        <div class="form-check form-check-lg">
                                            <input class="form-check-input" type="radio" value="" id="flexCheckChecked" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <div className='card card-box align-items-center p-3'>
                                        <h4>₹20000</h4>
                                        <div class="form-check form-check-lg">
                                            <input class="form-check-input" type="radio" value="" id="flexCheckChecked" />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-2'>
                                    <div className='card card-box align-items-center p-3'>
                                        <label class="form-label">Enter Amount</label>
                                            <div class="input-group">
                                                <input type="number" class="form-control" id="inlineFormInputGroupUsername"  />
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <p className='' style={ style }><button className='btn btn-primary mb-3'>Pay Now</button></p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
