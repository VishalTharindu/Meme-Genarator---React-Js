import React from "react"
import { Image, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const Header = props =>{
    return(
        <header>
            <Row variant="primary"> 
                <Col md={2}>
                    <Image src="https://i.kym-cdn.com/entries/icons/original/000/000/091/TrollFace.jpg" className="photo" rounded />
                </Col>
                <Col md={10}>
                    <p>MEME GENARATOR</p>
                </Col>
            </Row>
            
        </header>
    )
}

export default Header