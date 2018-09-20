import React from 'react';
//import { Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
 
import '../Css/skills.css';


class Skills extends React.Component {
    render() {
        return (

    

    <div class="card-deck">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Front-end:</h5>
      <ul class="card-text"><li>JavaScript (ES6)</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>HTML5</li>
                  <li>CSS3/Sass</li>
                  <li>jQuery</li>
                  <li>AJAX</li>
                  <li>Python</li>
                  <li>Material-UI</li></ul>
      
    </div>
  </div>
  
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Back-end:</h5>
      <ul class="card-text"><li>Node.js</li>
                            <li>Express</li>
                            <li>SQL/PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>Django</li></ul>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Other:</h5>
      <ul class="card-text"><li>Git</li>
                  <li>Webpack</li>
                  <li>JSON</li>
                  <li>Mocha/Chai Testing</li>
                  <li>Agile Development</li>
          </ul>
    </div>
  </div>
</div>
    
        )
    }
}

export default Skills;