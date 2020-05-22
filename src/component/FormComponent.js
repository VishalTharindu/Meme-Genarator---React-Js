import React  from "react"

const FormComponent = prop =>{

        return(
            <form>
                <input 
                    type="text" 
                    name="firstname" 
                    placeholder="firstname" 
                    onChange={prop.candleChange}
                />
                <br />
                <input 
                    type="text" 
                    name="lastname"
                    placeholder="lastname" 
                    onChange={prop.candleChange}
                 />
                <br />
                 <input 
                    type="checkbox"
                    name="iKnowyou" 
                    checked={prop.data.iKnowyou} 
                    onChange={prop.candleChange} 
                />
                <br />
                <lable>
                    <input 
                        type="radio"
                        name="gender"
                        value="male" 
                        checked={prop.data.gender === "male"} 
                        onChange={prop.candleChange} 
                    />Male
                </lable>
                <lable>
                    <input 
                        type="radio"
                        name="gender" 
                        value="female"
                        checked={prop.data.gender === "female"} 
                        onChange={prop.candleChange} 
                    />
                </lable>Female
                <br />
                <lable>
                    Favourite Colour
                    <select 
                    name="fvColour"
                    onChange={prop.candleChange}
                    >
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                        <option value="yellow">yellow</option>
                        <option value="white">white</option>
                    </select>
                </lable>
                <h1>{prop.data.firstname} {prop.data.lastname}</h1>
                <h1>Your are a {prop.data.gender}</h1>
                <h1>your favourite colour is  {prop.data.fvColour}</h1>
            </form>
        )
        
    }

export default FormComponent