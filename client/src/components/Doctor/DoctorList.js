import React, { useEffect, useState } from 'react';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';
import { Link } from "react-router-dom";
import axios from "axios";
import ErrorDialogueBox from '../MUIDialogueBox/ErrorDialogueBox';
import Box from '@mui/material/Box';


function doctorList() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');

    const [doctors, setdoctor] = useState([]);

    const [errorDialogueBoxOpen, setErrorDialogueBoxOpen] = useState(false);
    const [errorList, setErrorList] = useState([]);
    const handleDialogueOpen = () => {
        setErrorDialogueBoxOpen(true)
    };
    const handleDialogueClose = () => {
        setErrorList([]);
        setErrorDialogueBoxOpen(false)
    };


    useEffect(() => {
        getdoctors();
    }, []
    );

    const getdoctors = async () => {
        const response = await axios.get("http://localhost:3001/doctors",{params:{
            name: name
          }
        });
        setdoctor(response.data);
    };

    const deletedoctor = async (id) => {
        var x = confirm("Are you sure you want to delete this doctor?");
        if (x)
            try {
                await axios.delete(`http://localhost:3001/doctors/${id}`);
                getdoctors();
            } catch (error) {
                setErrorList(error);
                handleDialogueOpen();
            }
        else{
            return false;
        }
        
    };


    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
           
            <div className="page-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-sm-4 col-3">
                            <h4 className="page-title">Doctor</h4>
                        </div>
                        <div className="col-sm-8 col-9 text-right m-b-20">
                            <Link to="/doctors/add" className="btn btn-primary float-right btn-rounded">
                                <i className="fa fa-plus"></i> Add Doctor
                            </Link>
                        </div>
                    </div>
                    <form action="/doctors" name="userFilter" >
                    <div className="row filter-row">

                        <div className="col-sm-4 col-md-4">
                            <div className="form-group form-focus">
                                <label className="focus-label">Doctor Name</label>
                                <input type="text" name="name" className="form-control floating" />
                            </div>
                        </div>
                        
                        <div className="col-sm-4 col-md-4">
                            <button type="submit" className="btn btn-success btn-block"> Search </button>
                        </div>
                    </div>
                    </form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="table-responsive">
                                <table className="table table-striped custom-table">
                                    <thead>
                                        <tr>
                                            <th>Sr. No</th>
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Specialist</th>
                                            <th className="text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {doctors.map((doctor, index) => (
                                            <tr key={doctor._id}>
                                                <td>{index + 1}</td>
                                                <td>{doctor.firstName} {doctor.lastName}</td>
                                                <td>{doctor.phone}</td>
                                                <td>{doctor.email}</td>
                                                <td>{doctor.specialist}</td>
                                                <td>
                                                    <Link
                                                        to={`/doctors/edit/${doctor._id}`}
                                                        className="btn btn-warning is-info is-small m-r-2"
                                                    >
                                                        <i className="fa fa-pencil m-r-5"></i> Edit
                                                    </Link>
                                                    <button
                                                        onClick={() => deletedoctor(doctor._id)}
                                                        className="btn btn-danger is-danger is-small m-l-5"
                                                    >
                                                        <i className="fa fa-trash-o m-r-5"></i>  Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <ErrorDialogueBox
                    open={errorDialogueBoxOpen}
                    handleToClose={handleDialogueClose}
                    ErrorTitle="Error: Add doctor"
                    ErrorList={errorList}
                />
            </div>
        
        </Box>
    )
}

export default doctorList;
