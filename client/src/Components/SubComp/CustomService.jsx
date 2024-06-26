import React, { useContext, useEffect, useState } from "react";
import OtpInput from 'react-otp-input';

import { Context } from '../../Context/ContextProvider';
import CallCenterAvtar from "../../resources/CallCenterAvatar.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckSquare, faCoffee, faHeadphones, faUserSecret,
  faCloudUploadAlt, faUserHeadset, faUserNinja, faUserTimes
} from '@fortawesome/fontawesome-free-solid'
import GreetGif from '../../resources/gifgit.gif'
import HighFiveGif from '../../resources/c6a3b285-860a-4c53-869a-72073bab2005.gif'
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
  useEffect(() => {
    GifGreate();
  }, []);
  return (<>
    <div >
      <img src={GreetGif} ></img>
    </div>


    {/* <section className="loading-data">
  <h2 className="loading-text text-center text-uppercase">
    <span className="char" style={{color:"white"}}>G</span>&nbsp;
    <span className="char" style={{color:"#f5a706"}}>R</span>&nbsp;
    <span className="char" style={{color:"red"}}>E</span>&nbsp;
    <span className="char"style={{color:"white"}}>A</span>&nbsp;
    <span className="char" style={{color:"#f5a706"}} >T</span>&nbsp;
  </h2>
</section> */}

  </>);
}

export const GifHighFiveAfterBook = (props) => {

  const GifGreate = () => {
    props.triggerNextStep({ trigger: 'thnaking_msg3' });

  }
  useEffect(() => {
    GifGreate();
  }, []);
  return (<>
    <div >
      <img src={HighFiveGif} ></img>
    </div>


    {/* <section className="loading-data">
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
</section> */}

  </>);
}

export const UserInputValuesTable = (props) => {

  useEffect(() => {
    setTimeout(() => {
      props.triggerNextStep({ trigger: 'TVCMsg' });

    }, 2000)
  }, [])

  //Patient's value
  const { state, dispatch } = useContext(Context);

  console.log(props);
  let PatientDetail = {
    "Patient Full Name": props?.steps?.user_input_for_name?.value.trim(),
    "Email ID": props?.steps?.User_email?.value,
    "Gender": props?.steps?.gendr?.value,
    "DOB": (state[0]?.Patinet_DOB_payload) ? state[0]?.Patinet_DOB_payload : "NA",
    "Address": (props?.steps?.User_input_address?.value) ? props?.steps?.User_input_address?.value : "NA",
    "Phone No": (state[1]?.Patinet_phone_payload) ? state[1]?.Patinet_phone_payload : "NA",
    "Patient Insurance Status": (props?.steps?.HI_bool?.value == true) ? "Yes" : "No",
    "Insurance Provider Name": (props?.steps?.User_input_HI_name?.value) ? props?.steps?.User_input_HI_name?.value : "NA",
    "Member ID": (props?.steps?.User_input_PHI_id?.value) ? props?.steps?.User_input_PHI_id?.value : "NA",
    // "Patient_Visiting_Status": (props?.steps?.IS_MRN?.value==false) ? "First Time Visit" : "Follow-up Visit",
    "Preferred Healthcare Status": (props?.steps?.Prefred_dr?.value == false) ? "No" : "YeS",
    "Preferred Provider Name": (props?.steps?.Patient_appointmentDr?.value) ? props?.steps?.Patient_appointmentDr?.value : "NA",
    "Date Of Visit": (state[2]?.Patinet_appointmentDate_payload) ? state[2]?.Patinet_appointmentDate_payload : "NA",
    "TimeSLot": (state[3]?.Patinet_timeSlot_payload) ? state[3]?.Patinet_timeSlot_payload : "NA",
  }

  // console.log(PatientDetail.Address)

  return (
      <>
      <div >
        <table className="table">
          {
            Object.entries(PatientDetail).map(([key, val, index]) => (
              <tr id={index}>
                <th> {key}</th>
                <td>{val}</td>
              </tr>
            ))
          }
        </table>
      </div>

    </>
        
    
  )
}

export const CongtratsMsg = (props) => {

  useEffect(() => {
    setTimeout(() => {
      props.triggerNextStep({ trigger: 'thnaking_msg5' });

    }, 1000)
  }, [])

  return (
    <>
      <div>
        <span>Hey Congratulations!!! <br />
          Check your inbox for my confirmation email.
        </span>
      </div>
    </>
  )

}


export const OTPTextField = (props) => {

  const [otp, setOtp] = useState('');
  const [flag, setFlag] = useState(true)
  const [btncolor, setbtncolor] = useState("#afe5af")



  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp)
    if (enteredOtp.length === 4) {
      setFlag(false)
      setbtncolor("green")
    }
    else {
      setFlag(true)
      setbtncolor("#afe5af")
    }

    console.log("entre", enteredOtp, enteredOtp.length, flag)
  };

  let submitHandle = () => {
    setFlag(true)
    props.triggerNextStep({ trigger: 'VerifiedMsg' });
  }

  return (
    <>
      <div>
        <span style={{ alignItems: "center" }}>Enter OTP</span>
        <OtpInput
          isInputNum={false}
          value={otp}
          onChange={handleChange}
          numInputs={4}
          containerStyle={{
            fontSize: "14px",
            borderRadius: "5px",
            width: "83px",

          }}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="text" {...props} />}
        />

        {/* <button onClick={()=>{setOtp()}}>Clear</button> */}
        <button style={{ backgroundColor: btncolor }} className="OTP-btn" onClick={submitHandle} disabled={flag} >Verify</button>
      </div>



    </>
  )
}



export let VerifiedMsgg = (props) => {

  useEffect(() => {
    setTimeout(() => {
      props.triggerNextStep({ trigger: 'P_healthcareProvider' });

    }, 1000)
  }, [])


  return (
    <>
      <span>OTP Verified</span>
    </>
  )

}


export const ExistingUserComp = (props) => {
  const PatientName = props?.steps?.user_input_for_name?.value.trim();
  return (<>
    <div>It's been long time no see {PatientName}</div>
  </>);
}


export const EmailSentMsg=()=>{

  return(
    <>
     <div>Please enter OTP sent to your registered email ID</div>
    </>
  )
}