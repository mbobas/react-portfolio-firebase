import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import "./FooterCircles.css";
import GithubIcon from "./icons/GithubIcon";
import EmailIcon from "./icons/EmailIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import CVIcon from "./icons/CVIcon";

const styles = {
  fontFamily: "sans-serif"
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const CircleButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  height: 50px; 
  width: 50px; 
  border-radius: 50%;
  border: 1px solid #FFFFFF41;
  background-color: #7510F7;
  margin: 10px;
  :hover {
    background-color: #FFF;
  }
`;

class Footer extends React.Component {
  render() {
    return (
          <Wrapper>
            <CircleButton> 
              <Link to="/github" target="_blank">
                <div style={styles}>
                  <GithubIcon
                    fill="#fff"
                    width={"40px"}
                    className="github"
                    style={{  padding: "10px" }}
                  />
                </div>
              </Link>
            </CircleButton>

            <CircleButton> 
                <Link to="/linkedin" target="_blank">
                  <div style={styles}>
                    <LinkedInIcon
                      fill="#fff"
                      width={"40px"}
                      className="github"
                      style={{  padding: "10px" }}
                    />
                  </div>
                </Link>
            </CircleButton>
            
            <CircleButton> 
              <Link to="/contact">
                <div style={styles}>
                  <EmailIcon
                    fill="#fff"
                    width={"40px"}
                    className="github"
                    style={{  padding: "10px" }}
                  />
                </div>
              </Link>
            </CircleButton>

            <CircleButton> 
              <Link to="/contact">
                <div style={styles}>
                  <CVIcon
                    fill="#fff"
                    width={"40px"}
                    className="github"
                    style={{  padding: "10px" }}
                  />
                </div>
              </Link>
            </CircleButton>

      </Wrapper>
    );
  }
}

export default Footer;