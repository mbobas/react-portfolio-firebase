import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectBox2 from './ProjectBox2';
import autor from '../../assets/autor.png';
import singlescreen from '../../assets/singlescreen.png';
import myAvatarPNGSMALL from '../../assets/myAvatarPNGSMALL.png';
import myAvatarPNG300 from '../../assets/myAvatarPNG300.png';
import Background from '../../assets/background.png';
import ProjectButton from './ProjectButton';
import MyStartupButton from './MyStartupButton';
import FooterCircles from './FooterCircles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;

  `;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #FFF;
`;
//background-image: url(${Background});
  ///background-color: #333;
const HeaderText = styled.div`
  margin-top: 15vh;
  width: 99%;
  font-family: 'Exo';
  font-weight: 800;
  font-size: 48px;
  line-height: 60px;
  text-align: center;
  color: #141c3a;
  @media only screen and (max-width: 400px) {
    margin-top: 5vh;
    font-size: 30px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

const SubHeaderText = styled.div`
  width: 99%;
  font-family: 'Exo';
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #141c3a;
  @media only screen and (max-width: 400px) {
    font-size: 16px;
    line-height: 25px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 25px;
  }
`;


// /text-align: center;
const HeaderImage = styled.img`
  margin-top: 15vh;
  border-radius: 50%;
  height: 300px;
  width: 300px;
  background-image: url(${myAvatarPNG300});
  box-shadow: 5px 5px 15px 5px #00000071;
  align-self: center;
  @media only screen and (max-width: 400px) {
    margin-top: 7vh;
  }
  @media only screen and (max-width: 600px) {
    height: 200px;
    width: 200px;
    background-image: url(${myAvatarPNGSMALL});
  }
  @media only screen and (max-width: 700px) {
    height: 200px;
    width: 200px;
    background-image: url(${myAvatarPNGSMALL});
  }
`;
const WhoIWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 110vh;
  background-color: #7510F7;
  font-color: #FFF;
  align-items: center;
  @media only screen and (min-width:max-width: 700px) {
    margin-bottom: 20px;
    min-height: 120vh;
  }
  `;

const WhoIHeaderText = styled.p`
  margin-top: 15vh;
  width: 99%;
  font-family: 'Exo';
  font-weight: 800;
  font-size: 32px !important;;
  line-height: 1.125;
  word-break: break-word;
  text-align: center;
  color: #FFF;
  @media only screen and (max-width: 400px) {
    margin-top: 5vh;
    font-size: 22px;
    width: 95%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 25px;
    width: 95%;
  }
`;

const WhoISubText = styled.p`
  width: 50%;
  font-family: 'Exo';
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #FFF;
  font-weight: 300;
  line-height: 1.5;
  @media only screen and (max-width: 400px) {
    font-size: 16px;
    width:90%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    width:90%;
  }
`;

const KnowlageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  margin-left: 15vw;
  margin-right: 15vw;
  border: 1px solid #E6ECF8;
  margin-top: -18vh;
  background-color: #FFF;
  border-radius: 10px;
  flex-wrap: wrap;
  @media only screen and (max-width: 700px) {
    display: flex;
    min-height: 250vh;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: -18vh;
    background-color: white;
    border-radius: 10px;
    flex-wrap: wrap;
    border: 0px solid #FFF;
  }
`;

const KnowlageItemLeft = styled.div`
  height: 100%;
  flex: 1;
  border-right: 1px solid #E6ECF8;
  background-color: #FFF;
  border-radius: 10px 0px 0px 10px;
  @media only screen and (max-width: 700px) {
    height: 31%;
    flex: 1;
    min-width: 100%;
    border: 1px solid #E6ECF8;
    background-color: #FFF;
    border-radius: 10px 10px 10px 10px;
  }
`;

const KnowlageItemCenter = styled.div`
  height: 100%;
  flex: 1;
  background-color: #FFF;
  @media only screen and (max-width: 700px) {
    margin-top: 10px;
    height: 31%;
    flex: 1;
    min-width: 100%;
    border: 1px solid #E6ECF8;
    background-color: #FFF;
    border-radius: 10px 10px 10px 10px;

  }
`;
const KnowlageItemRight = styled.div`
  height: 100%;
  flex: 1;
  border-left: 1px solid #E6ECF8;
  background-color: #FFF;
  border-radius: 0px 10px 10px 0px;
  @media only screen and (max-width: 700px) {
    height: 31%;
    min-width: 300px;
    border: 1px solid #E6ECF8;
    background-color: #FFF;
    border-radius: 10px 10px 10px 10px;
  }
`;


const ProjectHeaderText = styled.p`
  align-self: center;
  margin-top: 15vh;
  width: 80%;
  font-family: 'Exo';
  font-weight: 800;
  font-size: 32px !important;;
  line-height: 1.125;
  word-break: break-word;
  text-align: center;
  color: #141c3a;
  @media only screen and (max-width: 400px) {
    margin-top: 5vh;
    font-size: 22px;
    width: 95%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 25px;
    width: 95%;
  }
