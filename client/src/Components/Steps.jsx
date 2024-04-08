import props from 'prop-types';
import moment from 'moment';
import { DateComp, ApptDate, MobileNum, TimeSlotPicker, Loader } from './SubComp/CommonComp';
import { useState } from 'react';
import { Greetings } from './SubComp/Greetings';
import { BookApointmentBtn, GifGreatAfterBtn, GifHighFiveAfterBook, UserInputValuesTable } from './SubComp/CustomService';
function SendEmail(props) {
    const { steps } = props;
    let obj = {
        'email': steps?.Ask_email.message,
        'query': steps?.your_question.message,
        'name': steps?.user_input_for_name.message
    }
    localStorage.setItem('botValues', JSON.stringify(obj));
    return null;
}

SendEmail.props = {
    steps: props.object,
};

SendEmail.defaultProps = {
    steps: undefined,
};




const BotData = () => {
    const getData = localStorage.getItem('botValues');
    const ParseData = JSON.parse(getData);
   
    // console.log(ParseData?.name);
    return (
        <>
            <div className="mainDataContainer">
                <h3>Basic Detail:-</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>{ParseData?.name}</td>
                        </tr>

                        <tr>
                            <td>Email:</td>
                            <td>{ParseData?.email}</td>
                        </tr>

                        <tr>
                            <td>Your Query:</td>
                            <td>{ParseData?.query}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    );
}

