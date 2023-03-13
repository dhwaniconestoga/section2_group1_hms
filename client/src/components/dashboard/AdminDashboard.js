
import styles from './Dashboard.module.css';


import  {React, useState, useEffect} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import axios from "axios";




export default function AdminDashboard() {

	const [doctorCount,setDoctorCount] = useState(0);
	const [patientCount,setPatientCount] = useState(0);

	const getUserCountByRole = async (userType) => {
		const response = await axios.post(`http://localhost:3001/getUserCount/`,
			{
				'userType': userType
			},
			{
				headers: {
					authorization: `Bearer ${localStorage.getItem("token")}`
				}
			}
		);
		let count = response.data.count
		if(count){
			if(userType == "Doctor")
				setDoctorCount(count);
			else if(userType == "Patient")
				setPatientCount(count);
		}
		
	}; 
	
	useEffect(()=>{
		//setting count of Doctors on dashboard
		getUserCountByRole("Doctor");

		//setting count of Patients on dashboard
		getUserCountByRole("Patient");
	},[doctorCount,patientCount]);


    return (
            <Box className={styles.dashboardBody} component="main" sx={{ flexGrow: 1, p: 3 }}>
                <div className={styles.statCardGrid}>
                    <div className={["", styles.statCard].join(" ")}>
                        <div className={styles.dashWidget}>
                            <span className={styles.dashWidgetBg1}><i className="fa fa-stethoscope" aria-hidden="true"></i></span>
                            <div className={[" ", styles.dashWidgetInfo].join(" ")} >
                                <h3 className={styles.dashWidgetInfoH3}>{doctorCount}</h3>
                                <span className={styles.widgetTitle1}>Doctors <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className={["", styles.statCard].join(" ")}>
                        <div className={styles.dashWidget}>
                            <span className={styles.dashWidgetBg2}><i className="fa fa-user-o" aria-hidden="true"></i></span>
                            <div className={[" ", styles.dashWidgetInfo].join(" ")} >
                                <h3 className={styles.dashWidgetInfoH3}>{patientCount}</h3>
                                <span className={styles.widgetTitle2}>Patients <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className={["", styles.statCard].join(" ")}>
                        <div className={styles.dashWidget}>
                            <span className={styles.dashWidgetBg3}><i className=" fa fa-calendar" aria-hidden="true"></i></span>
                            <div className={[" ", styles.dashWidgetInfo].join(" ")} >
                                <h3 className={styles.dashWidgetInfoH3}>22</h3>
                                <span className={styles.widgetTitle3}>Appointments Today <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className={["", styles.statCard].join(" ")}>
                        <div className={styles.dashWidget}>
                            <span className={styles.dashWidgetBg4}><i className="fa fa-heartbeat" aria-hidden="true"></i></span>
                            <div className={[" ", styles.dashWidgetInfo].join(" ")} >
                                <h3 className={styles.dashWidgetInfoH3}>22</h3>
                                <span className={styles.widgetTitle4}>Pending Appointments <i class="fa fa-check" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row ">
					<div className="col-12 col-lg-8 col-xl-8">
						<div className="card">
							<div className="card-header">
								<h4 className="card-title d-inline-block">Upcoming Appointments</h4> <a href="appointments.html" className="btn btn-primary float-end">View all</a>
							</div>
							<div className="card-body">
								<div className="table-responsive">
									<table className="table mb-0">
										<thead className="d-none">
											<tr>
												<th>Patient Name</th>
												<th>Doctor Name</th>
												<th>Timing</th>
												<th className="text-right">Status</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className={styles.appointmentTableTd}>
													<a className="avatar" href="profile.html">B</a>
													<h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
												</td>                 
												<td>
													<h5 className="time-title p-0">Appointment With</h5>
													<p>Dr. Cristina Groves</p>
												</td>
												<td>
													<h5 class="time-title p-0">Timing</h5>
													<p>7.00 PM</p>
												</td>
												<td class="text-right">
													<a href="appointments.html" class="btn btn-outline-primary take-btn">Take up</a>
												</td>
											</tr>
                                            <tr>
												<td className={styles.appointmentTableTd}>
													<a className="avatar" href="profile.html">B</a>
													<h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
												</td>                 
												<td>
													<h5 className="time-title p-0">Appointment With</h5>
													<p>Dr. Cristina Groves</p>
												</td>
												<td>
													<h5 class="time-title p-0">Timing</h5>
													<p>7.00 PM</p>
												</td>
												<td class="text-right">
													<a href="appointments.html" class="btn btn-outline-primary take-btn">Take up</a>
												</td>
											</tr>
                                            <tr>
												<td className={styles.appointmentTableTd}>
													<a className="avatar" href="profile.html">B</a>
													<h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
												</td>                 
												<td>
													<h5 className="time-title p-0">Appointment With</h5>
													<p>Dr. Cristina Groves</p>
												</td>
												<td>
													<h5 class="time-title p-0">Timing</h5>
													<p>7.00 PM</p>
												</td>
												<td class="text-right">
													<a href="appointments.html" class="btn btn-outline-primary take-btn">Take up</a>
												</td>
											</tr>
                                            <tr>
												<td className={styles.appointmentTableTd}>
													<a className="avatar" href="profile.html">B</a>
													<h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
												</td>                 
												<td>
													<h5 className="time-title p-0">Appointment With</h5>
													<p>Dr. Cristina Groves</p>
												</td>
												<td>
													<h5 class="time-title p-0">Timing</h5>
													<p>7.00 PM</p>
												</td>
												<td class="text-right">
													<a href="appointments.html" class="btn btn-outline-primary take-btn">Take up</a>
												</td>
											</tr>
                                            <tr>
												<td className={styles.appointmentTableTd}>
													<a className="avatar" href="profile.html">B</a>
													<h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
												</td>                 
												<td>
													<h5 className="time-title p-0">Appointment With</h5>
													<p>Dr. Cristina Groves</p>
												</td>
												<td>
													<h5 class="time-title p-0">Timing</h5>
													<p>7.00 PM</p>
												</td>
												<td class="text-right">
													<a href="appointments.html" class="btn btn-outline-primary take-btn">Take up</a>
												</td>
											</tr>
            
                                            
											{/* <tr>
												<td style="min-width: 200px;">
													<a class="avatar" href="profile.html">B</a>
													<h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
												</td>                 
												<td>
													<h5 class="time-title p-0">Appointment With</h5>
													<p>Dr. Cristina Groves</p>
												</td>
												<td>
													<h5 class="time-title p-0">Timing</h5>
													<p>7.00 PM</p>
												</td>
												<td class="text-right">
													<a href="appointments.html" class="btn btn-outline-primary take-btn">Take up</a>
												</td>
											</tr>
											<tr>
												<td style="min-width: 200px;">
													<a class="avatar" href="profile.html">B</a>
													<h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
												</td>                 
												<td>
													<h5 class="time-title p-0">Appointment With</h5>
													<p>Dr. Cristina Groves</p>
												</td>
												<td>
													<h5 class="time-title p-0">Timing</h5>
													<p>7.00 PM</p>
												</td>
												<td class="text-right">
													<a href="appointments.html" class="btn btn-outline-primary take-btn">Take up</a>
												</td>
											</tr>
											<tr>
												<td style="min-width: 200px;">
													<a class="avatar" href="profile.html">B</a>
													<h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
												</td>                 
												<td>
													<h5 class="time-title p-0">Appointment With</h5>
													<p>Dr. Cristina Groves</p>
												</td>
												<td>
													<h5 class="time-title p-0">Timing</h5>
													<p>7.00 PM</p>
												</td>
												<td class="text-right">
													<a href="appointments.html" class="btn btn-outline-primary take-btn">Take up</a>
												</td>
											</tr>
											<tr>
												<td style="min-width: 200px;">
													<a class="avatar" href="profile.html">B</a>
													<h2><a href="profile.html">Bernardo Galaviz <span>New York, USA</span></a></h2>
												</td>                 
												<td>
													<h5 class="time-title p-0">Appointment With</h5>
													<p>Dr. Cristina Groves</p>
												</td>
												<td>
													<h5 class="time-title p-0">Timing</h5>
													<p>7.00 PM</p>
												</td>
												<td class="text-right">
													<a href="appointments.html" class="btn btn-outline-primary take-btn">Take up</a>
												</td>
											</tr> */}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
                    <div class="col-12 col-lg-4 col-xl-4">
                        <div class="card member-panel">
							<div class="card-header bg-white">
								<h4 class="card-title mb-0">Doctors</h4>
							</div>
                            <div class="card-body">
                                <ul class="contact-list">
                                    <li>
                                        <div class="contact-cont">
                                            <div class="float-left user-img m-r-10">
                                                {/* <a href="profile.html" title="John Doe"><span class="status online"></span></a> */}
                                            </div>
                                            <div class="contact-info">
                                                <span class="contact-name text-ellipsis">John Doe</span>
                                                <span class="contact-date">MBBS, MD</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="contact-cont">
                                            <div class="float-left user-img m-r-10">
                                                {/* <a href="profile.html" title="Richard Miles"><span class="status offline"></span></a> */}
                                            </div>
                                            <div class="contact-info">
                                                <span class="contact-name text-ellipsis">Richard Miles</span>
                                                <span class="contact-date">MD</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="contact-cont">
                                            <div class="float-left user-img m-r-10">
                                                {/* <a href="profile.html" title="John Doe"><span class="status away"></span></a> */}
                                            </div>
                                            <div class="contact-info">
                                                <span class="contact-name text-ellipsis">John Doe</span>
                                                <span class="contact-date">BMBS</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="contact-cont">
                                            <div class="float-left user-img m-r-10">
                                                {/* <a href="profile.html" title="Richard Miles"><span class="status online"></span></a> */}
                                            </div>
                                            <div class="contact-info">
                                                <span class="contact-name text-ellipsis">Richard Miles</span>
                                                <span class="contact-date">MS, MD</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="contact-cont">
                                            <div class="float-left user-img m-r-10">
                                                {/* <a href="profile.html" title="John Doe"><span class="status offline"></span></a> */}
                                            </div>
                                            <div class="contact-info">
                                                <span class="contact-name text-ellipsis">John Doe</span>
                                                <span class="contact-date">MBBS</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="contact-cont">
                                            <div class="float-left user-img m-r-10">
                                                {/* <a href="profile.html" title="Richard Miles"><span class="status away"></span></a> */}
                                            </div>
                                            <div class="contact-info">
                                                <span class="contact-name text-ellipsis">Richard Miles</span>
                                                <span class="contact-date">MBBS, MD</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-footer text-center bg-white">
                                <a href="doctors.html" class="text-muted">View all Doctors</a>
                            </div>
                        </div>
                    </div>
				</div>
        </Box>
    );
}
