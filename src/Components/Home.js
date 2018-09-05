import React from 'react';
import { Image } from 'react-bootstrap';
import '../Css/Home.css';



class Home extends React.Component {
    render() {

        let background = {backgroundSize : 'cover'};
        let textStyle = {
            position: 'absolute',
            bottom: '50%',
            left: '50%'
        };
        let textStyle2 = {
            position: 'absolute',
            top: '50%',
            left: '50%'
        };

        return (
            <div className = 'Font style'>
            <div style={{width: 'auto'}}>
                <Image  
                    style={background} responsive
                    src={require('../Assets/flowers.jpg')}>
                </Image>
                <h1 style={textStyle}>Cristina Laryea</h1>
                <h2 style={textStyle2}>Full Stack Developer</h2>
                

                
                
                
           </div>
           </div>
        );
    }
}



export default Home;

