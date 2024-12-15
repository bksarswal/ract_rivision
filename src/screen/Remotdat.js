

import { useEffect ,useState } from "react";









function Remotdat(){


    var [arr,setArr]= useState([]);




    useEffect(()=>{
    
    
    fetch('https://jsonplaceholder.typicode.com/todos').then((res)=> res.json()).then((data)=>{
    
     
     setArr(data); 
        
    })
    
    
    
    
},[]);
    
    

return(


<>

<h1>Remodtata</h1>


<table  class="table  table-borderd">


    <tr class="bg-primary">

        <th>Sr.NO</th>
        <th>UserId</th>
        <th>Id</th>
        <th>Title</th>
       
    </tr>

    {arr.map((d,i)=>(

        <tr class="bg-warning "  >


            <td>{i+1}</td>
            <td>{d.userId}</td>
            <td>{d.id}</td>
            <td>{d.title}</td>
           
        </tr>
    ))}
</table>
</>


)
}


export default Remotdat