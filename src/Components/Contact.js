import React, { Component } from 'react';
import styled from 'styled-components';

const FormDiv = styled.div`
  margin: 0 auto;
  width: 50%;
`

const FormLabel = styled.label`
  display: block;
`

const FormInput = styled.input`
  width: 100%;
`

const CommentInput = styled.textarea`
  width: 100%;
  height: 6em;
`

const EmailMe = styled.p`
  text-align: center;
  padding: 4%;
`



class Contact extends Component {
    render() {
        return (
            // <div>
            //     <h1>Get In Touch With Me!</h1>
            // <Form>
            //     <FormGroup>
            //         <Label for="Name">Name</Label>
            //         <Input type="name" name="name" id="name" placeholder="Enter name here" />
            //     </FormGroup>
            //     <FormGroup>
            //         <Label for="Email">Email</Label>
            //         <Input type="email" name="email" id="email" placeholder="Enter email here" />
            //     </FormGroup>
            //     <FormGroup>
            //         <Label for="Comment">Comment</Label>
            //         <Input type="comment" name="comment" id="comment" />
            //     </FormGroup>
            //    <Button>Submit</Button> 
            // </Form>

            // Or, just email me directly at <a href="mailto:claryea01@gmail.com"><strong>claryea01@gmail.com</strong></a>.
            // </div>
            <div>
        {/* <CenteredHeader>Get in touch with me!</CenteredHeader> */}

        <FormDiv>
          <form action="https://formspree.io/claryea01@gmail.com" method="POST" id="contactform">
            <div>
              <FormLabel>Name:</FormLabel>
              <FormInput type="text" name="name" />
            </div>
            <div>
              <FormLabel>Email:</FormLabel>
              <FormInput type="text" name="_replyto" />
            </div>
            <div>
              <FormLabel>Comment:</FormLabel>
              <CommentInput name="comment" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </FormDiv>

        <EmailMe>Or, just email me directly at <a href="mailto:claryea01@gmail.com" target="_blank"><strong>claryea01@gmail.com</strong></a>.</EmailMe>

      </div>

        )
    }
}

export default Contact;