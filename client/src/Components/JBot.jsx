import React from "react";
import ChatBot from "react-simple-chatbot";
import props from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { steps } from "./Steps";
import ChatIcon from "./SubComp/ChatIcon";
import userAvatar from '../resources/userAvatar.png'
import botAvatar from '../resources/botAvatar.jpg'

// get  the data  from local storage
function ChatModel() {
  const theme = {
    background: '#f5f8fb',
    // fontFamily: 'Helvetica Neue',
    fontFamily: 'monospace',
    headerBgColor: ' #0f89db',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#0f89db',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };


   
  const config = {
    width: "500px",
    // recognitionEnable:true,
    placeholder: 'Chat with bot',
    hideSubmitButton: false,
    height: "500px",
    floating: true,
    // opened:true,
    floatingIcon: <ChatIcon />,
     botAvatar: botAvatar,
    userAvatar: userAvatar,
  };

  return <><ThemeProvider theme={theme}>   <ChatBot
    steps={steps}  {...config} headerTitle={process.env.REACT_APP_PROJECT_NAME}  />  </ThemeProvider> </>;
}
export default ChatModel;

