import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";

export const SecondaryLink = styled.a`
    border: 2px solid ${Theme.colors.accentV};
    border-radius: 8px;
    max-width: 160px;
    height: 48px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 600;
    font-size: 16px;
    color: ${Theme.colors.font};
    text-align: center;

    border-color: ${Theme.colors.accentV};

    &:hover {
        transform: translateY(2px);
    }

    @media ${Theme.media.mobile} {
        width: 140px;
        height: 48px;
    }
`
