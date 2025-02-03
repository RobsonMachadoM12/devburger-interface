import  styled  from 'styled-components';
import BannerHamburger from '../../assets/banner-hanburger.svg'
import Background from '../../assets/backgroud.jpg'
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #${props => props.theme.secondWhite};

    background: linear-gradient(
        rgba(255,255,255, 0.7),
        rgba(255,255,255, 0.7)
      ),
      url('${Background}');
      height: 100%;
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    h1 {
        font-family: "Road Rage", serif;
        font-size: 80px;
        line-height: 65px;
        color: #fff;
        position: absolute;

        right: 20%;
        top: 30%;

        span {
            display: block;
            color: ${props => props.theme.white};    
            font-size: 20px;
            
        }

    }


    background: url(${BannerHamburger}) no-repeat;
    background-color: ${props => props.theme.mainBlack};
    background-position: center;
    background-size: cover;

  
`;


export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) =>props.$isActiveCategory ? (props) => props.theme.purpl : '#696969'};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border:  none;
    border-bottom: ${(props) => props.$isActiveCategory && `  3px solid ${props => props.theme.purple}`};

`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto;
    
`;

export const CardProduct = styled.div``