`;

const ProjectSubHeaderText = styled.div`
  width: 99%;
  font-family: 'Exo';
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #141c3a;
  @media only screen and (max-width: 400px) {
    font-size: 16px;
    line-height: 25px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

const ProjectWrapperColumn = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10vh;
  margin-left: 15vw;
  margin-right: 15vw;
`;

const MyStartupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  background-color: #7510F7;
  font-color: #FFF;
  align-items: center;
  @media only screen and (max-width: 700px) {
    margin-bottom: 20px;
    min-height: 120vh;
  }
  `;

const MyStartupHeaderText = styled.p`
  margin-top: 15vh;
  width: 99%;
  font-family: 'Exo';
  font-weight: 800;
  font-size: 32px !important;;
  line-height: 1.125;
  word-break: break-word;
  text-align: center;
  color: #FFF;
  @media only screen and (max-width: 400px) {
    margin-top: 5vh;
    font-size: 22px;
    width: 95%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 25px;
    width: 95%;
  }
`;

const MyStartSubText = styled.p`
  width: 50%;
  font-family: 'Exo';
  font-weight: 300;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #FFF;
  font-weight: 300;
  line-height: 1.5;
  @media only screen and (max-width: 400px) {
    font-size: 16px;
    width:90%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 18px;
    width:90%;
  }
`;

const IamProudHeaderText = styled.p`
  margin-top: 15vh;
  width: 99%;
  font-family: 'Exo';
  font-weight: 800;
  font-size: 32px !important;;
  line-height: 1.125;
  word-break: break-word;
  text-align: center;
  color: #000;
  @media only screen and (max-width: 400px) {
    margin-top: 5vh;
    font-size: 22px;
    width: 95%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 25px;
    width: 95%;
  }
`;

const MyStartupWrapperColumn = styled.div`
  display: flex;
  margin-top: -10vh;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 15vw;
  margin-right: 15vw;
`;

const SeparatorLine = styled.div`
  margin-top: 50px; 
  width: 99vw;
  border: 1px solid #00000021;
`;



const name = '<CV> Michal Gulczynski </CV>';
const title = 'React Native and React, Mobile & Front-end Developer ';
const subtitle = 'I like creates dreams true, and I love this work.'
const whoititle ='Hi, I’m Michal. Nice to meet you.';
const whoisubtitle ='Since beginning my journey as a freelance designer nearly 8 years ago, I have done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I am quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.';
const projectHeader ='My Recent Work';
const projectSubHeader ='Here are a few design projects Ive worked on recently. Want to see more? Email me.';
const mystartup = 'My Startup Projects';
const mystartuptext = 'Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum';
const iamproudheader =' I am proud to I can colaborated with some awesome companies: \n Devleaders.pl';

class Home extends Component {
  render() {
    return (
        <Wrapper>
          <Header>
            <HeaderText> {title} </HeaderText>
            <SubHeaderText> {subtitle} </SubHeaderText>
            <HeaderImage></HeaderImage>
          </Header>
          <WhoIWrapper>
            <WhoIHeaderText>{whoititle}</WhoIHeaderText>
            <WhoISubText>{whoisubtitle}</WhoISubText>
            <FooterCircles></FooterCircles>
          </WhoIWrapper>
          <KnowlageWrapper>
              <KnowlageItemLeft>{whoisubtitle}{whoisubtitle}</KnowlageItemLeft>
              <KnowlageItemCenter>{whoisubtitle}{whoisubtitle}</KnowlageItemCenter>
              <KnowlageItemRight>{whoisubtitle}{whoisubtitle}</KnowlageItemRight>

          </KnowlageWrapper>

          <ProjectHeaderText>{projectHeader}</ProjectHeaderText>
          <ProjectSubHeaderText>{projectSubHeader}</ProjectSubHeaderText>

          <ProjectWrapperColumn>
            <ProjectButton
            projectname="Nextflix"
            projecttext="test"
            image={singlescreen}
            />
            <ProjectButton
            projectname="Nextflix"
            projecttext="test"
            image={singlescreen}
            />
            <ProjectButton
            projectname="Nextflix"
            projecttext="test"
            image={singlescreen}
            />
            <ProjectButton
            projectname="Nextflix"
            projecttext="test"
            image={singlescreen}
            />
          </ProjectWrapperColumn>
          
          <MyStartupWrapper>
            <MyStartupHeaderText>{mystartup}</MyStartupHeaderText>
            <MyStartSubText>{mystartuptext}</MyStartSubText>
          </MyStartupWrapper>
          
        <MyStartupWrapperColumn>
          <MyStartupButton
            projectname="CodeTutorials"
            projecttext="CodeTutorials"
            image={singlescreen}
          />

          <MyStartupButton
            projectname="Nextflix"
            projecttext="Nextflix"
            image={singlescreen}
          />

          <MyStartupButton
            projectname="PokmonAPI"
            projecttext="PokmonAPI"
            image={singlescreen}
          />
        
        </MyStartupWrapperColumn>
        <SeparatorLine />
        
        <IamProudHeaderText>{iamproudheader}</IamProudHeaderText>

        </Wrapper>
    );
  }
}

export default Home;