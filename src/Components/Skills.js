import React from 'react';
import { Card, CardTitle, CardText, CardGroup, CardBody } from 'reactstrap';
 
import '../Css/skills.css';
//import styled from 'styled-components';

// const CenteredHeader = styled.h4`
//   text-align: center;
//   margin-bottom: 1.25em;
// `;

// const ColorScheme = `{
//     primary: 'red',
//     secondary: 'blue',
//     third: 'purple',
//     fourth: 'goldenrod'
//   }`;


// const PortRow = styled.div`
//   margin: 0;
//   padding-top: 50px;
//   padding-bottom: 50px;
//   display: block;
// `;

// const CodeThumbnail = styled.img`
//   width: 100%;
//   display: block;
//   margin: 0 auto;
// `;

// const PortAllText = styled.div`
//   width: 90%;
//   margin: 0 auto;
// `;

// const PortTitleContainer = styled.div`
//   position: relative;
//   margin: 0 auto;
//   align-items: baseline;
//   display: flex;
//   flex-wrap: nowrap;
//   flex-direction: row;
//   justify-content: flex-end;
//   align-content: stretch;
//   @media (max-width: 600px) {
//     display: inline;
//   }
// `;

// const PortTitle = styled.h2`
//   flex: 1;
//   font-family: Gotham, Helvetica, Arial, sans-serif;
//   text-transform: uppercase;
//   @media (max-width: 600px) {
//     text-align: center;
//   }
// `;

// export const PortButton = styled.a`
//   padding: 10px 15px;
//   background: 0 0;
//   border: 2px solid ${ColorScheme.secondary};
//   border-radius: 3px;
//   margin: 0 5px;
//   color: ${ColorScheme.secondary};
//   font-family: Gotham, Helvetica, Arial, sans-serif;
//   font-weight: 500;
//   text-transform: uppercase;
//   transition: all 0.3s ease;
//   &:hover {
//     background: ${ColorScheme.primary};
//     color: #fff;
//     border-color: ${ColorScheme.primary};
//   }
//   @media (max-width: 600px) {
//     padding: 5px 7px;
//   }
// `;

// const PortButtonContainer = styled.div`
//   width: 30%;
//   margin: 0 auto;
//   @media (max-width: 600px) {
//     margin-top: 15px;
//     width: 50%;
//   }
// `;

// const PortDescription = styled.p`
//   display: block;
//   margin: 15px 0;
// `;

// const UsedList = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0 auto;
// `;

// const UsedItem = styled.ul`
//   display: inline-block;
//   padding: 7px 7px 5px;
//   margin-right: 5px;
//   margin-bottom: 10px;
//   color: #fff;
//   background: ${ColorScheme.secondary};
//   border-radius: 3px;
//   text-transform: uppercase;
//   font-size: 10px;
//   font-weight: 500;
//   letter-spacing: 0.5px;
// `;


class Skills extends React.Component {
    render() {
        return (
        //     <div>
        // <div>
        //   <CenteredHeader>Skills:</CenteredHeader>
        //   <div className="row">
        //     <div className="col-lg-4 col-md-4 col-sm-4">
        //       <h5>Front-end:</h5>
        //       <ul>
        //         <li>JavaScript (ES6)</li>
        //         <li>React</li>
        //         <li>Redux</li>
        //         <li>HTML5</li>
        //         <li>CSS3/Sass</li>
        //         <li>jQuery</li>
        //         <li>AJAX</li>
        //         <li>Python</li>
        //         <li>Material-UI</li>
        //       </ul>
        //     </div>
        //     <div className="col-lg-4 col-md-4 col-sm-4">
        //       <h5>Back-end:</h5>
        //       <ul>
        //         <li>Node.js</li>
        //         <li>Express</li>
        //         <li>SQL/PostgreSQL</li>
        //         <li>MongoDB</li>
        //         <li>Django</li>
        //       </ul>
        //     </div>
        //     <div className="col-lg-4 col-md-4 col-sm-4">
        //       <h5>Other:</h5>
        //       <ul>
        //         <li>Git</li>
        //         <li>Webpack</li>
        //         <li>JSON</li>
        //         <li>Mocha/Chai Testing</li>
        //         <li>Agile development</li>
        //       </ul>
        //     </div>
        //   </div>
        // </div>
        // </div>

        <CardGroup>
      <Card>
        
        <CardBody>
          <CardTitle>Front-end:</CardTitle>
      
          <CardText>
            <div class="card1">
            <div class="container">
                 <li>JavaScript (ES6)</li>
                 <li>React</li>
                 <li>Redux</li>
                 <li>HTML5</li>
                 <li>CSS3/Sass</li>
                 <li>jQuery</li>
                 <li>AJAX</li>
                 <li>Python</li>
                 <li>Material-UI</li>
                 </div>
                 </div>
               </CardText>
          
        </CardBody>
      </Card>
      <Card>
        
        <CardBody>
          <CardTitle>Back-end:</CardTitle>
      
          <CardText><li>Node.js</li>
                 <li>Express</li>
                 <li>SQL/PostgreSQL</li>
                 <li>MongoDB</li>
                 <li>Django</li>
              </CardText>
          
        </CardBody>
      </Card>
      <Card>
        
        <CardBody>
          <CardTitle>Other:</CardTitle>
      
          <CardText><li>Git</li>
                 <li>Webpack</li>
                 <li>JSON</li>
                 <li>Mocha/Chai Testing</li>
                 <li>Agile Development</li></CardText>
          
        </CardBody>
      </Card>
    </CardGroup>
        )
    }
}

export default Skills;