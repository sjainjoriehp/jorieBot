import React from "react";
import CallCenterAvtar from "../../resources/CallCenterAvatar.png"

export const BookApointmentBtn = (props) => {
    const BookApt = () =>{
        props.triggerNextStep({ trigger: 'AskName' }); 
    }
    return (<>
        <button className="Appointment_btn" onClick={BookApt}>Book an Appointment</button>
        <span><img className="call_center_avtar" src={CallCenterAvtar}/></span>
    </>);
}
