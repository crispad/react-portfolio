import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
            <div className="footer row">
                <div className="col-lg-12">
                <a href="mailto:claryea01@gmail.com"></a><i class="fa fa-envelope-o">Email</i>
                <a href="https://wwww.linkedin.com/in/cristinalaryea"></a><i class="fab fa-linkedin">Linkedin</i>
                <a href="https://www.github.com/crispad"></a><i class="fab fa-github">Github</i>
                <a href="https://twitter.com/kristy_006"></a><i class="fab fa-twitter">Twitter</i>
                </div>

            </div>
            <div className="row" id="copyright" style={{margin: 0}}>
            <div className="col-lg-12">
            <p className="small">© 2018 Cristina Laryea</p>
            </div>
            </div>
            </div>  
        );
    }
}

export default Footer;