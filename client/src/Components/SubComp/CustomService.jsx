import React from "react";

export const BookApointmentBtn = (props) => {
    const BookApt = () =>{
        props.triggerNextStep({ trigger: 'AskName' }); 
    }
    return (<>

        <button className="Appointment_btn" onClick={BookApt}>Book An Appointment</button>
    </>);
}
