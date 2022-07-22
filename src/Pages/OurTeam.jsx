import React from 'react'
import Team from '../components/Team'


function OurTeam() {
  return <Team />
}

export default OurTeam


// const Button = styled.button`
//   background-color: ${(props) => props.active ? '#2f8b95'  : 'gray'};
//   transition: 1s;
//   cursor: ${(props) => props.active ? 'pointer'  : 'no-drop'} ;
//   pointer-events: ${(props) => props.active ? 'aut'  : 'no-drop'} ;
//   &:hover{
//       background-color: ${(props) => props.active ? '#4ba4ae'  : ''} ;
//       box-shadow: ${(props) => props.active ? ' 0 10px 20px rgba(255,255,255,0.10)'  : ''} ;
//       transform: ${(props) => props.active ? 'translateY(-3px)'  : 'translateY(0)'} ;
//       animation-timing-function: ${(props) => props.active ? 'cubic-bezier(0.2, 0.8, 0.2, 1)'  : ''};
//   }

// `