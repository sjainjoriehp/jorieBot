import props from 'prop-types';
import moment from 'moment';
import { DateComp, ApptDate, MobileNum } from './SubComp/CommonComp';
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
        message: "Hello, Welcome to Web Asist.",
        trigger: "AskName",
    },
    {
        id: "AskName",
        message: "Please type Patient Name ?",
        trigger: "user_input_for_name"
    },
    {
        id: "user_input_for_name",
        user: true,
        trigger: "ask_questions"
    },
    {
        id: "ask_questions",
        message: "Do you have Insurance ?",
        trigger: "HaveInsurance"
    },
    {
        id: "HaveInsurance",
        options: [

            {
                value: "no",
                label: "no",
                trigger: "INS_boolVal"
            },
            {
                value: "Yes",
                label: "Yes",
                trigger: "INS_boolVal"
            }

        ]
    },
    {
        id: "INS_boolVal",
        message: "Appt Date/DOS ?",
        trigger: "userInput_appt"
    },
    {
        id: "userInput_appt",
        component: <ApptDate />
        // user: true,
        // trigger: "bot_gender"

    },
    {
        id: "bot_gender",
        message: "please select Gender..",
        trigger: "Gender"
    },

    {
        id: "Gender",
        options: [

            {
                id: "yGm",
                value: "male",
                label: "Male",
                trigger: "DobTrig"
            },
            {
                id: "yGf",
                value: "female",
                label: "Female",
                trigger: "DobTrig"
                // trigger: ""
            }

        ],

    },
    {
        id: "DobTrig",
        message: "Please Enter DOB (Format should be  MM/DD/YYYY).",
        trigger: "User_input_DOB"
    },
    {
        id: "User_input_DOB",
        component: <DateComp />,
        // asMessage: true,
        // user: true,
        // validator: (value) => {
        //         if (moment(value, 'MM/DD/YYYY',true).isValid()) {
        //             return true;
        //         } else {
        //             return 'Please enter valid format.';
        //         }
        //       },
        // trigger: "Patient_addTriger"

    },
    {
        id: "Patient_addTriger",
        message: "Patient Address ?",
        trigger: "User_input_PatientAddress"
    },
    {
        id: "User_input_PatientAddress",
        user: true,
        trigger: "Patient_phone"
    },
    {
        id: "Patient_phone",
        message: "Enter your Phone number.",
        trigger: "User_input_PhoneNumber"
    },

    {
        id: "User_input_PhoneNumber",
        // user: true,
        // trigger: ""
        component: <MobileNum/>
    }

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