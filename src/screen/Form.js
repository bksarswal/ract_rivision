
import { useState } from "react";



function Form(){

  

    var [data, setData]= useState([])

    var [values, setValues]= useState({

        name:"",
        email:"",
        mobile:"",
        password:"",
        course:"",
        image:"",
        temp_img:""
    });

    const handelInpute= (e)=>{

  console.log( e.target.name, e.target.value);
  setValues({ ...values , [e.target.name] : e.target.value})

    }

const handlClick = (e)=>{
    e.preventDefault()
    console.log(values);


    setData( [data ,values]);
}


const handleDropdown= (e)=>{

console.log(e.target.value);

setValues({...values ,"course" : e.target.value})

}


const handleFilepicker= (e)=>{


    console.log(e.target.files);

    setValues({ ...values, ['image']: e.target.files, ['temp_img']:  URL.createObjectURL(e.target.files[0])})



   
}

const Delete = (i)=>{
    let temp = data;

    temp.splice(i,1);
    setData([...temp])
}
    return(


        <form>


            <input  name="name"  onChange={handelInpute} placeholder="enter your nsme"/>

            <br></br>
            <input name="email"  onChange={handelInpute}  placeholder="enter your email"/>
            <br></br>
            <input  name="mobile" onChange={handelInpute}  placeholder="enter your mobile"/>
            <br></br>
            <input name="password" onChange={handelInpute}  placeholder="enter your password"/>
            <br></br>

            <select  onChange={handleDropdown}>


                <option value={null} >select One</option>
                <option value="c++">C++</option>
                <option  value="js">js</option>
                <option  value="c">c</option>
            </select>


           <input onChange={handleFilepicker}  type="file"/>
           <img src={values.temp_img}   style={{ width:"100px" ,height:"100px  " }}/>

            <button  onClick={handlClick} > submmit</button>



        <table  class="table  table-borderd">


            <tr class="bg-primary">
                <th>Sr.No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>MObile</th>
                <th>Course</th>
                <th>Image</th>
                <th>Delete</th>
            </tr>

            {data.map((d,i)=>(

                     <tr class="bg-warning ">

                        <td>{i+1}</td>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td>{d.mobile}</td>
                        <td>{d.course}</td>
                        <td ><img    style={{width:'100px',  height:'100px'}} src= {d.temp_img}/></td>
                        <td> <button  onClick={()=>(Delete(i))}>  Delete</button></td>



                     </tr>

            ))}a
        </table>

        </form>
    )
}


export default Form;