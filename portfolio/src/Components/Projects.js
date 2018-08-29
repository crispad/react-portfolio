import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';

class Projects extends Component {
    render() {
        return (
            <div>
                 <Card>
        <CardBody>
          <CardTitle>iShiftr</CardTitle>
          <CardSubtitle>Scheduling Application</CardSubtitle>
        </CardBody>
        <img width="20%" src={require('../Assets/ishiftr.jpg')} alt="Card image cap" />
        <CardBody>
          <CardText>A new and improved way to schedule and manage your employee's shifts!</CardText>
          <CardLink href="#">www.ishiftr.com</CardLink>
        </CardBody>
      </Card>
            </div>
        )
    }
}

export default Projects;