import props from 'prop-types';
import moment from 'moment';
import { DateComp, ApptDate, MobileNum, TimeSlotPicker, Loader } from './SubComp/CommonComp';
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
        id: "Greet",
        message: "Good day! To assist you better,",
        trigger: "AskName",
        // trigger:"User_TimeSlot"
    },

    {
        id: "AskName",
        message: "may I kindly ask for the complete name of the patient ? (Last Name, First Name)",
        trigger: "user_input_for_name"
    },
    {
        id: "user_input_for_name",
        user: true,
        validator: (value) => {
            let validName = value.trim().replace(/\s{2,}/g, ' ').split(" ");
            console.log(validName);
            if (value == '') {
                return 'Patient name can not be blank.';
            }

            else if (validName?.length < 2) {
                console.log(validName);
                return "Enter a valid name as per in example format.";
            } else { return true; }
        },
        trigger: "user_Dob"
    },
    {
        id: "user_Dob",
        message: "Please provide the patient's date of birth?",
        trigger: "Patinet_DOB"
    },
    {
        id: "Patinet_DOB",
        component: <DateComp />,
        hideInput: true,
    },

    {
        id: "user_gender",
        message: "Please select patient's Gender?",
        trigger: "Gender"
    },
    {
        id: "Gender",
        options: [

            {
                id: "Pmale",
                value: "male",
                label: "Male",
                trigger: "PAddress"
            },
            {
                id: "pfemale",
                value: "female",
                label: "Female",
                trigger: "PAddress"
            },
            {
                id: "ptrans",
                value: "transgender",
                label: "Transgender",
                trigger: "PAddress"
            }

        ],

    },

    {
        id: "PAddress",
        message: "Please enter Patient’s Address  ? (Format should be : Full Address/Zip Code/State/Country)",
        trigger: "User_input_address"
    },
    {
        id: "User_input_address",
        user: true,
        trigger: "Patients_phone",

    },
    {
        id: "Patients_phone",
        message: "Please enter Patient’s Phone Number ?",
        trigger: "User_input_phone"
    },
    {
        id: "User_input_phone",
        component: <MobileNum />
    },
    {
        id: "PatientEmail",
        message: "Please enter Patient’s Email Address.",
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
        message: "Does the patient have health insurance?",
        trigger: "User_HI"
    },
    {
        id: "User_HI",
        options: [
            {
                id: "HIY",
                value: true,
                label: "Yes",
                trigger: "Patient_HI_name"
            },
            {
                id: "HIN",
                value: false,
                label: "No",
                trigger: "PVisiting"
            },
        ],
    },
    {
        id: "Patient_HI_name",
        message: "What is the name of the patient's insurance provider?",
        trigger: "User_input_HI_name"
    },
    {
        id: "User_input_HI_name",
        user: true,
        trigger: "HI_id"
    },

    {
        id: "HI_id",
        message: "Please provide insurance ID for the patient?",
        trigger: "User_input_PHI_id",
    },
    {
        id: "User_input_PHI_id",
        user: true,
        trigger: "PVisiting"
    },
    {
        id: "PVisiting",
        message: "are you visiting for the first time, or is it a follow-up visit ?",
        trigger: "Validate_MRN"
    },
    {
        id: "Validate_MRN",
        options: [
            {
                id: "NMRN",
                value: false,
                label: "First Time Visit",
                trigger: "P_healthcareProvider"
            },
            {
                id: "YMRN",
                value: true,
                label: "Follow-up Visit",
                trigger: "P_healthcareProvider"
            },
        ],
    },
    {
        id: "P_healthcareProvider",
        message: "Do you have a preferred healthcare provider?",
        trigger: "Validate_HI_provider"
    },

    {
        id: "Validate_HI_provider",
        options: [
            {
                id: "YHP",
                value: true,
                label: "Yes",
                trigger: "P_HP_name"
            },
            {
                id: "NHP",
                value: false,
                label: "No",
                trigger: "Patient_DOV"
            },
        ]
    },
    {
        id: "P_HP_name",
        message: "Please specify your healthcare provider ?",
        trigger: "User_input_Patient_HP"
    },
    {
        id: "User_input_Patient_HP",
        user: true,
        trigger: "Patient_DOV"
    },
    {
        id: "Patient_DOV",
        message: "Please select Preferred Date of Visit ?",
        trigger: "User_DOV",
    },
    {
        id: "User_DOV",
        component: <ApptDate />
    },
    {
        id: "Patient_Time_slot",
        message: "Please provide Preferred Time-slot ?",
        trigger: "User_TimeSlot"
    },
    {
        id: "User_TimeSlot",
        component: <TimeSlotPicker />,
        hideInput: true,

    },
    {
        id: "Thanking_msg",
        message: "Thank you for your time, we have all the information we need...",
        trigger: "thnaking_msg2"
    },
    {
        id: "thnaking_msg2",
        // message:"please wait.....while we book the appointment for you.",
        component: <Loader />,
        asMessage: true,
        end: true
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