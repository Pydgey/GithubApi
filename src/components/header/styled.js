import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 4px;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        height: 30px;
    }

    button {
        background-color: #225ed8;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 8px;
        font-weight: bold;
        font-size: 14px;

        &:hover {
            background-color: blue;
            box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
        }

        span {
            color: white;
        }

    }
`;