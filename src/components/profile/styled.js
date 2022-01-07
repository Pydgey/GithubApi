import styled from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    align-items: flex-start;
`;

export const WrapperStatusCount = styled.div `
    display: flex;
    align-items: center;
    margin-top: 8px;
    div {
        margin: 8px;
        text-align: center;
    }
`;

export const WrapperUsername = styled.div `
    display: flex;
    align-items: center;
    h3 {
        margin: 0 8px;
    }

    a {
        font-size: 18px;
        color: blue;
        font-weight: bold;
    }
`;

export const WrapperInfoUser = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 200px;
    margin-left: 8px;
    h1 {
        font-size: 32px;
        font-weight: bold;
        margin: 0;
    }

    h3 {
        font-size: 18px;
        font-weight: bold;
    }

    h4 {
        font-size: 16px;
        font-weight: bold;
    }
`;

export const WrapperImg = styled.img `
    border-radius: 50%;
    width: 200px;
    margin: 10px;
`;





