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
    const [flag, setFlag] = useState(false);
    const handleTimeChange = (time) => {
        settimeSlot(time);
        setFlag(true);
        props.triggerNextStep({ trigger: 'Thanking_msg' });
        let Patient_timeSlot = { 'Patinet_timeSlot_payload': timeSlot ? timeSlot : '' };
        dispatch({ type: "Patinet_timeSlot", payload: Patient_timeSlot });
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

export const Loader = (props) => {
    const { state, dispatch } = useContext(Context);
    let Arrobj = [
        { "Patinet_name": props?.steps?.user_input_for_name?.value },
        { "Patinet_gender": props?.steps?.gendr?.value },
        { "Patinet_address": props?.steps?.User_input_address?.value },
        { "Patinet_emailid": props?.steps?.User_email?.value },
        { "Is_Patinet_primary_HI": props?.steps?.HI_bool?.value },
        { "Is_Patinet_MRN": props?.steps?.IS_MRN?.value },
        { "IS_Patinet_Prefred_dr": props?.steps?.Prefred_dr?.value },
        { "primary_insurance_provider_name": props?.steps?.User_input_HI_name?.value },
        { "primary_insurance_provider_nameID": props?.steps?.User_input_PHI_id?.value },
        { "Is_Patinet_Secoundry_HI": props?.steps?.Secoundry_InsuranceBool?.value },
        { "secondary_insurance_provider_name": props?.steps?.User_secondary_Insurance_provider_name?.value },
        { "secondary_insurance_provider_nameID": props?.steps?.User_secondary_Insurance_Id?.value },
        { "Is_Patinet_Tertiary_HI": props?.steps?.TIB?.value },
        { "tertiary_insurance_provider_name": props?.steps?.User_Tertiary_Insurance_provider_name?.value },
        { "tertiary_insurance_provider_nameID": props?.steps?.Patient_Tertiary_Insurance_Id?.value },
        { "Patinet_Prefred_drName": props?.steps?.Patient_appointmentDr?.value },
    ];
    state.push(...Arrobj);

    console.log('state values--', state);
    return (<>
        <div >
            <center><ReactLoading type="spinningBubbles" color="#f5f8fb" height={30} width={50} /></center>
            <p>Your appointment has been booked on [preferred date] at [preferred time]. Your registration number is isa45543ss.</p>
        </div>

    </>);
}