import React, { useState } from "react";
import JorieBot from '../../resources/JorieBot.png'
const ChatIcon = () => {
    const [ChangeVisibility,setChangeVisibility] = useState('none');
    const BotImgLable = "Your OrthOne assitant is here to help you!";
    const AddElement = () =>{
        setChangeVisibility('block');
    }
    const RemoveElement = ()=>{
        setChangeVisibility('none');
    }
    return (
        <>
        <div style={{display:ChangeVisibility}} className="greetingBox" onMouseOver={AddElement} onMouseOut={RemoveElement}>{BotImgLable}</div>
       <img  className="botImgLb"   src={JorieBot} onMouseOver={AddElement} onMouseOut={RemoveElement} alt='Chat Icon'/>
        </>
    );
};
export default ChatIcon;

