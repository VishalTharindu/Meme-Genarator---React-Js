import React from "react"

const ProductView = prop =>{
    return(
        <div className="">
            <div className="card_body">
                <p>Name : {prop.name}</p>
                <p>Price : {prop.price}</p>
                <hr></hr>
            </div>
        </div>
    )
}
export default ProductView