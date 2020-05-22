import React from 'react'

const Conditional = prop => {

    return(
        <div>
            {
                prop.Loding ?<div>
                    <button onClick={() => prop.checklogout()}>Logout</button><h1>You Have Login</h1>
                    </div>:
                    <div>
                    <h1>click here to Login</h1>
                    <button onClick={() => prop.checklogin()}>Logiin</button>
                    </div>
            }
        </div>
    )
}
export default Conditional