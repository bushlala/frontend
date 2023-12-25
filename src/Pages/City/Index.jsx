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
import Header from '../../Component/Header'
import Sidebar from '../../Component/Admin/Sidebar'
import { Link } from 'react-router-dom'
import { CityAPI } from '../../Services/City.Service';
import { RequestPagination } from "../../Services/RequestPagination"
import { TableHeadComponent } from '../../Component/Common/TableHeadComponent';
// For Swal
import Swal from 'sweetalert2';

export default function CityList() {
    const columns = [
        { id: 'code', label: 'Country Name', minWidth: 100, sortable: true },
        { id: 'code', label: 'State Name', minWidth: 100, sortable: true },
        { id: 'name', label: 'City Name', minWidth: 170, sortable: true },
        { id: 'sortName', label: 'City Sort Name', minWidth: 100, sortable: true },
        { id: 'id', label: 'Action', minWidth: 100, sortable: false },
    ]
    const formTitle = "City";
    const [list, setList] = React.useState([]);
    const [request, setRequest] = React.useState(RequestPagination);
    const [totalCount, setTotalCount] = React.useState(0);
    //const [formTitle, setFormTitle] = React.useState('Country');
    
    React.useEffect(() => {
        getListData(request);
    }, [request])

    const getListData = async (data) => {
        CityAPI.getAll(data).then(async (response) => {
            //console.log("response",response);
            setList(response.data.rows);
            setTotalCount(response.data.count)
            
        }).catch((e) => {
            console.log(e);
        });
    };

    // Here change page 
    const handleChangePage = (event, newPage) => {
        request.page = newPage;
        //console.log("request",request);
        setRequest(request);
        getListData(request);
    };

    // Here change page size of record
    const handleChangeRowsPerPage = (event) => {
        request.size = event.target.value;
        //console.log("request",request);
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
                await CityAPI.delete(id).then((response) => {
                    getListData(request);
                })
                .catch((e) => {
                    console.log(e);
                });
            }
        })
    }

    
  return (
    <>
       <Header />
       <Sidebar />
       <div className="main-content app-content">
            <div className="container-fluid">
                {/* <!-- PAGE-HEADER --> */}
                <div className="page-header">
                  <h1 className="page-title my-auto">{formTitle} List</h1>
                  <div>
                    <ol className="breadcrumb mb-0">
                      <li className="breadcrumb-item">
                      <Link to={`/`}>Dashboard</Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">{formTitle}</li>
                    </ol>
                  </div>
                </div>
                {/* <!-- PAGE-HEADER END --> */}
                <Paper sx={{ width: '100%', overflow: 'hidden', fontSize: "20px" }}>
                    <Box sx={{ '& > :not(style)': { m: 1, width: '200px', float: "left" } }}>
                        <TextField id="outlined-basic" className="table-search-input" variant="outlined" placeholder="Search"
                            value={request.search} onChange={e => { handleSearch(e.target.value); setRequest({ ...request, search: e.target.value }); }} />
                    </Box>

                    <Box sx={{ '& > :not(style)': { m: 1, float: "right" } }}>
                        <Button variant="contained" color="success" size="large" 
                        sx={{ fontWeight: 500, fontSize: 12, ml: 2 }} 
                        //onClick={() => handleClickOpen(0)}
                        >
                            <Link to='/city/add' style={{ color: 'white'}}>+ Add {formTitle}</Link>
                        </Button>
                    </Box>
            
                    <TableContainer sx={{ maxHeight: 440 }} className="table-container-block">
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
                                                                                <Tooltip title={`View ${formTitle}`}>
                                                                                    <VisibilityIcon />
                                                                                </Tooltip>
                                                                            </Avatar>
                                                                        </Link> */}
                                                                        

                                                                        <Link to={`/city/edit/${(column.format && typeof value === 'number' ? column.format(value) : value)}`} >
                                                                            <Avatar
                                                                                sx={{ bgcolor: "rgb(46 204 113)", cursor: 'pointer' }}
                                                                                className="avatar-center-radius"
                                                                                variant="square">
                                                                                <Tooltip title={`Edit ${formTitle}`}>
                                                                                    <EditIcon sx={{ fontSize: "17px" }} />
                                                                                </Tooltip>
                                                                            </Avatar>
                                                                        </Link>

                                                                        <Avatar
                                                                            sx={{ bgcolor: "#e74a25", cursor: 'pointer' }}
                                                                            variant="square"
                                                                            className="avatar-right-radius"
                                                                            onClick={() => userDelete(column.format && typeof value === 'number' ? column.format(value) : value)}
                                                                            >
                                                                            <Tooltip title={`Delete ${formTitle}`} >
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
                    </TableContainer>

                    <TablePagination
                        //className="pagination-block"
                        rowsPerPageOptions={[2, 5, 10]}
                        component="div"
                        count={totalCount}
                        rowsPerPage={request.size}
                        page={request.page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
                        
            </div>
        </div>

    </>
  )
}
