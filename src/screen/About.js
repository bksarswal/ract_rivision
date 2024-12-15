
import { useState } from "react";

function About(){



    var  [count, setCount] =useState(0);


    function incer(){


       setCount( count++);
    }

    return(


        <><h1>About component  : {count}  </h1>
        
        <button  onClick={incer}> increger</button>
        </>
    )
}

export default About;