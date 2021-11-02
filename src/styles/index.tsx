import styled, { css } from "styled-components";
import bgImg from "../images/diemeeple.jpg";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
    font-size: ${props => props.theme.fontSizes.small};
  }

  label input {
    margin: 6px;
    padding: 10px;
    font-size: 1.25em;
    border: none;
    border-radius: 3px;
  }

  label input:focus {
      margin: 5px;
      border: 1px solid ${props => props.theme.colors.secondary};
  }
`;

export const FormDiv = styled.div`
  width: 80vw;
  min-height: 60vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 15px;
  overflow: hidden;

  .form,
  .about {
      box-sizing: border-box;
      padding: 75px;
      width: 50%;
  }

  .about {
    color: ${(props) => props.theme.colors.white};
    background-image: url(${bgImg});
    background-size: cover;
  }

 .flex-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
  }

  .flex-row div {
      font-size: ${props => props.theme.fontSizes.small}
      margin: 10px;
      width: 50%;
  }

  .about p {
    font-size: ${props => props.theme.fontSizes.medium};
  }

  .about h2 {
      font-size: ${props => props.theme.fontSizes.large};
  }

  .form {
      text-align: center;
  }

`;

export const MainButton = styled.button`
  color: ${(props) => props.color ? props.theme.colors[props.color] : props.theme.colors.white};
  background: transparent;
  border-radius: 5px;
  border: 1px solid ${(props) => props.color ? props.theme.colors[props.color] : props.theme.colors.white};
  padding: 5px 20px;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSizes.small};
  cursor: pointer;
`;

export const ErrorDiv = styled.div`
    color: #D8000C;
    background-color: #FFD2D2;
    padding: 10px;
    margin: 10px;
    box-sizing: border-box;
    border-radius: 15px;
    color: #D8000C;
    font-size:1em;
    vertical-align:middle;
    width: 100%;

    p {
        margin: 5px;
        text-align: center;
    }
`
export const AuthPage = styled.main`
    background-color: ${props => props.theme.colors.main};
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`