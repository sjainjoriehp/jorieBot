

import React, { useEffect, useState } from 'react'

export const Greetings = () => {

    let [greetMsg, setGreetMsg] = useState('Good Morning')
    function Greet() {
        var today = new Date()
        var curHr = today.getHours()
 
        if (curHr < 12) {
            setGreetMsg('Good Morning')
        } else if (curHr < 18) {
            setGreetMsg('Good Afternoon')
        } else {
            setGreetMsg('Good Evening')
        }
    }


    useEffect(()=>{
        Greet()
        console.log("Ren")
    },[greetMsg])
 
    

  return (
    <div>Hi {greetMsg}!</div>
  )
}


