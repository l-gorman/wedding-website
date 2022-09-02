import React from "react";
import { Form, Row, Col, Button} from "react-bootstrap";

import { useState, useEffect } from "react";


function Submit(props){

    console.log([
        props.attendance,
        props.firstName,
        props.surname,
        props.email,
        props.dietaryRequirements
        
    ]
    )

}



export default function RSVP(){

    let [attendance, setAttendace] = useState(null)
    let [firstName, setFirstName] = useState(null)
    let [surname, setSurname] = useState(null)

    let [email, setEmail] = useState(null)

    let [dietaryRequirements, setDietaryRequirements] = useState(null)

    useEffect(() => {
      console.log(attendance)
    
      
    }, [attendance])

    useEffect(() => {
        console.log(firstName)
      
        
      }, [firstName])
    






    return(
        <>

        <h1 className="header">RSVP</h1>

        <div className="text-boxes">
        <Form>
            <Form.Group className="mb-3">
            <Form.Check inline type="radio" name="horizontalRadio" label="I can make it" onClick={()=>{
                setAttendace(true)
            }} />
            <Form.Check inline type="radio" name="horizontalRadio" label="I can't I'm a loser" onClick={()=>{
                setAttendace(false)
            }}/>
            </Form.Group>
        <Row>
            <Col>
        <Form.Group  controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email" placeholder="Sarah" className="form-control" onChange={(event)=>{
            setFirstName(event.target.value)
        }}/>
        </Form.Group>
        </Col>

        <Col>
        <Form.Group  controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="is a loser" className="form-control" onChange={(event)=>{
            setSurname(event.target.value)
        }}/>

        </Form.Group>
        </Col>



        </Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="and so is Flo" className="form-control" onChange={(event)=>{
            setEmail(event.target.value)
        }}/>
        <Form.Text className="hint">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Food Stuffs</Form.Label>
        <Form.Select className="form-control" aria-label="Default select example" onChange={(event)=>{
            setDietaryRequirements(event.target.value)
        }}>
            <option>Select</option>
      <option value="meat">I munch the meats</option>
      <option value="veggie">Veggie</option>
      <option value="vegan">Veeeeegaaaan</option>
    </Form.Select>
      </Form.Group>

<Button className="bg-dark border-0" onClick={()=>{
    Submit({
        attendance:attendance,
        firstName:firstName,
        surname:surname,
        email:email,
        dietaryRequirements: dietaryRequirements

    })
}}>Submit</Button>
            </Form>
        </div>

        
   


       
    </>)
}

