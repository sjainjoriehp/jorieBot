import React from "react";
import CallCenterAvtar from "../../resources/CallCenterAvatar.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCheckSquare, faCoffee,faHeadphones,faUserSecret,
    faCloudUploadAlt, faUserHeadset,faUserNinja,faUserTimes
} from '@fortawesome/fontawesome-free-solid'
export const BookApointmentBtn = (props) => {
    const BookApt = () => {
        props.triggerNextStep({ trigger: 'AskName' });
    }
    return (<>
        <div className="Btn_img_aptBook">
            <button className="Appointment_btn left" onClick={BookApt}>Book an Appointment</button>
            <span><img className="call_center_avtar right" src={CallCenterAvtar} /> </span>
<<<<<<< HEAD
            {/* <FontAwesomeIcon  icon={faUserSecret} />
=======
            {/* <FontAwesomeIcon icon={faUserSecret} />
>>>>>>> 3501c422ae40e402253df40c19f0cc6ec70f0a32
            <FontAwesomeIcon icon={faCloudUploadAlt} />
            <FontAwesomeIcon icon="fad fa-user-headset" /> */}
        </div>

    </>);
}


export const GifGreatAfterBtn = (props) => {

    return (<>

    </>);
}
