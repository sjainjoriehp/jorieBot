import React from "react";
// import BotImg from '../../../public/botImg.png';
// import {} from '../../Images/';
const ChatIcon = () => {
    const BotImgLable = "Welcome to OrthoOne, Click to get started.";
    return (
        <>
        <div className="greetingBox">{BotImgLable}</div>
       <img  style={{backgroundBlendMode: "lighten"}} src="https://icons.veryicon.com/png/128/education-technology/dr-ling-robot/robot-looking-down.png" width={100} height={100}/>
        </>
    );
};
export default ChatIcon;

