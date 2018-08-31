import React, { Component } from 'react';
import styled from 'styled-components';
import '../Css/Footer.css';

const ColorScheme = `{
    mainText: '#333',
    primary: '#ff6e70',
    secondary: '#7d7d7d',
    third: '#5d536b',
    mainLight: '#efefef',
}`;

const FooterDiv = styled.div`
  padding-top: 3rem;
  padding-bottom: 0;
  background-color: ${ColorScheme.mainLight};
  text-align: center;
  height: 150px;
`;

const SocialIconList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SocialIcon = styled.li`
  display: inline;
  color: red;
`;

const FAIcon = styled.i`
  &:hover {
    color: ${ColorScheme.third}
    transition: all .3s ease;
    transform: scale(1.1) translateY(-5px);
  }
`;


class Footer extends Component {
    render() {
        return (
            <FooterDiv>
            <div className="row social" style={{ margin: 0 }}>
              <div className="col-lg-12">
                <SocialIconList>
                  <SocialIcon><a href="mailto:claryea01@gmail.com" target="_blank"><FAIcon className="fa fa-envelope fa-fw fa-2x" /></a></SocialIcon>
                  <SocialIcon><a href="http://www.linkedin.com/in/cristinalaryea" target="_blank"><FAIcon className="fa fa-linkedin fa-fw fa-2x" /></a></SocialIcon>
                  <SocialIcon><a href="https://github.com/crispad" target="_blank"><FAIcon className="fa fa-github fa-fw fa-2x" /></a></SocialIcon>
                  <SocialIcon><a href="https://twitter.com/Kristy_006" target="_blank"><FAIcon className="fa fa-twitter fa-fw fa-2x" /></a></SocialIcon>
                </SocialIconList>
                <br />
              </div>
            </div>
            <div className="row" id="copyright" style={{ margin: 0 }}>
              <div className="col-lg-12">
                <p className="small">© 2018 Cristina Laryea</p>
              </div>
            </div>
      </FooterDiv>
        );
    }
}

export default Footer;