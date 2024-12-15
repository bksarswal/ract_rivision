
import { useState } from "react";

// import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

import Routing from "./router/router";
import Navbar from "./Navbar/Navbar";



function App(){


    var [value,setvalue]=useState("");
    function HandeleInpute(e){

     
      

      setvalue(e.target.value);

   

    }

return(


    // <>
    
    // <input   placeholder="enter yoyur name  "  onChange={HandeleInpute}/>
    // <h1>app component start</h1>
    //         <Home  value={value}/>

    // </>


    <BrowserRouter>
    
    <Navbar/>
    <Routing/>

    
    
    </BrowserRouter>
)

}

export default App;


