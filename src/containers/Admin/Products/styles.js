import styled from "styled-components";

export const Container = styled.div``;

export const EditButton = styled.button`
    border: 0;
    background-color: ${props => props.theme.darkWhite};
    height: 32px;
    width: 32px;
    border-radius: 8px;
    margin: 0 auto;
    cursor: pointer;  
        
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 18px;
        height: 18px;
    }

    &:hover {
        background-color: ${props => props.theme.purple};

        svg {
            fill: ${(props) => props.theme.white};
        }
    }
`;

export const ProductImage = styled.img`
    height: 80px;
    padding: 12px;
    border-radius: 16px;

    
 
`;


