import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
`;
const HeaderText = styled.p`
  font-size: 30px;
  color: #333;
`;

const Image = styled.img`
  position: absolute;
  height: 280px;
  width: 280px;
  
`;
//background-image: url(${myImage});

interface ProjectBox2Props {
  projectname: string,
  projecttext: string,
  image: any;
}

class ProjectBox2 extends React.Component<ProjectBox2Props> {
  render() {

const Box = styled.div`
  margin-bottom: 20px; 
  height: 250px;
  width:  300px ;
  background-color: #00000041;
  box-shadow: 9px 10px 21px 2px rgba(42,98,159,1);
  border-radius: 10px;
  :hover {
    background-color: #00006641;
  }
`;

 const BoxOpacity = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background-color: #66666651;
 `;

    return (
          <Wrapper>
              <Box>
              <BoxOpacity/>
              <img 
                src={this.props.image} 
                width="100%"
                height="100%"
                border-radius="10px"
                
              />  
              {this.props.projecttext}
              
              </Box>
          </Wrapper>
    );
  }
}

const boximage = {
    width: 100,
    height: 100,
  };

export default ProjectBox2;