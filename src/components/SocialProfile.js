import React from "react";
import profilePicture from "../images/jane.jpg";

const SocialProfile = () =>{
    return(
        <div className="profile_section">
          <img src={profilePicture} alt="Jane Odey's Picture" id="profile_img" width="300" height="300"/>
          <h1 id="twitter">Jane Odey</h1>
          <div id="slack" style={{visibility: "hidden"}}>JaneOdey</div>
      </div>
    )
}

export default SocialProfile