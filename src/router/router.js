
import { Route, Routes } from "react-router-dom";

import Home from "../screen/Home";
import About from "../screen/About";
import Navbar from "../Navbar/Navbar";
import Form from "../screen/Form";
import Remotdat from "../screen/Remotdat";


function Routing(){




    return(

        <Routes>

        <Route>
           
           <Route path="/"   element={<Home/>}/>
           <Route path="/Home"   element={<Home/>}/>
           <Route path="/About"   element={<About/>}/>
        
       <Route path="/Form"  element={<Form/>}/>
       <Route path="/Navbar" element={<Navbar/>}/>
       <Route  path="/Remotdat" element={<Remotdat/>} />

        
    </Route>

        </Routes>


    )
}

export default Routing;