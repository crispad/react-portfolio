import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';




class Contact extends Component {
    render() {
        return (
            <div>
                <h1>Get In Touch With Me!</h1>
            <Form>
                <FormGroup>
                    <Label for="Name">Name</Label>
                    <Input type="name" name="name" id="name" placeholder="Enter name here" />
                </FormGroup>
                <FormGroup>
                    <Label for="Email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="Enter email here" />
                </FormGroup>
                <FormGroup>
                    <Label for="Comment">Comment</Label>
                    <Input type="comment" name="comment" id="comment" />
                </FormGroup>
               <Button>Submit</Button> 
            </Form>

            Or, just email me directly at <a href="mailto:claryea01@gmail.com"><strong>claryea01@gmail.com</strong></a>.
            </div>
        )
    }
}

export default Contact;