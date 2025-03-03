import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";

export const Button = styled.button`
    border-radius: 8px;
    width: 174px;
    height: 50px;
    background-color: ${Theme.colors.accentV};
    
    font-weight: 500;
    font-size: 16px;
    color: ${Theme.colors.font};
`