import React, { Component } from 'react';
import styled from 'styled-components';
import {EnumText} from './EnumText';
import ProjectBox2 from './ProjectBox2';
import autor_short from '../../assets/autor_short.png';
import singlescreen from '../../assets/singlescreen.png';
import myAvatarPNGSMALL from '../../assets/myAvatarPNGSMALL.png';
import myAvatarPNG300 from '../../assets/myAvatarPNG300.png';
import Background from '../../assets/background.png';
import ProjectButton from './ProjectButton';
import MyStartupButton from './MyStartupButton';
import FooterCircles from './FooterCircles';
import KnowlageItemLeft from './KnowlageWrapper/KnowlageItemLeft';


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
  &:hover {
    // display: none;
    height: 280px;
    width: 280px;
    background-image: url(${autor_short});
  }

`;
const WhoIWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
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
  min-height: 50vh;
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



const KnowlageItemCenter = styled.div`
  height: 100%;
  flex: 1;
  background-color: #FFF;
  @media only screen and (max-width: 700px) {
    margin-top: 10px;
    height: 31%;
    flex: 1;
    min-width: 90%;
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
    min-width: 90px;
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

const SeparatorLine2 = styled.div`
  margin-top: 10px; 
  width: 99vw;
  border: 1px solid #00000021;
`;

let skills1 = [1,2,3,4];
let skills2 = [3,4,5,6,];
let skills3 = [7,8,9,10];

const listItems = (skills:any) => skills.map((val:any) => {
  return (
    <ul>
      <li>{val}</li>
    </ul>
  );
});

class Home extends Component {
  render() {
    return (
        <Wrapper>
          <Header>
            <HeaderText> {EnumText.title} </HeaderText>
            <SubHeaderText> {EnumText.subtitle} </SubHeaderText>
            <HeaderImage></HeaderImage>
          </Header>
          <WhoIWrapper>
            <WhoIHeaderText>{EnumText.whoititle}</WhoIHeaderText>
            <WhoISubText>{EnumText.whoisubtitle}</WhoISubText>
            <FooterCircles></FooterCircles>
          </WhoIWrapper>

          <KnowlageWrapper>
              <KnowlageItemLeft/>
              <KnowlageItemCenter>{listItems(skills2)}</KnowlageItemCenter>
              <KnowlageItemRight>{listItems(skills3)}</KnowlageItemRight>
          </KnowlageWrapper>

          <ProjectHeaderText>{EnumText.projectHeader}</ProjectHeaderText>
          <ProjectSubHeaderText>{EnumText.projectSubHeader}</ProjectSubHeaderText>

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
            <MyStartupHeaderText>{EnumText.mystartup}</MyStartupHeaderText>
            <MyStartSubText>{EnumText.mystartuptext}</MyStartSubText>
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
        
        <IamProudHeaderText>{EnumText.iamproudheader}</IamProudHeaderText>

        </Wrapper>
    );
  }
}

export default Home;