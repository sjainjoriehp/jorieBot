export const steps = [
    {
            id: "Greet",
            message: "Hi I'm JORIE BOT. I’m here to help you.",
            // trigger: "AskName",
             end: true,
          },
];




// const steps = [
//   {
//     id: "Greet",
//     message: "Hello, Welcome to our website",
//     trigger: "AskName",
//   },
//   {
//     id: "AskName",
//     message: "Please type your name?",
//     trigger: "user_input_for_name"
//   },
//   {
//     id: "user_input_for_name",
//     user: true,
//     trigger: "ask_questions"
//   },
//   {
//     id: "ask_questions",
//     message: "Hi {previousValue}, I am Tony the bot, How can i help you!",
//     trigger: "informations"
//   },
//   {
//     id: "informations",
//     options: [

//       {
//         value: "Not Now",
//         label: "Not Now",
//         trigger: "not_now"
//       },
//       {
//         value: "Contact or enquery",
//         label: "Contact or enquery",
//         trigger: "Contact"
//       }

//     ]
//   },
//   {
//     id: "not_now",
//     message: "You can close the chatbot or query us.",
//     trigger: "informations"
//   },

//   {
//     id: "Contact",
//     message: "Ok, first, enter your adress-mail",
//     trigger: "Ask_email"
//   },
//   {
//     id: "Ask_email",
//     user: true,
//     trigger: "get_email"
//   },

//   {
//     id: "get_email",
//     message: "ok, {previousValue} !! Type your  Query now.",
//     trigger: "your_question"
//   },
//   {
//     id: "your_question",
//     validator: (value) => {
//       if (value == '') {
//         return 'Query Can not be a blank.';
//       }
//       return true;
//     },
//     user: true,
//     trigger: "send_mail"
//   },


//   {
//     id: "send_mail",
//     // message: "ok,  there is your message : '{previousValue}' !! The support team will get back to you as soon as possible",
//     message: "ok, The support team will get back to you as soon as possible",
//     trigger: "thelast"
//   },


//   {
//     id: "thelast",
//     component: (
//       <SendEmail />
//     ),
//     trigger: "endlist",
//     // asMessage: true,

//   },

//   {
//     id: "endlist",
//     component: (
//       <BotData />
//     ),
//     end: true
//   }
// ];