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

    const ImageChanger=()=>{
           
        console.log("ImageChangerCalled")
        // var cols = document.getElementsByClassName('col1');
        // cols.style.backgroundImage  = url('../')
    }
     

    return (
        <>
        <div style={{display:ChangeVisibility}} className="greetingBox" onMouseOver={AddElement} onMouseOut={RemoveElement}  onClick={ImageChanger} >{BotImgLable}</div>
       <img  className="botImgLb"   src={JorieBot} onMouseOver={AddElement} onMouseOut={RemoveElement} alt='Chat Icon'/>
        </>
    );
};
export default ChatIcon;

