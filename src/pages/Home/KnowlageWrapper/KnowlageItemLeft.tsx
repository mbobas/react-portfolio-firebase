import React, { Component } from 'react';
import styled from 'styled-components';
import {EnumText, skillsLeft} from '../EnumText';

const Wrapper = styled.div`
height: 100%;
flex: 1;
border-right: 1px solid #E6ECF8;
background-color: #FFF;
border-radius: 10px 0px 0px 10px;
@media only screen and (max-width: 700px) {
  height: 31%;
  flex: 1;
  min-width: 90%;
  border: 1px solid #E6ECF8;
  background-color: #FFF;
  border-radius: 10px 10px 10px 10px;
}
`;

const listItems = (skills:any) => skills.map((val:any) => {
  return (
    <ul>
      <li>{val}</li>
    </ul>
  );
});


class KnowlageItemLeft extends Component {
    render() {
      return (
          <Wrapper>{listItems(skillsLeft)}</Wrapper>
          );
        }
}

export default KnowlageItemLeft; 