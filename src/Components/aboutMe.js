import React, { Component } from 'react';


class AboutMe extends Component {
   render() {
       return(
           <div className="About Me">
            <h1>About Me</h1>
                <img src={require('../Assets/IMG_0014.jpg')} alt= 'Cristina' />
                <div>
                <p className="summary">
                    Let me begin by telling you my story, I worked as a Pharmacy Technician for thirteen years. I enjoyed the interaction with patients, and
                    the work flow, but wanted more. I knew I was not going to become a pharmacist, so what else was there for me? I decided to go back to school for computer science,
                    as I took a few classes I realized I wanted more of hands-on experience. I researched and found Lambda School, a Computer Science and Software Engineering Academy.
                    Once I discovered my passion for web development I couldn’t get enough. 
                    I enjoy every moment, because there is always something new and great to learn.
                    The best part about programming that I enjoy is problem solving because there is always a solution. 
                    For instance, thinking meticulously and making a plan that will lead to a working solution. 
                    Lambda school opened a whole new world of opportunities for me. I learned different programming languages, along with different frameworks that have taught me how to create a front and back-end websites and applications. 
                    </p>
                    </div>
           </div>
       )
   }
}

export default AboutMe;