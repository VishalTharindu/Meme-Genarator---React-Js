import React, {Component} from "react"

// const ToDoItem = props => {
//     console.log(props)
//     return(
//         <div className="containerx">
//             <p>{props.id}</p>          
//             <p><span><input type="checkbox" checked={props.status}/></span> : {props.text}</p>
//             <p>{props.status}</p>
//         </div>
//     )
// }
// export default ToDoItem

class ToDoItem extends Component{

    constructor(){
        super()
        this.state = {
            status: false
        }
    }

    complete(){

        this.setState(preState =>{
            return{
                status:!preState.status
            }
        },() =>{
            console.log(this.state.status)
        })
    }


    render(){
        const comleteStyle={
            fontStyle :"bold"
        }
        return(
            <div className="containerx">
                <p>{this.props.id}</p>          
                <input type="checkbox" onClick={() => this.complete()} checked={this.state.status}/><p style={this.state.status ? {comleteStyle} : null}> : {this.props.text}</p>
                <p>{this.state.status}</p>
            </div>
        )
    }
}

export default ToDoItem