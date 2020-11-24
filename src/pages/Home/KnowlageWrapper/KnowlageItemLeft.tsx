import React, { Component } from 'react';
//import styled from 'styled-components';
import {EnumText, skillsLeft, imagesSkills} from '../EnumText';
import reactlogo64 from './../../../assets/skills/reactlogo64.png';
import "./KnowlageItemLeft.css";



const listItems = (skills:any, displayImage: any) => skills.map((item:any) => {
  return (
    <div>
      {imagesSkills.map(({id, src, title, description, height, width}) => {
        return (
          <div className="KnowlageItems">
          <img key={id} height={height} width={width} src={src} title={title} alt={description} />
          {/* <div className="text">{title}</div>   */}
          </div>
        )
      })}
    </div>
  );
});

class KnowlageItemLeft extends Component {
    render() {
      return (
          <div className="Wrapper">
            {listItems(skillsLeft, reactlogo64)}
          </div>

          );
        }
}

export default KnowlageItemLeft; 