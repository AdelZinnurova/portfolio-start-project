import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";
import {font} from "../styles/Common.ts";

export const SectionTitle = styled.h2`
    ${font({weight: 600, Fmax: 32, Fmin: 26})}
    color: ${Theme.colors.accentV};
    margin-bottom: 14px;
`

