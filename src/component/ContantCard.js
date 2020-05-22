import React from "react"

const ContantCard = prop =>{
    return(
        <div>
            <p>Name : {prop.name}</p>
            <p>Phone No : {prop.phone}</p>
            <p style={{color: !prop.email && "red"}}>Email : {prop.email}</p>
            <hr></hr>
        </div>
    )
}
export default ContantCard