export const steps = [
    {
          id:"InitialMsg",
          asMessage:true,
          component:<Greetings/>,
          trigger:"Greet"
    },
    {
        id: "Greet",
        message: "I’m OneD, your friend and help through our services. Let me setup an appointment for you.",
        trigger: "Greet1"

    },
    {
        id: "Greet1",
        message: "Thank you for choosing our healthcare services.",
        // trigger: "AskName",
        trigger:"BookBtn"
    },
    {
        id:"BookBtn",
        component: <BookApointmentBtn />,
        // asMessage:true

    },
    {
        id:"GreateMsg",
        component: <GifGreatAfterBtn />,
        // asMessage:true

    },

    {
        id: "AskName",
        message: "Please enter Patient’s Full Name (Last Name, First Name)",
        trigger: "user_input_for_name"
    },
    {
        id: "user_input_for_name",
        user: true,
        validator: (value) => {
            let validName = value.trim().replace(/\s{2,}/g, ' ').split(" ");
            // console.log(validName);
            if (value == '') {
                return 'Patient name can not be blank.';
            }

            else if (validName?.length < 2) {
                // console.log(validName);
                return "Enter a valid name as per in example format.";
            } else { return true; }
        },
        trigger: "user_Dob"
    },
    {
        id: "user_Dob",
        message: "Please enter Patient’s Date of Birth (MM/DD/YYYY)",
        trigger: "Patinet_DOB"
    },
    {
        id: "Patinet_DOB",
        component: <DateComp />,
        hideInput: true,
    },

    {
        id: "user_gender",
        message: "Please enter Patient’s Gender ",
        trigger: "Gender"
    },
    {
        id: "Gender",
        options: [

            {
                id: "gendr",
                value: "male",
                label: "Male",
                trigger: "PAddress"
            },
            {
                id: "gendr",
                value: "female",
                label: "Female",
                trigger: "PAddress"
            },
            {
                id: "gendr",
                value: "transgender",
                label: "Transgender",
                trigger: "PAddress"
            }

        ],

    },

    {
        id: "PAddress",
        message: "Please enter Patient’s Address (Full Address/ Zip Code/ State/ Country)",
        trigger: "User_input_address"
    },
    {
        id: "User_input_address",
        user: true,
        validator: (value) => {
            if (value == '') {
                return 'Patient address can not be blank.';
            }

            else { return true; }
        },
        trigger: "Patients_phone",

    },
    {
        id: "Patients_phone",
        message: "Please enter Patient’s Phone Number ",
        trigger: "User_input_phone"
    },
    {
        id: "User_input_phone",
        component: <MobileNum />
    },
    {
        id: "PatientEmail",
        message: "Please enter Patient’s Email Address ",
        trigger: "User_email",
    },
    {
        id: 'User_email',
        validator: (value) => {
            let result = value.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
            if (!result) {
                return 'Please enter valid email'
            }
            return true;
        },
        user: true,
        trigger: "Patient_HI"
    },
    {
        id: "Patient_HI",
        message: "Does Patient have health insurance ?",
        trigger: "User_HI"
    },
    {
        id: "User_HI",
        options: [
            {
                id: "HI_bool",
                value: true,
                label: "Yes",
                trigger: "Patient_HI_name"
            },
            {
                id: "HI_bool",
                value: false,
                label: "No",
                trigger: "Patient_HI_name"
            },
        ],
    },
    {
        id: "Patient_HI_name",
        message: "Please provide the Insurance name ",
        trigger: "User_input_HI_name"
    },
    {
        id: "User_input_HI_name",
        user: true,
        validator: (value) => {
            if (value == '') {
                return "Patient's insurance provider can not be blank.";
            }

            else { return true; }
        },
        trigger: "HI_id"
    },

    {
        id: "HI_id",
        message: "Please enter Member ID ",
        trigger: "User_input_PHI_id",
    },

    {
        id: "User_input_PHI_id",
        user: true,
        trigger: "P_healthcareProvider"
    },
    {
        id: "Patient_secondary_Insurance",
        message: "Additionally, Does the patient have Secondary health insurance?",
        trigger: "User_input_secondary_Insurance"
    },
    {
        id: "User_input_secondary_Insurance",
        options: [
            {
                id: "Secoundry_InsuranceBool",
                value: true,
                label: "Yes",
                trigger: "Patient_secondary_Insurance_provider_name"
            },
            {
                id: "Secoundry_InsuranceBool",
                value: false,
                label: "No",
                trigger: "PVisiting"
            },
        ],

    },
    {
        id: "Patient_secondary_Insurance_provider_name",
        message: "please provide the Secondary insurance provider's name ?",
        trigger: "User_secondary_Insurance_provider_name"
    },
    {
        id: "User_secondary_Insurance_provider_name",
        user: true,
        trigger: "Patient_secondary_Insurance_Id"
    },
    {
        id: "Patient_secondary_Insurance_Id",
        message: "Great, may I know the insurance ID?",
        trigger: "User_secondary_Insurance_Id"
    },
    {
        id: "User_secondary_Insurance_Id",
        user: true,
        trigger: "Patient_Tertiary_Insurance"
    },
    {
        id: "Patient_Tertiary_Insurance",
        message: "Does the patient have Tertiary health insurance ?",
        trigger: "User_Tertiary_Insurance"
    },
    {
        id: "User_Tertiary_Insurance",
        options: [
            {
                id: "TIB",
                value: true,
                label: "Yes",
                trigger: "Patient_Tertiary_Insurance_provider_name"
            },
            {
                id: "TIB",
                value: false,
                label: "No",
                trigger: "PVisiting"
            },
        ],
    },
    {
        id: "Patient_Tertiary_Insurance_provider_name",
        message: "Furthermore,please provide the Tertiary insurance provider's name ?",
        trigger: "User_Tertiary_Insurance_provider_name"
    },
    {
        id: "User_Tertiary_Insurance_provider_name",
        user: true,
        trigger: "Patient_Tertiary_Insurance_Id"
    },
    {
        id: "Patient_Tertiary_Insurance_Id",
        message: "Great, may I know the insurance ID?",
        trigger: "User_Tertiary_Insurance_Id"
    },
    {
        id: "User_Tertiary_Insurance_Id",
        user: true,
        trigger: "PVisiting"
    },


    {
        id: "PVisiting",
        message: "Is this the patient's first visit, or is it a follow-up visit ?",
        trigger: "Validate_MRN"
    },
    {
        id: "Validate_MRN",
        options: [
            {
                id: "IS_MRN",
                value: false,
                label: "First Time Visit",
                trigger: "P_healthcareProvider"
            },
            {
                id: "IS_MRN",
                value: true,
                label: "Follow-up Visit",
                trigger: "P_healthcareProvider"
            },
        ],
    },
    {
        id: "P_healthcareProvider",
        message: "Do you have a Preferred Healthcare Provider ?",
        trigger: "Validate_HI_provider"
    },

    {
        id: "Validate_HI_provider",
        options: [
            {
                id: "Prefred_dr",
                value: true,
                label: "Yes",
                trigger: "P_HP_name"
            },
            {
                id: "Prefred_dr",
                value: false,
                label: "No",
                trigger: "Patient_DOV"
            },
        ]
    },
    {
        id: "P_HP_name",
        message: "Please enter the Provider Name",
        trigger: "Patient_appointmentDr"
    },
    {
        id: "Patient_appointmentDr",
        user: true,
        trigger: "Patient_DOV"
    },
    {
        id: "Patient_DOV",
        message: "Preferred Date of Appointment ",
        trigger: "User_DOV",
    },
    {
        id: "User_DOV",
        component: <ApptDate />
    },
    {
        id: "Patient_Time_slot",
        message: "Preferred Time of Appointment ",
        trigger: "User_TimeSlot"
    },
    {
        id: "User_TimeSlot",
        component: <TimeSlotPicker />,
        hideInput: true,

    },
    {
        id:"UserInputValuesTable",
        component:<UserInputValuesTable/>

    },
    {
          id:"TVCMsg",
          message:"Please confirm all details which you have provided.",
          trigger:"TVCMsg1"

    },
    {
          id:"TVCMsg1",
          message:"Do you want to continue for booking ?" ,
          trigger:"TableValueConfirmation"   
    },
     {
        id:"TableValueConfirmation",
        options: [
            {
                id: "TBC",
                value: true,
                label: "Yes",
                trigger: "Thanking_msg"
            },
            {
                id: "TBC",
                value: false,
                label: "No",
                trigger: "AskName"
            },
        ]
     },

    {
        id: "Thanking_msg",
        message: "Thank you for providing your information. Please wait while we are scheduling your appointment.",
        trigger: "thnaking_msg2"
    },
    {
        id: "thnaking_msg2",
        // message:"please wait.....while we book the appointment for you.",
        component: <Loader />,
        asMessage: true,
       
    },
    {
           id:"HighFiveMsg",
           component:<GifHighFiveAfterBook/>,
        //    asMessage:true
    },
    {
        id:"thnaking_msg3",
        message:"Check your inbox for my confirmation email.",
        trigger:"thnaking_msg4"
    },
    {
        id:"thnaking_msg4",
        message:" See you then! ",
        trigger:"thnaking_msg5"
    },
    {
        id:"thnaking_msg5",
        message:" Happy to help you.",
        end:true
    }


    // {
    //     id: "INS_boolVal",
    //     message: "Appt Date/DOS ?",
    //     trigger: "userInput_appt"
    // },
    // {
    //     id: "userInput_appt",
    //     component: <ApptDate />,
    //     waitAction: true,
    //     // asUser:true,
    //     // user: true,
    //     // trigger: "bot_gender"

    // },

    // {
    //     id: "bot_gender",
    //     message: "please select Gender..",
    //     trigger: "Gender"
    // },

    // {
    //     id: "Gender",
    //     options: [

    //         {
    //             id: "yGm",
    //             value: "male",
    //             label: "Male",
    //             trigger: "DobTrig"
    //         },
    //         {
    //             id: "yGf",
    //             value: "female",
    //             label: "Female",
    //             trigger: "DobTrig"
    //             // trigger: ""
    //         }

    //     ],

    // },
    // {
    //     id: "DobTrig",
    //     message: "Please Enter DOB (Format should be  MM/DD/YYYY).",
    //     trigger: "User_input_DOB"
    // },
    // {
    //     id: "User_input_DOB",
    //     component: <DateComp />,
    //     hideInput:true,
    // },
    // {
    //     id: "Patient_addTriger",
    //     message: "Patient Address ?",
    //     trigger: "User_input_PatientAddress"
    // },
    // {
    //     id: "User_input_PatientAddress",
    //     user: true,
    //     trigger: "Patient_phone"
    // },
    // {
    //     id: "Patient_phone",
    //     message: "Enter your Phone number.",
    //     trigger: "User_input_PhoneNumber"
    // },

    // {
    //     id: "User_input_PhoneNumber",
    //     // user: true,
    //     // trigger: ""
    //     component: <MobileNum/>
    // },
    // {
    //     id:"InsuranceID",
    //     message:"Please Enter InsuranceID",
    //     trigger:"User_input_InsuranceID"
    // },
    // {
    //     id:"User_input_InsuranceID",
    //     user:true,
    //     trigger:"PrimaryInsurance",
    // },
    // {
    //     id: "PrimaryInsurance",
    //     message:"Do you have Primary Insurance ?",
    //     // trigger: "YesNo_PrimaryInsurance"
    // },
    // // {
    // //     id:"YesNo_PrimaryInsurance",
    // //     options:[
    // //         {
    // //             id: "",
    // //             value: "male",
    // //             label: "Male",
    // //             // trigger: "DobTrig"
    // //         },
    // //         {
    // //             id: "yGf",
    // //             value: "female",
    // //             label: "Female",
    // //             // trigger: ""
    // //         }
    // //     ],
    // // },

    // {
    //     id:"lastTriger",
    //     message:"Pleasee wait for bot response...",
    //     end: true
    // }

    // {

    //     id: "customComp",
    //     component: <CustomComponent />, // Mention Custom component here
    //     asMessage: true,
    //     trigger: "",
    // },


    // {
    //   id: "Ask_email",
    //   user: true,
    //   trigger: "get_email"
    // },

    // {
    //   id: "get_email",
    //   message: "ok, {previousValue} !! Type your  Query now.",
    //   trigger: "your_question"
    // },
    // {
    //   id: "your_question",
    //   validator: (value) => {
    //     if (value == '') {
    //       return 'Query Can not be a blank.';
    //     }
    //     return true;
    //   },
    //   user: true,
    //   trigger: "send_mail"
    // },


    // {
    //   id: "send_mail",
    //   // message: "ok,  there is your message : '{previousValue}' !! The support team will get back to you as soon as possible",
    //   message: "ok, The support team will get back to you as soon as possible",
    //   trigger: "thelast"
    // },


    // {
    //   id: "thelast",
    //   component: (
    //     <SendEmail />
    //   ),
    //   trigger: "endlist",
    //   // asMessage: true,

    // },



    // {
    //   id: "endlist",
    //   component: (
    //     <BotData />
    //   ),
    //   end: true
    // }
];