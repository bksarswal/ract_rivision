


import { useState } from "react";



var [Mode,setMode]= useState("light");

 function HandleMode(e){
        

    

    if(Mode==light){


        setMode= dark;
    }else{


        setMode=light;
    }

}
export default HandleMode;