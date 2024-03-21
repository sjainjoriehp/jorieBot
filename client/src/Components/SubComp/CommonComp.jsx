import React, { useContext, useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import TimePicker from 'react-time-picker';

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import ReactLoading from 'react-loading';
import { Context } from '../../Context/ContextProvider';
import axios from "axios";

export const DateComp = (props) => {
    const [dateState, setDateState] = useState("");
    const { state, dispatch } = useContext(Context);
    // console.log("comp---", state);
    const changeDate = (e) => {
        setDateState(e)
        CallTrigger();
        let Pdob = { 'Patinet_DOB_payload': e ? moment(e).format('MM/DD/YYYY') : '' };
        dispatch({ type: "Patinet_DOB", payload: Pdob });

    }

    let Dob = dateState ? moment(dateState).format('MM/DD/YYYY') : '';
    const CallTrigger = (e) => {
        props.triggerNextStep({ trigger: 'user_gender' })
    }
    return (<>
        {Dob === '' ?
            <Calendar value={Dob}
                onChange={changeDate} />
            : <div>{Dob}</div>
        }
    </>)

}

export const ApptDate = (props) => {
    const [aptDateState, setDateState] = useState("");
    const { state, dispatch } = useContext(Context);
    const changeDate = (e) => {
        setDateState(e)
        CallTrigger();
        let PAptDt = { 'Patinet_appointmentDate_payload': e ? moment(e).format('MM/DD/YYYY') : '' };
        dispatch({ type: "Patinet_appointmentDate", payload: PAptDt });
    }
    let AptDt = aptDateState ? moment(aptDateState).format('MM/DD/YYYY') : '';
    // console.log(`appointment date: ${AptDt}`);
    const CallTrigger = (e) => {
        props.triggerNextStep({ trigger: 'Patient_Time_slot' })
    }

    return (<>
        {AptDt === '' ?
            <Calendar value={AptDt}
                onChange={changeDate} />
            : <div>{AptDt}</div>
        }


    </>)

}

// mobile number component
export const MobileNum = (props) => {
    const { state, dispatch } = useContext(Context);
    const [phone, setPhone] = useState('');
    const [selCountryCode, setSelCountryCode] = useState('us')
    const [selCountryExpectedLength, setSelCountryExpectedLength] = useState(0)
    const [isValid, setIsValid] = useState(true);
    const [keyPress, SetkeyPress] = useState(false);
    const numberClick = (e) => {
        if (phone?.length < 10) { return false; }
        SetkeyPress(true);
        props.triggerNextStep({ trigger: 'PatientEmail' });

        let Patient_phone = { 'Patinet_phone_payload': phone ? phone : '' };
        dispatch({ type: "Patinet_Phone", payload: Patient_phone });
    }


    return (<>
        {
            (keyPress == false)
                ?
                <PhoneInput
                    country={'us'}
                    value={phone}
                    onEnterKeyPress={numberClick}
                    onChange={(inputPhone, countryData) => {
                        if (countryData.countryCode !== selCountryCode) {
                            setPhone('')
                            setIsValid(true)
                        }
                        else {
                            setPhone(inputPhone);
                        }
                        setSelCountryCode(countryData.countryCode)
                        setSelCountryExpectedLength(countryData.format.length)
                    }}
                />
                : <div>{phone}</div>}
    </>);
}

export const TimeSlotPicker = (props) => {
    const [timeSlot, settimeSlot] = useState('');
    const { state, dispatch } = useContext(Context);
    const handleTimeChange = (time) => {
        settimeSlot(time);
        let Patient_timeSlot = { 'Patinet_timeSlot_payload': (time) ? time : '' };
        dispatch({ type: "Patinet_timeSlot", payload: Patient_timeSlot });
        props.triggerNextStep({ trigger: 'Thanking_msg' }); 
    }
    return (
        <>
            {timeSlot == '' ?
                <div style={{ height: "auto" }}>
                    <TimePicker onChange={handleTimeChange} value={timeSlot} isOpen={false} hourPlaceholder="HH" minutePlaceholder="MM" shouldOpenClock={({ reason = "focus" }) => false} />
                </div>
                :
                <div>Time-slot : {timeSlot}
                </div>}
        </>
    );
}

export const Loader =    (props) => {
    const { state, dispatch } = useContext(Context);
    const [flag,setFlag] = useState(false);
    console.log(props);
    let PatientDetail = {
        "Patient_Name": props?.steps?.user_input_for_name?.value.trim(),
        "Patient_email": props?.steps?.User_email?.value,
        "Patient_Gender": props?.steps?.gendr?.value,
        "Patient_DOB": (state[0]?.Patinet_DOB_payload) ? state[0]?.Patinet_DOB_payload : "NA",
        "Patient_Address": (props?.steps?.User_input_address?.value) ? props?.steps?.User_input_address?.value :"NA",
        "Patient_Phone": (state[1]?.Patinet_phone_payload) ? state[1]?.Patinet_phone_payload : "NA",
        "Patient_Primary_Insurance_Status": (props?.steps?.HI_bool?.value) ? props?.steps?.HI_bool?.value : "NA",
        "Patient_Primary_Insurance_Provider_Name": (props?.steps?.User_input_HI_name?.value) ? props?.steps?.User_input_HI_name?.value : "NA",
        "Patient_Primary_Insurance_ID": (props?.steps?.User_input_PHI_id?.value) ?props?.steps?.User_input_PHI_id?.value : "NA",
        "Patient_Secondary_Insurance_Status": (props?.steps?.Secoundry_InsuranceBool?.value) ? props?.steps?.Secoundry_InsuranceBool?.value :"NA",
        "Patient_Secondary_Insurance_Provider_Name": (props?.steps?.User_secondary_Insurance_provider_name?.value) ? props?.steps?.User_secondary_Insurance_provider_name?.value : "NA",
        "Patient_Secondary_Insurance_ID": (props?.steps?.User_secondary_Insurance_Id?.value) ? props?.steps?.User_secondary_Insurance_Id?.value :"NA",
        "Patient_Tertiary_Insurance_Status": (props?.steps?.TIB?.value) ? props?.steps?.TIB?.value: "NA",
        "Patient_Tertiary_Insurance_Provider_Name": (props?.steps?.User_Tertiary_Insurance_provider_name?.value) ? props?.steps?.User_Tertiary_Insurance_provider_name?.value :"NA",
        "Patient_Tertiary_Insurance_ID": (props?.steps?.User_Tertiary_Insurance_Id?.value) ? props?.steps?.User_Tertiary_Insurance_Id?.value :"NA",
        "Patient_Visiting_Status": (props?.steps?.IS_MRN?.value==false) ? "First Time Visit" : "Follow-up Visit",
        "Patient_Preferred_Doctor_Status": (props?.steps?.Prefred_dr?.value==false) ? "NO":"YES",
        "Patient_Preferred_Doctor_Name": (props?.steps?.Patient_appointmentDr?.value) ? props?.steps?.Patient_appointmentDr?.value : "NA",
        "Patient_Date_Of_Visit": (state[2]?.Patinet_appointmentDate_payload) ? state[2]?.Patinet_appointmentDate_payload : "NA",
        "Patient_TimeSLot": (state[3]?.Patinet_timeSlot_payload) ? state[3]?.Patinet_timeSlot_payload : "NA",
    }
    console.log('PatientDetail--', PatientDetail);
   
    // const userAuthData_Token = "token";
    // const response = await axios.post(`apiurl`,PatientDetail,{headers: {"authorization" : `Bearer ${userAuthData_Token}` } });
    // if (response.data.status === 201) {
    //     console.log(response.data);

    // } else {
    //     console.log(response.error);
    // }

    async function PatientDetails() {
        try{
            const userAuthData_Token = "eyJhbGciOiJIUzI1NiJ9.SGVsbG8.8xiDCnB2Oc3uuP1763ySneTUU1Jn5Pe2N5yDzU7VczY";
            const response = await axios.post(`${process.env.REACT_APP_API_ROOT_URL}api/addInput`,PatientDetail,{headers: {"authorization" : `Bearer ${userAuthData_Token}` } });
        if (response.data.status === 201) {
            console.log(response.data);
            return response.data;
        } else {
            console.log(response.error);
            return response.error;
        }
        } catch(error) {  
            console.log(error.response);
            return error.response;
        }
        
    }

    PatientDetails();

    return (<>
        <div>
            <center><ReactLoading type="spinningBubbles" color="#f5f8fb" height={30} width={50} /></center>
        <p> Please wait while we book the appointment for you.</p>

            {/* <p>Your appointment has been booked on [preferred date] at [preferred time]. Your registration number is isa45543ss.</p> */}

        </div>

    </>);
}