import React from 'react'
import Header from '../../../Component/Layout/Agent/Header/Header'
import Sidebar from '../../../Component/Layout/Agent/Sidebar/Sidebar'
import { Link } from 'react-router-dom'

export default function CustomerForm() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-content app-content">
            <div className="container-fluid">
                    {/* <!-- PAGE-HEADER --> */}
                    <div className="page-header">
                    <h1 className="page-title my-auto">Add Customer</h1>
                    <div>
                        <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                        <Link to={`/`}>Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">Add Customer</li>
                        </ol>
                    </div>
                    </div>
                    <div className='row'>
                        <div class="col-xl-12">
                            <div class="card custom-card">
                                <div class="card-header justify-content-between">
                                    <div class="card-title">
                                        Form
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">First Name</label>
                                            <input type="text" class="form-control" placeholder="First name"
                                                aria-label="First name" />
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Last Name</label>
                                            <input type="text" class="form-control" placeholder="Last name"
                                                aria-label="Last name" />
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Gender</label>
                                            <input type="text" class="form-control" placeholder="Gender"
                                                 />
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">D.O.B</label>
                                                <input type="date" class="form-control"
                                                aria-label="dateofbirth" />
                                         </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Passport</label>
                                            <input type="text" class="form-control" placeholder="Passport"
                                                 />
                                        </div>
                                        <div class="col-md-6 mb-3">
                                            <label class="form-label">Expriry</label>
                                            <input type="text" class="form-control" placeholder="Expriry"
                                             />
                                        </div>
                                        <div class="col-md-12">
                                            <button type="submit" class="btn btn-primary">Create Customer</button>
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
