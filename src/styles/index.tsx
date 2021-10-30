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
  }

  label input {
    margin: 5px;
    padding: 5px;
  }

`;

export const FormDiv = styled.div`
  width: 80vw;
  height: 60vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 15px;
  overflow: hidden;

  div {
      box-sizing: border-box;
      padding: 75px;
      width: 50%;
  }

  .about {
    color: ${(props) => props.theme.colors.white};
    background-image: url(${bgImg});
    background-size: cover;
  }

  .about p {
    font-size: ${props => props.theme.fontSizes.medium}
  }

  .about h2 {
      font-size: ${props => props.theme.fontSizes.large}
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
