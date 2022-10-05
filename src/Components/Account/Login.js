import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './LoginSignup.css';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  
  async function loginUser(e){
     e.preventDefault()
     setEmail('')
     setPassword('')
     navigate('/home')

     const response =await fetch('http://localhost:3000/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email,
        password
      }),
     })
     console.log(email,password)
  }
  return (
    <>
    <Navbar style={{backgroundColor:'rgb(246, 214, 185)',height:'12vh'}}>
        <Container>
          <Navbar.Brand href="#home" className='js-name'>JS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link  className='nav-item' to='/'>Sign Up</Link></Nav.Link>
            
            
          </Nav>
        </Container>
      </Navbar>
    <div>
      <Form className='Form-account' onSubmit={loginUser}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="email" id='email' placeholder="Email" onChange={(e)=>setEmail(e.target.value)}  value={email} required/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="password" id='password'  placeholder=" confirm password" onChange={(e)=>setPassword(e.target.value)} value={password} required/>
        </Col>
      </Form.Group>
   
      <fieldset>
       
      </fieldset>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit" className='btn' style={{backgroundColor:'rgb(246, 214, 185)',color:'black',border:'none'}}>Login</Button>
        </Col>
      </Form.Group>
    </Form>
    
      </div>

     
      </>
  )
}

export default Login;