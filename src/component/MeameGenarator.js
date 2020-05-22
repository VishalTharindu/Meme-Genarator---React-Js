import React, {Component} from "react"
import Form from 'react-bootstrap/Form'
import { Button, FormGroup } from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure'
import { Col, Row } from 'react-bootstrap';

class MeameGenarator extends Component{

    constructor(){
        super()
        this.state ={
            toptext : "",
            buttomtext:"",
            randimg : "https://www.newshub.co.nz/dam/form-uploaded-images-ordered/2019/08/08/KNOWYOURMEME-sad-cat-crying-1120.JPG",
            allMemeimg : []
        }
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response =>{
                const {memes} = response.data
                console.log(memes[0])
                this.setState({allMemeimg:memes})
            })

            this.handelChange = this.handelChange.bind(this)
            this.handelSubmit = this.handelSubmit.bind(this)
    }

    handelChange(event){
        const {name, value} = event.target
        this.setState({[name] : value})
    }

    handelSubmit(event){
        event.preventDefault()
        const randNumb = Math.floor(Math.random() * this.state.allMemeimg.length)
        const randomimg = this.state.allMemeimg[randNumb].url

        this.setState({
            randimg : randomimg
        })
    }

    render(){
        return(
            <div>
                <Form onSubmit={this.handelSubmit}>
                    <Row>
                        <Col md={5}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Top Text</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="toptext" 
                                    placeholder="Top Text" 
                                    value={this.state.toptext}
                                    onChange={this.handelChange} 
                                />
                            </Form.Group>                     
                        </Col>
                        <Col md={5}>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Bottom Text</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    name="buttomtext" 
                                    placeholder="Buttom Text" 
                                    value={this.state.buttomtext}
                                    onChange={this.handelChange}
                                    />
                            </Form.Group>                 
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Button variant="danger" type="submit">Gen</Button>
                            </FormGroup>
                        </Col>
                    </Row>                       
                </Form>
                <Row>
                    <Col className="image-wrapper">
                        <div className="divstyle">
                            <h1 className="topText">{this.state.toptext}</h1>
                        </div>
                        <Figure>
                            <Figure.Image
                            width={500}
                            height={450}
                            alt="171x180"
                            src={this.state.randimg}
                            fluid  />                           
                        </Figure>                                         
                    </Col>
                </Row>
            </div>
        )
    }
}

export default MeameGenarator