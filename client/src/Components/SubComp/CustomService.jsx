import React, { useEffect, useState } from "react";
import CallCenterAvtar from "../../resources/CallCenterAvatar.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckSquare, faCoffee, faHeadphones, faUserSecret,
    faCloudUploadAlt, faUserHeadset, faUserNinja, faUserTimes
} from '@fortawesome/fontawesome-free-solid'
export const BookApointmentBtn = (props) => {
    const [DisbleBtn, setDisbleBtn] = useState(false);
    const BookApt = () => {
        props.triggerNextStep({ trigger: 'GreateMsg' });
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
    
    const GifGreate = () => {
        props.triggerNextStep({ trigger: 'AskName' });

    }
  useEffect(()=>{
    GifGreate();
  },[]);
    return (<>
  {/* <div className="content">
  <h5 className="text_shadows"  >Greate</h5>
</div> */}


<section class="loading-data">
  <h2 class="loading-text text-center text-uppercase">
    <span class="char" style={{color:"#0f89db"}}>G</span>
    <span class="char" style={{color:"#f5a706"}}>R</span>
    <span class="char" style={{color:"red"}}>E</span>
    <span class="char"style={{color:"#0f89db"}}>A</span>
    <span class="char" style={{color:"#f5a706"}} >T</span>
  </h2>
</section>

    </>);
}
