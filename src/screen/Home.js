import { useEffect,useState } from "react";

import { data } from "react-router-dom";

function Home({value}){


//    var [count, setCount]= useState(0);
//    var [arr, setArr]= useState([]);



//    useEffect(()=>{


// fetch('http://localhost:9876/user/getAlluser').then((result)=> result.json()).then((data)=>{



//     setArr([...arr,...data])



// })

//    },[count])

    return(

        <>
        <h1> home component: {value}</h1>
      
          {/* {arr.map((d,i)=>(
            <>

            <h1>{d.title}</h1>

           </>
          ))} */}
              

              

       
        </>
    )
}


export default Home;