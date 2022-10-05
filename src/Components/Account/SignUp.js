import React, { useState } from 'react';
import './LoginSignup.css';
import './LoginSignup.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './LoginSignup.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function SignUp() {
  const navigate = useNavigate();
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[confirmPassword,setConfirmPassword]=useState('');
console.log(name +'why though')

  async function registerUser(e){
     e.preventDefault()
     setName('')
     setEmail('')
     setPassword('')
     setConfirmPassword('')
     navigate('/Home');

  const response =await fetch('http://localhost:3000/register',{
         method:'POST',
         headers:{
           'Content-Type':'application/json'
         },
         body:JSON.stringify({
           name,
           email,
           password
         }),
        })
  
  //    let errors=[];
  //    if(!name||email||password||confirmPassword){
  //      errors.push({message:'Please enter all fields'})
  //    }
  //    if(password.length<6 ){
  //      errors.push({message:'Password should be at least 6 characters'})
  //    }
  //    if (password != confirmPassword){
  //      errors.push({message:'Passwords do not match'})
  //    }
  //    if (errors >0){
  //   alert(`Error ${errors.message}`)
  //    }else{
  //      const response =await fetch('http://localhost:3000/register',{
  //        method:'POST',
  //        headers:{
  //          'Content-Type':'application/json'
  //        },
  //        body:JSON.stringify({
  //          name,
  //          email,
  //          password
  //        }),
  //       })
  //       const data =await response.json()
  //       console.log('Welcome'+ data)
  //    }
   }

  
  return (
    <>
    <Navbar style={{backgroundColor:'rgb(246, 214, 185)',height:'12vh'}}>
        <Container>
          <Navbar.Brand href="#home" className='js-name'>JS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link  className='nav-item' to='/login'>Login</Link></Nav.Link>
            
            
          </Nav>
        </Container>
      </Navbar>
    <div>
      <Form className='Form-account' onSubmit={registerUser}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Name
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="text" id='name' placeholder="Name" onChange={(e)=>setName(e.target.value)}  value={name} required/>
        </Col>
      </Form.Group>
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
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Confirm Password
        </Form.Label>
        <Col sm={6}>
          <Form.Control type="password" id='confirmPassword' placeholder="Confirm Password" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} required/>
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
          <input type="submit" className='btn' style={{backgroundColor:'rgb(246, 214, 185)',color:'black',border:'none'}} value='Sign Up'/>
        </Col>
      </Form.Group>
    </Form>
    
      </div>

    
      </>
  )
}

export default SignUp;