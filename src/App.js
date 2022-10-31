import React from "react";
import Footer from "./components/Footer";
import LinkPage from "./components/LinkPage";
import SocialFonts from "./components/SocialFonts";
import SocialProfile from "./components/SocialProfile";



function App(){
  return(
    <div className="bodyContent">
      <header >
        <p className="share" ></p>
      </header>
      <SocialProfile/>   
      <LinkPage/>
      <SocialFonts/>
      <Footer/>

    </div>
  )
}


export default App;
