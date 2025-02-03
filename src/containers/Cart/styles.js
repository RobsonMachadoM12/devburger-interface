import styled from 'styled-components';
import Background from '../../assets/backgroud.jpg'
import Texture from '../../assets/texture.svg';

export const Container = styled.div`
   width: 100%;
   background: linear-gradient(
           rgba(255,255,255, 0.7),
           rgba(255,255,255, 0.7)
         ),
         url('${Background}');
   
   min-height: 100vh;
 `
export const Banner = styled.div`
   background: url('${Texture}');
   background-size: cover;
   background-position: center;
   background-color: ${props => props.theme.purple};
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;

   height: 180px;

   img {
      width: 130px;
   }
`
export const Title = styled.h1`
   font-size: 32px;
   font-weight: 800;
   padding-bottom: 12px;
   color: ${props => props.theme.gren};
   text-align: center;
   position: relative;

   &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 56px;
      height: 4px;
      background-color: ${props => props.theme.gren};
   }

`
export const Content = styled.div`
   display: grid;
   grid-template-columns: 1fr 40%;
   gap: 40px;
   width: 100%;
   max-width: 1080px;
   padding: 40px;
   margin: 0 auto;   
`
