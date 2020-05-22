import React, {Component} from 'react'
import Conditional from './Conditional'

class PageLoarding extends Component{

    constructor(){
        super()
        this.state = {
            isLogin : false
        }
        this.Loginhandler = this.Loginhandler.bind(this)
    }


    Loginhandler(){
        this.setState(preState =>{
            return{
                isLogin : !preState.isLogin
            }

        },()=>{
            console.log(this.state.isLogin)
        })
    }

    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({

    //             isLoarding : false
    //         })
    //     }, 1500)
    // }

    render(){
        let buttonSatate = this.state.isLogin ? "Log out" : "Login"
        let currentState = this.state.isLogin ? "You Have Login" : "Click here to login"
        return(

                <div>
                    <h1>{currentState}</h1>
                    <button onClick={() => this.Loginhandler()}>{buttonSatate}</button>
                </div>
            // this.state.Loding ?<div>
            // <button onClick={() => this.Loginhandler()}>Logout</button><h1>You Have Login</h1>
            // </div>:
            // <div>
            // <h1>click here to Login</h1>
            // <button onClick={() => this.Loginhandler()}>Logiin</button>
            // </div>
        )
    }
}

export default PageLoarding