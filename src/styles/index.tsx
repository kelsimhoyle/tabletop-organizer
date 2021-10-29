import styled, {css} from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    label input {
        margin: 5px;
        padding: 5px;
    }
`

export const FormDiv = styled.div`
    width: 90%;
    padding: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const MainButton = styled.button`
    background: transparent;
    border-radius: 5px;
    border: 2px solid black;
    padding: 5px 20px;
    text-transform: uppercase;
`