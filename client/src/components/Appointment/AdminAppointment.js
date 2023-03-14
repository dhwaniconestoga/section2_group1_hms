import React, { useContext, useEffect, useState } from 'react';
import styles from './Appointment.module.css';
import { useNavigate } from "react-router-dom";
import ErrorDialogueBox from '../MUIDialogueBox/ErrorDialogueBox';
import { UserContext } from '../../Context/UserContext'
import Box from '@mui/material/Box';
// import DatePicker from '../Datepicker/DatePicker';
import dayjs from 'dayjs';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import MyCalendar from '../Datepicker/MyCalendar';
import moment from "moment"
import axios from "axios";
import { BootstrapDialog, BootstrapDialogTitle } from "../MUIDialogueBox/BoostrapDialogueBox"
import DialogContent from '@mui/material/DialogContent';
import AppointmentForm from '../Forms/AppointmentForm'




function AdminAppointment() {
    const navigate = useNavigate();

    // const [dateClicked,setDateClicked] = useState(dayjs());
    const [date, setDate] = useState(new Date());
    const [availableSlots, setAvailableSlots] = useState([])

    const [errorDialogueBoxOpen, setErrorDialogueBoxOpen] = useState(false);
    const [errorList, setErrorList] = useState([]);
    const handleErrorDialogueOpen = () => {
        setErrorDialogueBoxOpen(true)
    };
    const handleErrorDialogueClose = () => {
        setErrorList([]);
        setErrorDialogueBoxOpen(false)
    };

    const [openDialgueBox, setOpenDialgueBox] = React.useState(false);

    //fhandler function for bootstrap dialogue box 
    const handleClickOpen = () => {
        setOpenDialgueBox(true);
    };
    const handleClose = () => {
        setOpenDialgueBox(false);
    };

    const addAppointmentFormSubmitted = (event)=>{
        event.preventDefault();
    }

    const getformDate = (dayOfJoining) => {
        const parts = dayOfJoining.split('-');
        const d = new Date(+parts[0], parts[1] - 1, +parts[2], 12);
        return d;
    }

    const formatDateForDateInput = (dateOfJoining) => {
        dateOfJoining = moment(new Date(dateOfJoining)).format('YYYY-MM-DD');
        // console.log("dateOfJoining",dateOfJoining);
        return dateOfJoining;
    }

    const slotClicked = (slot) => {
        handleClickOpen()
    }

    const getAvailableSlots = async () => {
        // let newSlotList = availableSlots;
        // newSlotList[newSlotList.length] = "hello"
        // setAvailableSlots(newSlotList);
        let response = await axios.post(`http://localhost:3001/appointments`,
            {
                'isTimeSlotAvailable': true,
                'appDate': date
            },
            {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        );
        if (response.data.message == "success") {
            // getAvailableSlot();
            // window.alert("success add")
            // setAvailableSlot(response.data.appointments)
            let aptms = response.data.appointments;

            let slots = aptms.map(apt =>
                apt.appointmentTime
            )
            slots.sort((a, b) => {
                const timeA = new Date(`01/01/2000 ${a}`);
                const timeB = new Date(`01/01/2000 ${b}`);
                return timeA - timeB;
            });
            setAvailableSlots(slots);
        }
        else {
            // window.alert("error add")
        }

    }

    useEffect(() => {
        getAvailableSlots()
    }, [date])





    const handleCreateSlotSubmit = async (event) => {
        event.preventDefault();
        const form = document.forms.createSlotForm;
        let slot = {
            'appDate': form.appDate.value,
            'appTime': form.appTime.value
        }
        console.log(slot);
        try {
            let response = await axios.post(`http://localhost:3001/appointments/add`,
                {
                    'slot': slot
                },
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                }
            );
            if (response.data.message == "success") {
                // getAvailableSlot();
                // window.alert("success add")
                getAvailableSlots();
            }
        }
        catch (error) {
            // window.alert("error add")
            // error.response.data.errors
            setErrorList(error.response.data.errors)
            handleErrorDialogueOpen();

        }
    }


    return (
        <Box id={styles.appointmentMain} component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div>
                <h3 className={styles.pageTitle}> Appointments</h3>
            </div>

            <div id={styles.slotGrid}>
                <div id={styles.calendarDiv}>
                    <MyCalendar date={date} setDate={setDate} />
                </div>
                <div id={styles.slotCreationDiv}>
                    <form name='createSlotForm' id="createSlotForm" onSubmit={handleCreateSlotSubmit} >
                        <h4>Create Slots</h4>
                        <div className="my-4 row">
                            <label for="appDate" className="col-sm-3 col-form-label ">Enter a date: </label>
                            <input id="appDate" name="appDate" type="date" className="col-form-control col-sm-8"
                                value={formatDateForDateInput(date)}
                                onChange={(e) => setDate(getformDate(e.target.value))}
                            />
                        </div>
                        <div className="my-4 row">
                            <label for="appTime" className="col-sm-3 col-form-label ">Choose time slot: </label>
                            <select name="appTime" id="appTime" class="col-form-select col-sm-8" aria-label="Default select example" required>
                                <option selected value=''>Click to select slot</option>
                                <option value="9:00 AM">9 AM</option>
                                <option value="9:30 AM">9:30 AM</option>
                                <option value="10:00 AM">10 AM</option>
                                <option value="10:30 AM">10:30 AM</option>
                                <option value="11:00 AM">11 AM</option>
                                <option value="11:30 AM">11:30 AM</option>
                                <option value="12:00 PM">12 PM</option>
                                <option value="12:30 PM">12:30 PM</option>
                                <option value="1:00 PM">1:00 PM</option>
                                <option value="1:30 PM">1:30 PM</option>
                                <option value="2:00 PM">2:00 PM</option>
                                <option value="2:30 PM">2:30 PM</option>
                            </select>
                        </div>
                        <input type='submit' className='btn btn-primary float-right btn-rounded py-2 px-4' value='Create' />
                    </form>
                    <h4 className="mt-5">Available Slots</h4>
                    <div className='d-flex flex-wrap'>
                        {/* <div className={styles.slotCard}>9:00 AM</div>
                        <div className={styles.slotCard}>9:30 AM</div>
                        <div className={styles.slotCard}>10:00 AM</div>
                        <div className={styles.slotCard}>10:30 AM</div>
                        <div className={styles.slotCard}>11:00 AM</div>
                        <div className={styles.slotCard}>11:30 AM</div>
                        <div className={styles.slotCard}>12:00 PM</div>
                        <div className={styles.slotCard}>12:30 PM</div>
                        <div className={styles.slotCard}>1:00 PM</div>
                        <div className={styles.slotCard}>1:30 PM</div>
                        <div className={styles.slotCard}>2:00 PM</div>
                        <div className={styles.slotCard}>2:30 PM</div> */}
                        {
                            availableSlots.map(slot => {
                                return <div onClick={slotClicked} className={styles.slotCard}>{slot}</div>
                            })
                        }
                    </div>
                </div>

            </div>
            <ErrorDialogueBox
                open={errorDialogueBoxOpen}
                handleToClose={handleErrorDialogueClose}
                ErrorTitle="Error"
                ErrorList={errorList}
            />
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={openDialgueBox}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Book Appointment
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <AppointmentForm formName="addAppointment" formOnSubmit={addAppointmentFormSubmitted} />
                </DialogContent>
            </BootstrapDialog>
        </Box>
    );
}

export default AdminAppointment;
