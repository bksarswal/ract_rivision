import { useState } from "react";
import React from "react";

import { useNavigate } from "react-router-dom";

import Home from "../screen/Home";
import About from "../screen/About";
import Form from "../screen/Form";
import Remotdat from "../screen/Remotdat"






 function Navbar(){


  let Navigate= useNavigate();




  var [Mode, setMode]= useState("light");

const HandleMode = (e)=>{

  e.preventDefault()
  if(Mode=='light'){

    setMode('dark')
  }else{


    setMode('light')
  }
}
    return(
     

        <>
        <nav className={`navbar navbar-expand-lg navbar-${Mode} bg-${Mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link ${window.location.href.includes('/Home')? 'active':""}`} aria-current="page" onClick={()=>{Navigate("/Home")}}>Home</a>

        </li>
        <li className="nav-item">
          <a className={`nav-link ${window.location.href.includes('/About')? 'active':""}`}  onClick={()=>{Navigate("/About")}}>About</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${window.location.href.includes('/Form')? 'active':""}`}  onClick={()=>{Navigate("/Form")}}>Form</a>
        </li>
      
        <li className="nav-item">
          <a className={`nav-link ${window.location.href.includes('/Remotdat')? 'active':""}`}  onClick={()=>{Navigate("/Remotdat")}}>RemotData</a>
        </li>
      
      </ul>
      <form className="d-flex" role="search">
       
        <button   onClick={ (e)=>{ HandleMode(e)}} className="btn btn-outline-success" >


          {Mode=='light'? "Dark":"light"}



        </button>
      </form>
    </div>
  </div>
</nav>


        </>
    )
 }

 export default Navbar;