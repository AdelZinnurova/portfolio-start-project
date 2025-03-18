import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {font} from "../../../styles/Common.ts";

const About = styled.section`
    background-color: ${Theme.colors.primaryBg};

    ${Container} > ${FlexWrapper}:first-of-type {
        gap: 15px;
        margin-bottom: 46px;
    }
    
    @media ${Theme.media.mobile} {
        ${Container} > ${FlexWrapper}:first-of-type {
            flex-direction: column;
            align-items: flex-start;
        }
    }
`

const TextDescription = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: ${Theme.colors.font};
    margin-top: 8px;
    margin-bottom: 28px;
    line-height: 1.78;
`

const Text = styled.p`
    display: inline-block;
    color: ${Theme.colors.font};

    ${font({family: 'Poppins', weight: 500, Fmax: 24, Fmin: 20})}
    
    flex-grow: 1;
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 256px);
    grid-auto-rows: 254px;
    gap: 16px;
    align-items: center;
    
    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }
    
    @media ${Theme.media.mobile} {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const S = {
    About,
    TextDescription,
    Text,
    GridContainer
}