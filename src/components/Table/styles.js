import styled from 'styled-components';

export const Root = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: ${props => props.theme.white};
    border-radius: 20px;
`;

export const Header = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
    padding: 16px;
    text-align: left;  
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.secondBlack};
    border-bottom: 1px solid #cdcdcd;
    
    &:first-child {
        border-top-left-radius: 20px;
    }
    &:last-child {
        border-top-right-radius: 20px;
    }
`;

export const Td = styled.td`
    padding: 16px;
    color: ${props => props.theme.secondBlack};
    font-weight: 500;
    line-height: 115%;
`;

export const Body = styled.tbody``;

export const ProductTotalPrice = styled.p`
    font-weight: bold;
`;

export const TrashImage = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
   
`;

export const TrashIcon  = styled.img``;
