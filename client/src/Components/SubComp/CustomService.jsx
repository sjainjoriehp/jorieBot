import React, { useState } from "react";
import CallCenterAvtar from "../../resources/CallCenterAvatar.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckSquare, faCoffee, faHeadphones, faUserSecret,
    faCloudUploadAlt, faUserHeadset, faUserNinja, faUserTimes
} from '@fortawesome/fontawesome-free-solid'
export const BookApointmentBtn = (props) => {
    const [DisbleBtn, setDisbleBtn] = useState(false);
    const BookApt = () => {
        props.triggerNextStep({ trigger: 'AskName' });
        setDisbleBtn(true);

    }
    return (<>
        <div className="Btn_img_aptBook">
            <button className="Appointment_btn left" onClick={BookApt} disabled={DisbleBtn}>
                Book an Appointment
                <span><img className="call_center_avtar right" src={CallCenterAvtar} /> </span>
                </button>
            
        </div>

    </>);
}


export const GifGreatAfterBtn = (props) => {

    return (<>

    </>);
}
