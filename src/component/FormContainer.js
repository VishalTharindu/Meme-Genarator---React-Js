import React, {Component} from "react"
import FormComponent from './FormComponent'

class FormContainer extends Component{

    constructor(){
        super()
        this.state ={
            firstname :"",
            lastname :"",
            iKnowyou : false,
            gender:"",
            fvColour:""
            
        }

        this.candleChange = this.candleChange.bind(this)
    }

    candleChange(event){

        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name] : checked}) : this.setState({
            [name] : value
        })
    }
    render(){
        return(

            <FormComponent
                candleChange = {this.candleChange}
                data={this.state}
            /> 
        )
        
    }
}

export default FormContainer