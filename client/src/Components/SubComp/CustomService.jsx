import React from "react";
import CallCenterAvtar from "../../resources/CallCenterAvatar.png"

export const BookApointmentBtn = (props) => {
    const BookApt = () => {
        props.triggerNextStep({ trigger: 'AskName' });
    }
    return (<>
        <div className="Btn_img_aptBook">
                <button className="Appointment_btn left" onClick={BookApt}>Book an Appointment</button>
                 <span><img className="call_center_avtar right" src={CallCenterAvtar} /> </span>
        </div>

    </>);
}
