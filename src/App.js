import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import Header from './component/Headre'
import MeameGenarator from './component/MeameGenarator'
function App() {
  return (
    <div className="container">
      <Card style={{ width: '50rem' }}>
        
        <Card.Body>
          <Card.Title className="headersty"><Header /></Card.Title>
          <Card.Text>
              <MeameGenarator />
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
  );
}

export default App;
