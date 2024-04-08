import React, { useEffect, useState } from "react";
import CallCenterAvtar from "../../resources/CallCenterAvatar.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCheckSquare, faCoffee, faHeadphones, faUserSecret,
    faCloudUploadAlt, faUserHeadset, faUserNinja, faUserTimes
} from '@fortawesome/fontawesome-free-solid'
 import GreetGif from '../../resources/gifgit.gif'
import '../../../src/customService.css'


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


<section className="loading-data">
  <h2 className="loading-text text-center text-uppercase">
    <span className="char" style={{color:"#0f89db"}}>G</span>
    <span className="char" style={{color:"#f5a706"}}>R</span>
    <span className="char" style={{color:"red"}}>E</span>
    <span className="char"style={{color:"#0f89db"}}>A</span>
    <span className="char" style={{color:"#f5a706"}} >T</span>
  </h2>
</section>

    </>);
}


export const GifHighFiveAfterBook = (props) => {
    
    const GifGreate = () => {
        props.triggerNextStep({ trigger: 'thnaking_msg3' });

    }
  useEffect(()=>{
    GifGreate();
  },[]);
    return (<>
  {/* <div className="content">
  <h5 className="text_shadows"  >Greate</h5>
</div> */}


<section className="loading-data">
  <h2 className="loading-text text-center text-uppercase">
    <span className="char" style={{color:"#0f89db"}}>H</span>
    <span className="char" style={{color:"#f5a706"}}>I</span>
    <span className="char" style={{color:"red"}}>G</span>
    <span className="char"style={{color:"#0f89db"}}>H</span>
    <span className="char" style={{color:"#f5a706"}} >F</span>
    <span className="char" style={{color:"#f5a706"}}>I</span>
    <span className="char" style={{color:"red"}}>V</span>
    <span className="char"style={{color:"#0f89db"}}>E</span>
  </h2>
</section>

    </>);
}



export const UserInputValuesTable=(props)=>{

  useEffect(()=>{
    setTimeout(()=>{
        props.triggerNextStep({ trigger: 'TVCMsg' });

    },1000)
  },[])
     
         
       

    return(
        <>
        <h1>Table Values</h1>
        </>
    )
}






