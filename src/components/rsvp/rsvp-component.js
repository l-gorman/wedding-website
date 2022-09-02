import React from "react";
import { Form, Row, Col, Button} from "react-bootstrap";

import { useState } from "react";
import { GoogleSpreadsheet } from "google-spreadsheet";


function Submit(props){
    const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
    const SHEET_ID = process.env.REACT_APP_SHEET_ID;
    const CLIENT_EMAIL = process.env.REACT_APP_EMAIL;
    const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY
    // process.env.PRIVATE_KEY.replace(/\n/g, '\n')
    //.replace('/\\n/g', '\n');

    console.log(PRIVATE_KEY)
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);


    console.log([
        props.attending,
        props.firstName,
        props.surname,
        props.email,
        props.dietaryRequirements
        
    ]
    )

    

    const appendSpreadsheet = async (row) => {
        try {
          await doc.useServiceAccountAuth({
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY,
          });
          // loads document properties and worksheets
          await doc.loadInfo();
      
          const sheet = doc.sheetsById[SHEET_ID];
          const result = await sheet.addRow(row);

          console.log(result)
        } catch (e) {
          console.error('Error: ', e);
        }
      };
      
      const newRow = { 
        attending: props.attending, 
        firstName: props.firstName,
        lastName: props.surname,
        email: props.email,
        dietaryRequirements:props.dietaryRequirements
     };
      
      appendSpreadsheet(newRow);


}



export default function RSVP(){

    

    let [attending, setaAttending] = useState(null)
    let [firstName, setFirstName] = useState(null)
    let [surname, setSurname] = useState(null)

    let [email, setEmail] = useState(null)

    let [dietaryRequirements, setDietaryRequirements] = useState(null)


    return(
        <>

        <h1 className="header">RSVP</h1>

        <div className="text-boxes">
        <Form>
            <Form.Group className="mb-3">
            <Form.Check inline type="radio" name="horizontalRadio" label="I can make it" onClick={()=>{
                setaAttending('Yes')
            }} />
            <Form.Check inline type="radio" name="horizontalRadio" label="I can't I'm a loser" onClick={()=>{
                setaAttending('No')
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
        attending:attending,
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

