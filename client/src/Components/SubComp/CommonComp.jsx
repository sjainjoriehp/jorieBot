import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import TimePicker from 'react-time-picker';

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import ReactLoading from 'react-loading';

export const DateComp = (props) => {
    const [dateState, setDateState] = useState("")


    const changeDate = (e) => {
        setDateState(e)
        CallTrigger();
    }
    let Dob = dateState ? moment(dateState).format('MM/DD/YYYY') : '';
    console.log(`appointment date: ${Dob}`);
    const CallTrigger = (e) => {
        props.triggerNextStep({ trigger: 'user_gender' })
    }
    return (<>
        {Dob == '' ?
            <Calendar value={Dob}
                onChange={changeDate} />
            : <div>{Dob}</div>
        }
    </>)

}

export const ApptDate = (props) => {
    const [aptDateState, setDateState] = useState("")
    const changeDate = (e) => {
        setDateState(e)
        CallTrigger();
    }

    let AptDt = aptDateState ? moment(aptDateState).format('MM/DD/YYYY') : '';
    console.log(`appointment date: ${AptDt}`);

    const CallTrigger = (e) => {
        props.triggerNextStep({ trigger: 'Patient_Time_slot' })
    }

    return (<>
        {AptDt == '' ?
            <Calendar value={AptDt}
                onChange={changeDate} />
            : <div>{AptDt}</div>
        }


    </>)

}

// mobile number component
export const MobileNum = (props) => {
    const [phone, setPhone] = useState('');
    const [selCountryCode, setSelCountryCode] = useState('us')
    const [selCountryExpectedLength, setSelCountryExpectedLength] = useState(0)
    const [isValid, setIsValid] = useState(true);
    const [keyPress,SetkeyPress] =useState(false);
    const numberClick= (e) =>{
        if(phone?.length <10) { return false; }
        SetkeyPress(true);
        // if(props?.steps?.HaveInsurance?.value) {
            props.triggerNextStep({ trigger: 'PatientEmail' })
        // }
        //  else {
        // }
    }
    return (<>
            {
                
            (keyPress==false)
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


export const  TimeSlotPicker = (props) =>{
    const [timeSlot, settimeSlot] = useState('');
    const [flag,setFlag] = useState(false);
    const  handleTimeChange = (time) => {
        settimeSlot(time);
        setFlag(true);
        props.triggerNextStep({ trigger: 'Thanking_msg' })
    }
    return (
        <>
        
            {timeSlot =='' ?
            <div style={{height:"auto"}}>
            <TimePicker onChange={handleTimeChange}  value={timeSlot}  isOpen={false} hourPlaceholder="HH" minutePlaceholder="MM"  shouldOpenClock={({ reason="focus" }) => false} />
            </div>
              :
              <div>Time-slot : {timeSlot}</div>}
        </>
    );
}


export const Loader = (props) =>{
    return (<>
    <div >
   <center><ReactLoading type="spinningBubbles" color="#f5f8fb"  height={30} width={50} /></center>
    <p>please wait... while we book the appointment for you.</p>
    </div>
    
    </>);
}