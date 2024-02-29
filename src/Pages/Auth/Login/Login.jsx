import React from 'react'
//import Header from '../../Component/Header'
//import Sidebar from '../../Component/Admin/Sidebar'
import { Form, Formik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from 'react-hot-toast';
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { login } from '../../../Component/Store/Auth';
import './Login.css';
import {
    Card,
    CardContent,
    Grid,
    InputLabel,
    TextField,
    Button,
    Typography,
    Box,
} from "@mui/material";

export default function Login() {
    const dispatch = useDispatch();
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required")
            .email("Please enter a valid email address"),
        password: Yup.string()
            .required('Password is required'),
    });
    const initialValues = {
        "email":"",
        "password":"",
    }
    const nameForm = React.useRef(null)
    // Here store apis data
    //const [loginInitialValues, setLoginInitialValues] = React.useState(initialValues);
    //const [formTitle, setFormTitle] = React.useState('Login');

    React.useEffect(() => {
        
    }, [])
    
    const handleOnSubmit = async (values, { resetForm }) => {
        console.log("values",values);
        dispatch(login(values)).then((response)=>{
            console.log(response);
            if(response.status){
                window.location.href = "/agent/dashboard";
            }else{
                toast.error(response.message);
            }
        })
    };
  return (
        <div className='login'>
           <div className='container'>
            <div className='col-4 ms-auto'>
                    <Toaster position="top-right" reverseOrder={false}/>
                        {/* <Header />
                        <Sidebar /> */}
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleOnSubmit}
                        enableReinitialize={true}
                    >
                        {({ classes,errors, touched, values, handleChange, setFieldValue }) => (
                            <Form ref={nameForm}>
                                    <Card>
                                    <div className='form p-4'>

                                        <CardContent>
                                            <Box className="mb-4 login-header">
                                                <Typography variant='h4' >Login</Typography>
                                                <Typography variant='p' >Login here to your account as</Typography>
                                            </Box>    
                                        
                                            <Grid container spacing={1}>
                                                <Grid item xs={12} className='mb-1'>
                                                    <InputLabel>Email</InputLabel>
                                                    <TextField
                                                        id="email"
                                                        type="text"
                                                        className='textfield'
                                                        fullWidth
                                                        placeholder="Enter Email"
                                                        onChange={handleChange}
                                                        value={values.email}
                                                        helperText={touched.email ? errors.email : ""}
                                                        error={touched.email && Boolean(errors.email)}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <InputLabel>Password</InputLabel>
                                                    <TextField  
                                                        id="password"
                                                        fullWidth
                                                        name='password'
                                                        type="password"
                                                        className='textfield'
                                                        placeholder="Enter Password"
                                                        onChange={handleChange}
                                                        value={values.password}
                                                        helperText={touched.password ? errors.password : ""}
                                                        error={touched.password && Boolean(errors.password)}
                                                    />

                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Button type="submit" fullWidth variant="contained" className="btn-theme mt-2"> Login </Button>
                                                </Grid>
                                            </Grid>
                                            <Box className="mt-3">
                                                <Typography variant='p' >Forgot your password? <Link className='text-theme fw-bold'> Reset Here </Link> </Typography>
                                                <hr></hr>
                                                <div className='text-center'> 
                                                    <Typography variant='p' className='text-muted'>Don't have an account?</Typography>
                                                </div>
                                                <div className='mt-3'>
                                                    <Link to={`/register`} >
                                                        <Button 
                                                            fullWidth
                                                            className='button btn-theme-outlined'
                                                            variant="outlined"
                                                        >
                                                            Create Account
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </Box>
                                        </CardContent>
                                    </div>

                                    </Card>
                            </Form>
                        )}
                    </Formik> 
            </div>
        </div>    
    </div>          
  )
}
