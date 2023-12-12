import { useState } from "react"
function StepOne (){
  const [action, setAction]=useState({
    first:'',
    last:'',
    
  })
    return (
        <>
       <form action="">
            <label htmlFor="first">First Name:</label>
                <input type="text" name="first" placeholder="First Name" value={value.first}/>
                <br/><br/>
            <label htmlFor="last">Last Name:</label>
                <input type="text" id="last" placeholder="Last Name" value={value.last} />
            <button style={{margin:"10px"}}>Previous</button>
            <button onClick={()=>{setAction((c)=>c+1)}}>Next</button>
       </form>
        </>
    )
}

export default StepOne