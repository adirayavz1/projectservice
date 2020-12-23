import styled from 'styled-components'

export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;align-items:center;
height: 800px;
postion: relative;
z-index: 1;

`;


export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
botton: 0;
left: 0;
widht: 100%;
height: 100%;
overflow: hidden;
`;

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`;