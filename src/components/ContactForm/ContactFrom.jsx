/* eslint-disable no-console */
import React, { useState} from 'react'
import  {
    Container,
    Row,
    Col,
    Button,
    Form, 
        } from 'react-bootstrap'
  import './ContactForm.scss'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import swal from 'sweetalert'
  import {db}  from '../../Firebase'


export default function ContactFrom() {
  
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [subject, setSubject] = useState('');
const [message, setMessage] = useState('');


const handleSubmit = (e) => {
  e.preventDefault();
  db.collection('contacts').doc(`${name}, ${Date()}`).set({
    Name: name,
    email,
    subject,
    message,

  });

  setName('');
  setEmail('');
  setSubject('');
  setMessage('');
  swal('', 'success', 'success');
};
    return (
              <div className="mb-4 py-4">
                  <Container className="Box border rounded border-black"  >
                    <Row> 
                      <Col className="TCol">
                        <h1 className="Title">Contact Us</h1>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="6">
                        <Form className="BoxForm " onSubmit={handleSubmit}>
                          <p className="h4 text-center mb-4">Please Leave Us a Message</p>

                          <Form.Label htmlFor="name" className="grey-text">
                            Name
                          </Form.Label>
                          <Form.Control type="text" id="Name" name="name"  value={name}
                          onChange={(e)=> setName(e.target.value)} required />

                          <br />

                          <Form.Label htmlFor="email" className="grey-text"/>
                          <Form.Control  type="email" id="email"   name="email" placeholder="Email Address"   value={email}
                           onChange={(e)=> setEmail(e.target.value)} required/>

                          <br />

                          <Form.Label htmlFor="subject" className="grey-text">
                            Subject
                          </Form.Label>
                          <Form.Control type="text" id="subject" name="subject"
                           value={subject}
                          onChange={(e)=> setSubject(e.target.value)} required />

                          <br />

                          <Form.Label htmlFor="message" className="grey-text">
                            Your Messabe
                          </Form.Label>
                          <Form.Control as="textarea" row="3"  type="text" id="message" name="message"
                          value={message}
                          onChange={(e)=> setMessage(e.target.value)}
                           required />

                          <div className="text-center my-4 ">
                            <Button type="submit" className="Btn"  >
                              Send
                            </Button>
                          </div>
{console.log(name)}
                        </Form>

                      </Col>
                  
                      <Row className="FICON mx-auto" >
                        <Col  md={12} >
                          <div   className="ml-4 mb-4"            >
                            <a href={`tel:${"+234081-1236-4568"}`}>
                              <FontAwesomeIcon className="ic"
                              icon="phone"
                              size="2x"
                              />

                              <span style={{ color: 'black' }}>+234081-1236-4568</span>
                            </a>
                          </div>

                          <div className=" ml-4"        >
                            <a href={`mailto:${"contact@KFD.com"}`}>
                              <FontAwesomeIcon className="ic"
                                  icon="envelope"
                                  size="2x"
                              />{' '}
                              <span  style={{ color: 'black' }}>contact@KFD.com</span>
                            </a>
                          </div>
                        </Col>
                      </Row>
                    </Row>
                </Container>
              </div>
            )}