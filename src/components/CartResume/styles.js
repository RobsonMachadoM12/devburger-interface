import styled from 'styled-components';

export const Container = styled.div`
    background-color: #ffffff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;

    * {
        color: ${props => props.theme.secondBlack};
        font-weight: 500;
    }

    .container-top {
        display: grid;
        grid-gap: 10px 30%;
        grid-template-areas:
        'title title'
        'itens itens-price'
        'delivery-tax delivery-tax-price';
    }

        .title {
        grid-area: title;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
        background-color: ${props => props.theme.secondBlack};
        color: #ffffff;
        width: 100%;
        padding: 12px;
        border-radius: 20px 20px 0px 0px;
        text-align: center;


    }

        .itens {
        grid-area: itens;
        padding-left: 20px;
    }
        .itens-price {
        grid-area: itens-price;
        padding-right: 20px;
    }
        .delivery-tax {
        grid-area: delivery-tax;
        padding-left: 20px;
    }
        .delivery-tax-price {
        grid-area: delivery-tax-price;
        padding-right: 20px;
    }

    .container-bottom {
        display: flex;
        justify-content: space-between;
        font-size: 20px;
        font-weight: 700;
        margin-top: 24px;
        padding: 20px;

        * {

        font-weight: 700;
    }
    }
`;   
    