import React from 'react'
import Header from '../../Component/Header'
import Sidebar from '../../Component/Admin/Sidebar'
import { FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { CountryAPI } from '../../Services/Country.Service';
import toast, { Toaster } from 'react-hot-toast';

import {Link, Routes, Route, useNavigate,useParams} from 'react-router-dom';
import {
    Container,
    Card,
    CardContent,
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Input,
    InputLabel,
    MenuItem,
    Select,
    Avatar,
    Divider,
    OutlinedInput,
    Chip,
    Stack,
    Autocomplete,
    TextField
} from "@mui/material";

export default function CreateCountry() {
    const navigate = useNavigate();
    const { slug } = useParams();
    console.log("slug",slug);
    console.info("Create country form")

    const countryValidationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Countrt name is required")
            .max(60, 'Country name is maximum length is 60'),
        sortName: Yup.string()
            .required("Sort name is required")
            .max(5, 'Sort name maximum length is 70'),
        code: Yup.string()
            .required("Code is required")
            .max(5, 'Code maximum length is 70'),
        // flag: Yup.string()
        //     .required("Mobile number is required"),
    });

    const initialValues = {
        "name":"",
        "sortName":"",
        "code":"",
    }
    const nameForm = React.useRef(null)
    // Here store apis data
    const [countryInitialValues, setCountryInitialValues] = React.useState(initialValues);
    const [formTitle, setFormTitle] = React.useState('Add Agent');
    React.useEffect(() => {
        if(slug){
            setFormTitle("Edit Country");
            getData(slug);
        }
    }, [])

    const getData = async (slug) => {
        //console.log("slug",slug);
        CountryAPI.get(slug).then(async (response) => {
            if(response.data.status){
                //console.log("response",response.data.data);
                var result = response.data.data;
                let reInitialValuee = {};
                reInitialValuee.name = result.name;
                reInitialValuee.sortName = result.sortName;
                reInitialValuee.code = result.code;
                console.log('reInitialValuee',reInitialValuee);
                setCountryInitialValues(reInitialValuee);
            }else{
                toast.error(response.data.message);
            }
        }).catch((e) => {
            console.log(e);
            toast.error('Something went wrong');
        });
    };


    const handleOnSubmit = async (values, { resetForm }) => {
        console.log("values",values);
        if(slug){
            const response = await CountryAPI.update(values,slug);
            console.log("response",response.data.status);
            if(response.data.status){
                toast.success('Country updated successfully');
                navigate(`/country`)
            }else{
                toast.error(response.data.message);
            }
        }else{
            const response = await CountryAPI.create(values);
            console.log("response",response.data.status);
            if(response.data.status){
                toast.success('Country added successfully');
                navigate(`/country`)
            }else{
                toast.error(response.data.message);
            }
        }
    };
  return (
    <>  
      <Header />
      <Sidebar />
            <div className="main-content app-content">
                <div className="container-fluid">
                    {/* <!-- PAGE-HEADER --> */}
                    <div className="page-header">
                      <h1 className="page-title my-auto">{formTitle}</h1>
                      <div>
                        <ol className="breadcrumb mb-0">
                          <li className="breadcrumb-item">
                            <Link to={`/`}>Dashboard</Link>
                          </li>
                          <li className="breadcrumb-item">
                            <Link to={`/country/`}>Manage Countries</Link>
                          </li>
                          <li className="breadcrumb-item active" aria-current="page">{formTitle}</li>
                        </ol>
                      </div>
                    </div>
                    {/* <!-- PAGE-HEADER END --> */}

                    {/* <!-- Start:: row-1 --> */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card custom-card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">
                                    Country Information
                                    </div>
                                </div>
                                

                                <Formik
                                    initialValues={countryInitialValues}
                                    validationSchema={countryValidationSchema}
                                    onSubmit={handleOnSubmit}
                                    enableReinitialize={true}
                                >
                                    {({ classes,errors, touched, values, handleChange, setFieldValue }) => (
                                        <Form className="form-set" ref={nameForm}>
                                            <Card className="">
                                                <CardContent className='p-0'>
                                                    <div className="card-body"> 
                                                        <Grid container spacing={4}>
                                                            <Grid item xs={6}>
                                                                <InputLabel>Country Name</InputLabel>
                                                                <TextField
                                                                    type="text"
                                                                    id="name"
                                                                    placeholder="Enter Country Name"
                                                                    fullWidth
                                                                    onChange={handleChange}
                                                                    value={values.name}
                                                                    helperText={touched.name ? errors.name : ""}
                                                                    error={touched.name && Boolean(errors.name)} 
                                                                />
                                                                
                                                            </Grid>

                                                            <Grid item xs={6}>
                                                                <InputLabel>Country Sort Name</InputLabel>
                                                                <TextField
                                                                    id="sortName"
                                                                    type="text"
                                                                    placeholder="Enter Sort Name"
                                                                    fullWidth
                                                                    onChange={handleChange}
                                                                    value={values.sortName}
                                                                    helperText={touched.sortName ? errors.sortName : ""}
                                                                    error={touched.sortName && Boolean(errors.sortName)}
                                                                />
                                                            </Grid>

                                                            <Grid item xs={6}>
                                                                <InputLabel>Country Code</InputLabel>
                                                                <TextField
                                                                    id="code"
                                                                    type="text"
                                                                    placeholder="Enter Country Code"
                                                                    fullWidth
                                                                    onChange={handleChange}
                                                                    value={values.mobileNumber}
                                                                    helperText={touched.mobileNumber ? errors.lastName : ""}
                                                                    error={touched.mobileNumber && Boolean(errors.mobileNumber)}
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                                <button 
                                                                className='btn btn-primary'
                                                                type="submit"
                                                                
                                                            >Submit</button>
                                                        </Grid>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Form>
                                    )}
                                </Formik> 
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}
