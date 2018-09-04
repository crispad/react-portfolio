import React from 'react';
import { Image } from 'react-bootstrap';
//import '../Css/Home.css';



class Home extends React.Component {
    render() {

        let background = {backgroundSize : 'cover'};
        let textStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%'
        };
        return (
            <div style={{width: 'auto'}}>
                <Image  
                    style={background} responsive
                    src={require('../Assets/flowers.jpg')}>
                </Image>
                <h1 style={textStyle}>Cristina Laryea</h1>
                

                
                
                
           </div>
          
        );
    }
}



export default Home;

