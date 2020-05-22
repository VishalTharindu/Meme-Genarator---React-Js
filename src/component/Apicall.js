import React, {Component} from "react"

class Apicall extends Component{

    constructor(){
        super()
        this.state = {
            loading : false,
            cractor : {}
        }
    }

    componentDidMount(){
            this.setState({loading:true})
            fetch("https://swapi.dev/api/people/1")
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        loading:false,
                        cractor : data
                    })
                })

    }
    render(){
        let desplyText = this.state.loading ? "loding......" :this.state.cractor.name
        return(

            <h1>{desplyText}</h1>
        )
    }
}

export default Apicall
