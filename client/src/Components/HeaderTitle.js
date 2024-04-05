
import React from 'react'
import headerLogo from '../resources/headerLogo.png'

export let HeaderTitle = () => {
  return (
    <>
      <div style={{ fontSize: "19px" }}>
        <pre  >Support Assistant<br />
          <div style={{ fontSize: "14px", marginLeft: "115px", color: "white" }} >
            <span style={{paddingRight:"3px", paddingTop: "3px", display:"block"}} ><img src={headerLogo} /></span>
            <span style={{ color: "#02FB11 " }}>●&nbsp;</span>Online     </div>
        </pre>

      </div>
    </>
  )
}
