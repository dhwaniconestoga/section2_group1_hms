import React from "react";


function AppointmentForm(props) {
    return (
        <form name={props.formName} onSubmit={props.formOnSubmit}>
            <div className="form-row">
                <div className="form-group col-10 mx-auto">
                    <label for="firstName">Appointment Date :</label>
                    <input type="text" name="firstName" placeholder="Appointment Date" className="form-control " disabled defaultValue={props.firstName} required></input>
                </div>

                <div className="form-group col-10 pl-3 mx-auto">
                    <label for="LastName">Appointment Time :</label>
                    {/* <input type="text" name="lastName" placeholder="Appointment Date" className="form-control" required defaultValue={props.lastName}  ></input> */}
                    <select name="appTime" id="appTime" className="form-control" aria-label="Default select example" required disabled>
                        <option selected value="9:00 AM">9 AM</option>
                    </select>
                </div>

                <div className="form-group col-10 pl-3 mx-auto">
                    <label for="email">Doctor :</label>
                    <input type="email" name="email" placeholder="Email" className="form-control" required defaultValue={props.email} ></input>
                </div>


                <div className="form-group col-10 pl-3 mx-auto">
                    <label for="ward">Patient :</label>
                    <select name="ward" className="form-control">
                        {["Red","Green", "Blue", "Yellow"]
                                    .map((ward, i)=> {
                                        return (ward === props.ward ? <option key={i} value={ward} selected>{ward}</option> :
                                        <option key={i} value={ward}>{ward}</option>)
                                    })}
                    </select>
                </div>
            </div>
            <input type="hidden" name="id" defaultValue={props.id}/>
            <input type="submit" className="btn btn-primary my-2 mx-4  col-4 " id="customBtn" value="Submit"></input>

        </form>
    );
}

export default AppointmentForm;