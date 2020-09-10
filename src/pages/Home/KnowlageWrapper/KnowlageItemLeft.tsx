import React, { Component } from 'react';
import styled from 'styled-components';
import {EnumText, skillsLeft} from '../EnumText';
import reactlogo64 from './../../../assets/skills/reactlogo64.png';

const Wrapper = styled.div`
height: 100%;
min-width: 33%;
display: flex;
border-right: 1px solid #E6ECF8;
background-color: #FFF;
border-radius: 10px 0px 0px 10px;
justify-content: center;
flex-direction: column;
@media only screen and (max-width: 700px) {
  height: 31%;
  min-width: 90%;
  border: 1px solid #E6ECF8;
  background-color: #FFF;
  border-radius: 10px 10px 10px 10px;
};

`;

const Logo = styled.img`
height: 64 px;
width: 64 px;
}
`;

const listItems = (skills:any) => skills.map((val:any) => {
  return (
    <ul>
      <li>{val}</li>
    </ul>
  );
});


const displayImages = (displayImage: any) => {
  return (
     <div>
       {displayImage.map((image:any, key:number) => (<img src={image} key={image}/>))}
    </div>
)};


class KnowlageItemLeft extends Component {
    render() {
      return (
          <Wrapper>
            {<Logo src={reactlogo64}/>}
            {listItems(skillsLeft)}

          </Wrapper>

          );
        }
}

export default KnowlageItemLeft; 