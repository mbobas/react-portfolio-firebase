import React from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
  width-max: 100vw;
  height-max: 100wh;
  margin: 10px;
`;
const HeaderText = styled.p`
  font-size: 30px;
  color: #333;
`;

const Box = styled.div`
  height: 30vh;
  width: 80vw;
  background-color: #2A629F;
  box-shadow: 9px 10px 21px 2px rgba(42,98,159,1);
  border-radius: 10px;
`;

const Image = styled.img`
  position: absolute;
  height: 280px;
  width: 280px;
  
`;
//background-image: url(${myImage});

interface ProjectBoxProps {
  projectname: string,
  projecttext: string,
  image: any;
}

class ProjectBox extends React.Component<ProjectBoxProps> {
  render() {

  const Image2 = styled.img`
  height: 280px;
  width: 280px;  
  position: absolute;
  object-fit:contain;
  background-image: url(${this.props.image});
`;

    return (
          <Wrapper>
              <HeaderText>{this.props.projectname}</HeaderText>
              <Image2></Image2>
              <Box>{this.props.projecttext}</Box>
              
          </Wrapper>
    );
  }
}

export default ProjectBox;