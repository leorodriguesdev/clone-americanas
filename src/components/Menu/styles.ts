import styled from 'styled-components';

export const Container = styled.div`
    flex-direction: row;

    max-width: 1579px;
    height: 42px;
    margin: 0 auto;
    background-color: #e60014;

`;

export const Menuz = styled.div`
        align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    max-width: 1250px;
    height: 42px;
    margin: 0 auto;
    margin-bottom: 1px;
    background-color: #e60014;

    img { 
        stroke: yellow;
        align-items: start; 
    }

    h4 {
        color: white;
        font-family: 'Poppins'; 
        margin-right: 140px;
    }

    a{
        color: white;
        align-items: end;
        padding: .8em .5em;
        font-size: .789em;
        font-family: 'Poppins'; 
        text-decoration: none;
    }
`;

