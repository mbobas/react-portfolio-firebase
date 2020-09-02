import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
&:nth-last-child(1) {
    
  }
}
`;

const ButtonBox = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
    
  margin-bottom: 20px; 
  height: 300px;
  width:  360px;
  background-color: #FFFFFF;
  border-color: #00000021;
  border-radius: 10px;
  outline: none;
  box-shadow: 9px 10px 21px 2px #00000041;
  :hover {
    border-color: #00000041;  
  }
`;

const Image2 = styled.img`
  margin-top: 2vh;
  height: 50px; 
  width: 50px; 
  border-radius: 10px;
  box-shadow: 9px 10px 21px 2px #00000041;
  :hover {
    opacity: 0.6;
  }
`;

const MyStartupText = styled.div`
  margin-top: 2vh;
  width: 99%;
  font-family: 'Exo';
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #141c3a;
  @media only screen and (max-width: 400px) {
    font-size: 14px;
    line-height: 25px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 25px;
  }
`;

const GoToProject = styled.div`
  margin-top: 2vh;
  width: 99%;
  font-family: 'Exo';
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #9F07CD;
  border-bottom: 3px solid transparent;

  @media only screen and (max-width: 400px) {
    font-size: 14px;
    line-height: 25px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 25px;
  }
`;

interface MyStartupButtonProps {
  projectname: string,
  projecttext: string,
  image: any;
}

class MyStartupButton extends React.Component<MyStartupButtonProps> {
  shoot() {
    alert("Great Shot!!");
  }

  render() {
    return (
          <Wrapper>
            
              <ButtonBox title="Button">
                <Image2 
                    src={this.props.image}/>
                <MyStartupText>{this.props.projectname}</MyStartupText>
                <Link to='/contact'>
                <GoToProject>Go to ProjectPage</GoToProject>
                </Link>
              </ButtonBox>
              
          </Wrapper>
    );
  }
}

const boximage = {
    width: 100,
    height: 100,
  };

export default MyStartupButton;