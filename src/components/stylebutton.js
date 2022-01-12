import React from "react"
import "../css/buttonstyle.css"
import {Nav} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPastafarianism } from '@fortawesome/free-solid-svg-icons'

function stylebutton(){
    return(<>
        <div className="container1">
   <div className="btn-style">
      <div className="shop-now"><Nav.Link style={{color:"aliceblue"}} href="/blog"><FontAwesomeIcon icon={faPastafarianism } /> Dive</Nav.Link></div>
      <div className="snowflake-grid to-left">
         <div className="snowflake-item border-bottom border-right">
            <div className="sub-items border-right border-bottom pull-down">
               <div className="m-w-15 m-h-15 border-right border-bottom m-3"></div>
            </div>
         </div>
         <div className="snowflake-item border-bottom border-left">
            <div
               className="sub-items border-right border-bottom r-90 pull-down-right"
               >
               <div className="m-w-15 m-h-15 border-right border-bottom m-3"></div>
            </div>
         </div>
         <div className="snowflake-item border-top border-right">
            <div className="sub-items border-right border-bottom r-270 pull-right">
               <div className="m-w-15 m-h-15 border-right border-bottom m-3"></div>
            </div>
         </div>
         <div className="snowflake-item border-top border-left">
            <div className="sub-items border-right border-bottom r-180 pull-left">
               <div className="m-w-15 m-h-15 border-right border-bottom m-3"></div>
            </div>
         </div>
      </div>
      <div className="snowflake-grid to-right">
         <div className="snowflake-item border-bottom border-right">
            <div className="sub-items border-right border-bottom pull-down">
               <div className="m-w-15 m-h-15 border-right border-bottom m-3"></div>
            </div>
         </div>
         <div className="snowflake-item border-bottom border-left">
            <div
               className="sub-items border-right border-bottom r-90 pull-down-right"
               >
               <div className="m-w-15 m-h-15 border-right border-bottom m-3"></div>
            </div>
         </div>
         <div className="snowflake-item border-top border-right">
            <div className="sub-items border-right border-bottom r-270 pull-right">
               <div className="m-w-15 m-h-15 border-right border-bottom m-3"></div>
            </div>
         </div>
         <div className="snowflake-item border-top border-left">
            <div className="sub-items border-right border-bottom r-180 pull-left">
               <div className="m-w-15 m-h-15 border-right border-bottom m-3"></div>
            </div>
         </div>
      </div>
   </div>
</div>
    </>)
}

export default stylebutton