import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Container = styled.div`
    background-color: ${props => props.theme.mainBlack};
    width: 100%;
    height: 72px;
`;

export const Content = styled.div`
    display: flex;  
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`;

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;
    padding: 0 56px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    hr {
        width: 1px;
        height: 24px;
        background-color: #ffffff;
        border: none;
    }
`;

export const HeaderLink = styled(Link)`
    color: ${(props) =>
         props.$isActive
          ?  props => props.theme.purple
         : props.theme.white };
    border-bottom: ${(props) => 
        props.$isActive ? ` 2px solid ${props => props.theme.darkPurple}`: 'none'};
    padding-bottom: 5px;
    font-size: 14px;
    text-decoration: none;
    transition: color 200ms;

    &:hover {
        color: ${props => props.theme.darkPurple};
        cursor: pointer;
    }

`;


export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 12px;
    
    p {
        font-weight: 300;
        color: #fff;
        line-height: 90%;

        span {
            font-weight: 700;
            color: ${props => props.theme.purple};
            
        }
    }
`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

export const Logout = styled.button`
    color: ${props => props.theme.red};
    text-decoration: none;
    font-weight: 700;
    background-color: transparent;
    border: none;
`;   

