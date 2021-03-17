import { css } from "styled-components";

import { styled } from "@styles";

const inputStyle = css<{ checked: boolean }>`
  ${props => props.checked && `color: #333;`}

  display: flex;
  align-items: center;
  cursor: pointer;

  input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }
  > div {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1em;
    height: 1em;
    margin: 0.25em 1em 0.25em 0.25em;
    border: 0.1em solid #333;
    border-radius: 50%;
    background: #ffffff;
    vertical-align: bottom;
  }
  ${props =>
    props.checked &&
    `> div > span {
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #333;
    }`}
`;

export const Input = styled.div<{ checked: boolean }>`
  ${inputStyle}
`;

export const LabeledInput = styled.label<{ checked: boolean }>`
  ${inputStyle}
`;
