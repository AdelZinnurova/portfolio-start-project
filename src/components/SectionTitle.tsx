import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";

export const SectionTitle = styled.h2`
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 32px;
    color: ${Theme.colors.accentV};
    margin-bottom: 16px;

    @media ${Theme.media.mobile} {
        margin-bottom: 10px;
    }
`

