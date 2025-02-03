import styled from "styled-components";
import Select from 'react-select';

export const ProductImage = styled.img`
    height: 80px;
    padding: 12px;
    border-radius: 16px;
`;

export const SelectStatus = styled(Select)`
    width: 240px;

`;

export const Filter = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin: 28px 0;
`;

export const FilterOption = styled.button`
    background: none;
    border: none; 
    cursor: pointer;
    color: ${(props) => 
        props.$isActiveStatus ? props.theme.purple : props.theme.darkGray};
    border-bottom: ${(props) => 
        props.$isActiveStatus ? `3px solid ${props.theme.purple}` : 'none'};
    font-size: 18px;
    line-height: 20px;
    padding-bottom: 5px;
`;