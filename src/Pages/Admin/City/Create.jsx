import React from 'react'
import AdminLayout from '../../../Component/Layout/Admin/AdminLayout';
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { CityAPI } from '../../../Services/City.Service';
import toast from 'react-hot-toast';

import {Link, useNavigate,useParams} from 'react-router-dom';
import {
    Card,
    CardContent,
    Grid,
    InputLabel,
    TextField,
    Button,
    Select,
    MenuItem
} from "@mui/material";

export default function CreateCity() {
    const navigate = useNavigate();
    const { slug } = useParams();
    //console.log("slug",slug);
    //console.info("Create country form")
    const countryValidationSchema = Yup.object().shape({
        countryId: Yup.string()
            .required("Country name is required"),
        stateId: Yup.string()
            .required("Select state"),
        sortName: Yup.string()
            .required("Sort name is required")
            .max(5, 'Sort name maximum length is 70'),
        code: Yup.string()
            .required("Code is required")
            .max(5, 'Code maximum length is 70'),
    });

    const initialValues = {
        "countryId":"",
        "stateId":"",
        "name":"",
        "sortName":"",
    }
    const nameForm = React.useRef(null)
    // Here store apis data
    const [countryInitialValues, setCountryInitialValues] = React.useState(initialValues);
    const [formTitle, setFormTitle] = React.useState('City');
    const [action, setAction] = React.useState('Add');
    React.useEffect(() => {
        if(slug){
            setFormTitle("State");
            setAction("Edit");
            getData(slug);
        }
    }, [slug])

    const getData = async (slug) => {
        //console.log("slug",slug);
        CityAPI.get(slug).then(async (response) => {
            if(response.data.status){
                //console.log("response",response.data.data);
                var result = response.data.data;
                let reInitialValuee = {};
                reInitialValuee.name = result.name;
                reInitialValuee.sortName = result.sortName;
                //console.log('reInitialValuee',reInitialValuee);
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
            const response = await CityAPI.update(values,slug);
            console.log("response",response.data.status);
            if(response.data.status){
                toast.success('City updated successfully');
                navigate(`/country`)
            }else{
                toast.error(response.data.message);
            }
        }else{
            const response = await CityAPI.create(values);
            console.log("response",response.data.status);
            if(response.data.status){
                toast.success('City added successfully');
                navigate(`/country`)
            }else{
                toast.error(response.data.message);
            }
        }
    };
  return (
    <>  
        <AdminLayout />
        <div className="main-content app-content">
            <div className="container-fluid">
                {/* <!-- PAGE-HEADER --> */}
                <div className="page-header">
                    <h1 className="page-title my-auto">{`${action} ${formTitle}`}</h1>
                    <div>
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item">
                        <Link to={`/`}>Dashboard</Link>
                        </li>
                        <li className="breadcrumb-item">
                        <Link to={`/country/`}>{`${formTitle} List`}</Link>
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
                                {formTitle} Information
                                </div>
                            </div>

                            <Formik
                                initialValues={countryInitialValues}
                                validationSchema={countryValidationSchema}
                                onSubmit={handleOnSubmit}
                                enableReinitialize={true}
                            >
                                {({ classes,errors, touched, values, handleChange, setFieldValue }) => (
                                    <Form ref={nameForm}>
                                        <Card>
                                            <CardContent>
                                                    <Grid container spacing={4}>
                                                        <Grid item xs={6}>
                                                            <InputLabel>Country</InputLabel>
                                                            <Select
                                                                id="countryId"
                                                                name="countryId"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.countryId}
                                                                helperText={touched.countryId ? errors.countryId : ""}
                                                                error={touched.countryId && Boolean(errors.countryId)}
                                                            >
                                                                <MenuItem  value="">Select Country</MenuItem>
                                                                <MenuItem  value="1">India</MenuItem>
                                                                <MenuItem  value="2">US</MenuItem>
                                                                {
                                                                    // country && genders.map((value, key) => (
                                                                    //     <MenuItem key={key} value={value.NEMSISCode}>{value.Name}</MenuItem>
                                                                    // ))
                                                                }
                                                            </Select>
                                                        </Grid>

                                                        <Grid item xs={6}>
                                                            <InputLabel>State</InputLabel>
                                                            <Select
                                                                id="stateId"
                                                                name="stateId"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.stateId}
                                                                helperText={touched.stateId ? errors.stateId : ""}
                                                                error={touched.stateId && Boolean(errors.stateId)}
                                                            >
                                                                <MenuItem  value="">Select State</MenuItem>
                                                                <MenuItem  value="1">Mp</MenuItem>
                                                                <MenuItem  value="2">UP</MenuItem>
                                                                {
                                                                    // country && genders.map((value, key) => (
                                                                    //     <MenuItem key={key} value={value.NEMSISCode}>{value.Name}</MenuItem>
                                                                    // ))
                                                                }
                                                            </Select>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <InputLabel>City Name</InputLabel>
                                                            <TextField
                                                                type="text"
                                                                id="name"
                                                                placeholder="Enter City Name"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.name}
                                                                helperText={touched.name ? errors.name : ""}
                                                                error={touched.name && Boolean(errors.name)} 
                                                            />
                                                            
                                                        </Grid>

                                                        <Grid item xs={6}>
                                                            <InputLabel>City Sort Name</InputLabel>
                                                            <TextField
                                                                id="sortName"
                                                                type="text"
                                                                placeholder="Enter Sort City Name"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                value={values.sortName}
                                                                helperText={touched.sortName ? errors.sortName : ""}
                                                                error={touched.sortName && Boolean(errors.sortName)}
                                                            />
                                                        </Grid>

                                                        <Grid item xs={12}>
                                                            <Button 
                                                                type="submit" 
                                                                variant="contained"
                                                            >Submit</Button>
                                                        </Grid>
                                                    </Grid>
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
