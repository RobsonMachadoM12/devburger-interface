import styled from 'styled-components';
import Background from '../../assets/backgroud.jpg'
import BannerHome  from '../../assets/banner-home.svg';


export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 480px;

    h1  {
        font-family: "Road Rage", serif;
        font-size: 80px;
        color: ${props => props.theme.darkWhite};
        position: absolute;
        right: 20%;
        top: 10%;

    }

`;



export const Container = styled.section`
    background: linear-gradient(
        rgba(255,255,255, 0.7),
        rgba(255,255,255, 0.7)
      ),
      url('${Background}');
    height: 900px;

`;


