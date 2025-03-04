import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";

export const PrimaryLink = styled.a`
    border: 2px solid ${Theme.colors.accentV};
    border-radius: 8px;
    width: 160px;
    height: 48px;
    padding-top: 12px;
    
    font-weight: 600;
    font-size: 16px;
    color: ${Theme.colors.font};
    text-align: center;

    border-color: ${Theme.colors.accentV};
    background-color: ${Theme.colors.accentV};
    
    &:hover {
        transform: translateY(2px);
    }
`
