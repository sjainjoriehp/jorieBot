import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


export const DateComp = (props) => {
    const [dateState, setDateState] = useState("")
    const changeDate = (e) => {
        setDateState(e)
        CallTrigger();
    }
    let Dob = dateState ? moment(dateState).format('MM/DD/YYYY') : '';
    console.log(`appointment date: ${Dob}`);
    const CallTrigger = (e) => {
        props.triggerNextStep({ trigger: 'Patient_addTriger' })
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
        props.triggerNextStep({ trigger: 'bot_gender' })
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
        // if(phone.length <10) { return false; }
        SetkeyPress(true);
        if(props?.steps?.HaveInsurance?.value) {
            props.triggerNextStep({ trigger: 'InsuranceID' })
        }
         else {
            props.triggerNextStep({ trigger: 'lastTriger' })
        }
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