import React from 'react';
import { Image } from 'react-bootstrap';
//import '../Css/Home.css';



class Home extends React.Component {
    render() {

        let background = {backgroundSize : 'cover'};
        // let textStyle = {
        //     position: 'absolute',
        //     bottom: '70%',
        //     center: '70%',
        // };
        // let textStyle2 = {
        //     position: 'absolute',
        //     top: '70%',
        //     left: '70%'
        // };
        let traspBackground = {
            color: '#658327',
            opacity: '0.8',
            color: 'white',
            padding: '40px',
            weight: '700',
            align: 'center',
            top: '100px',
            size: '18px',
        }

        return (
            <div className = 'Font style'>
            <div style={{width: 'auto'}}>
                <Image  
                    style={background} responsive
                    src={require('../Assets/workspace.jpg')}>
                </Image>
                <div className = 'traspBackground'>
                                <h1 style={traspBackground}>Cristina Laryea</h1>
                                <h2>Full Stack Developer</h2>
                            </div>
                        </div>
                
                
           </div>
        
        );
    }
}



export default Home;

