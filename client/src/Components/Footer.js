import React from "react"
import {Link} from "react-router-dom"

function Footer(props){
    return(
        <div id="footer">
            <div id="leftColumn">
           <h6>@Emily Reynolds Designs</h6>
           </div>
           <div id="rightColumn">
            <h3>Emily Reynolds, Doula</h3>
            <h3> Burlington VT</h3>
           </div>
           <div id="rightMostColumn">
            <a href="https://www.facebook.com/emily.reynolds.7146" className="fa fa-facebook"></a>
            <a href="https://twitter.com/vtinterocc" className="fa fa-twitter"></a>
            <a href="https://www.linkedin.com/in/emily-reynolds-csm%C2%AE-901339183/" className="fa fa-linkedin"></a>
           </div>
        </div>
    )
}
export default Footer