import React, {Component} from "react"

function MyInfo(){
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    const style = {
        fontSize:100
    }

    if (hours < 12) {
        timeOfDay = "Morning"
        style.color ="green"
    }else if(hours >= 12 && hours < 17){
        timeOfDay = "Afternoon"
        style.color ="yellow"
    }else{
        timeOfDay = "Night"
        style.color ="red"
    }

    return(
        <div>
            <h1>Hello Vishal</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
            <h1 style={style}>Good {timeOfDay}</h1>
        </div>
    )
}

export default MyInfo