import React from 'react'
import {
    Paper,
    Table,
    TableContainer,
    TablePagination,
    Box,
    TextField,
    Button,
    TableBody,
    TableCell,
    TableRow,
    Avatar,
    Stack,
    Tooltip,
} from "@mui/material";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import AgentLayout from '../../../Component/Layout/Agent/AgentLayout';
import { Link } from 'react-router-dom'
import { CustomerService } from '../../../Services/Agent/Customer.Service';
import { RequestPagination } from '../../../Services/RequestPagination';
import { TableHeadComponent } from '../../../Component/Common/TableHeadComponent';

// For Swal
import Swal from 'sweetalert2';

export default function AgentCustomerList() {
    const columns = [
        { id: 'firstName', label: 'First Name', minWidth: 170, sortable: true },
        { id: 'lastName', label: 'Last Name', minWidth: 100, sortable: true },
        { id: 'email', label: 'Email', minWidth: 100, sortable: true },
        { id: 'mobileNumber', label: 'Mobile Number', minWidth: 100, sortable: true },
        { id: 'id', label: 'Action', minWidth: 100, sortable: false },
    ]
    const formTitle = "Customers";
    const [list, setList] = React.useState([]);
    const [request, setRequest] = React.useState(RequestPagination);
    const [totalCount, setTotalCount] = React.useState(0);
    //const [formTitle, setFormTitle] = React.useState('Agent');
    
    React.useEffect(() => {
        getListData(request);
    }, [request])

    const getListData = async (data) => {
        // console.log("data gsdgdfh gdsgdsfhg dfHDFH@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",data);s
        CustomerService.getAll(data).then(async (response) => {
            console.log("data gsdgdfh gdsgdsfhg dfHDFH@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",response.data.re);
            console.log("response",response);
            setList(response?.data?.result);
            setTotalCount(response.data.totalItems)
            
        }).catch((e) => {
            console.log(e);
        });
    };

    // Here change page 
    const handleChangePage = (event, newPage) => {
        request.page = newPage;
        console.log("request",request);
        setRequest(request);
        getListData(request);
    };

    // Here change page size of record
    const handleChangeRowsPerPage = (event) => {
        request.size = event.target.value;
        console.log("request",request);
        setRequest(request);
        getListData(request);
    };

    // Here search method
    const handleSearch = (searchedVal) => {
        request.search = searchedVal;
        getListData(request);
    };

    // Here sorting of column
    const handleSorting = (id) => {
        if (id) {
            request.sortOrder = request.sortOrder === 'ASC' ? 'DESC' : 'ASC';
            request.sortBy = id;
            setRequest(request);
            getListData(request);
        }
    };

    const userDelete = (id) => {
        console.log("id", id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't delete this record!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await CustomerService.delete(id).then((response) => {
                    getListData(request);
                })
                .catch((e) => {
                    console.log(e);
                });
                /*Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )*/
            }
        })
    }

    
  return (
    <>
    <AgentLayout />
    <div className="main-content app-content">
        <div className="container-fluid">
        {/* <!-- PAGE-HEADER --> */}
            <div className="page-header">
                <h1 className="page-title my-auto fw-bold">My {formTitle}</h1>
                <div>
                    <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                    <Link to={`agent/dashboard`}>Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">My {formTitle}</li>
                    </ol>
                </div>
            </div>
            <div className='row'>
                <div class="col-xl-12">
                    <div className='card mt-4'>
                        <div class="card-body">
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="card-title">
                                        <Box sx={{ '& > :not(style)': { width: '200px', float: "left" } }}>
                                            <input id="outlined-basic" className="form-control" placeholder="Search"
                                            value={request.search} onChange={e => { handleSearch(e.target.value); setRequest({ ...request, search: e.target.value }); }} />
                                        </Box>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <Button className='btn btn-primary float-end ' 
                                        // sx={{ fontWeight: 500, fontSize: 12, ml: 2 }} 
                                        //onClick={() => handleClickOpen(0)}
                                        >
                                        <Link to='/agent/customer/add' style={{ color: 'white'}}>+ Add {formTitle}</Link>
                                    </Button>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="card-body mt-3">
                                <div className="table-responsive">
                                    <Table stickyHeader aria-label="sticky table" className="table-block">
                                        <TableHeadComponent
                                            columns={columns}
                                            request={request}
                                            onHandleSorrting={handleSorting}
                                        />
                                        <TableBody>
                                            {
                                                list?.map((row, key) => {
                                                    return (
                                                        <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                                                            {columns.map((column) => {
                                                                const value = row[column.id];
                                                                return (
                                                                    <TableCell key={column.id} align={column.align} style={{ fontSize: "15px" }}>
                                                                        {
                                                                            column.id === 'id'
                                                                                ?
                                                                                <Stack direction="row" spacing={0}>
                                                                                    {/* <Link to={`/agent/edit/${(column.format && typeof value === 'number' ? column.format(value) : value)}`}>
                                                                                        <Avatar
                                                                                            sx={{ bgcolor: "#00bbd9", cursor: 'pointer' }}
                                                                                            className="avatar-left-radius"
                                                                                            variant="square">
                                                                                            <Tooltip title="View Agend">
                                                                                                <VisibilityIcon />
                                                                                            </Tooltip>
                                                                                        </Avatar>
                                                                                    </Link> */}
                                                                                    <Link to={`/agent/customer/edit/${(column.format && typeof value === 'number' ? column.format(value) : value)}`}>
                                                                                        <Avatar
                                                                                            sx={{ bgcolor: "rgb(46 204 113)", cursor: 'pointer' }}
                                                                                            className="avatar-center-radius me-2 rounded"
                                                                                            variant="square">
                                                                                            <Tooltip title="Edit Agent">
                                                                                                <EditIcon sx={{ fontSize: "17px" }} />
                                                                                            </Tooltip>
                                                                                        </Avatar>
                                                                                    </Link>
                                                                                    <Avatar
                                                                                        sx={{ bgcolor: "#e74a25", cursor: 'pointer' }}
                                                                                        variant="square"
                                                                                        className="avatar-right-radius rounded"
                                                                                        onClick={() => userDelete(column.format && typeof value === 'number' ? column.format(value) : value)}
                                                                                    >
                                                                                        <Tooltip title="Delete Agend" >
                                                                                            <DeleteIcon sx={{ fontSize: "17px" }} />
                                                                                        </Tooltip>
                                                                                    </Avatar>
                                                                                </Stack>
                                                                                :
                                                                                column.format && typeof value === 'number' ? column.format(value) : value
                                                                        }
                                                                    </TableCell>
                                                                );
                                                            })}
                                                        </TableRow>
                                                    );
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                    <TablePagination
                                        //className="pagination-block"
                                        rowsPerPageOptions={[5, 10]}
                                        component="div"
                                        count={totalCount}
                                        rowsPerPage={request.size}
                                        page={request.page}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                    />
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
