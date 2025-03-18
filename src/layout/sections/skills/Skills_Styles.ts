import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";
import {font} from "../../../styles/Common.ts";

const Skills = styled.section`
    background-color: ${Theme.colors.primaryBg}
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 341px);
    grid-auto-rows: 338px;
    gap: 22px;

    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${Theme.media.mobile} {
        grid-template-columns: repeat(1, 1fr);
    }
`


const Skill = styled.div`
    border-radius: 16px;
    width: 100%;
    height: 100%;
    padding: 0 20px;

    &:nth-of-type(odd) {
        border: 3px solid ${Theme.colors.accentV};
    }

    &:nth-of-type(even) {
        border: 3px solid ${Theme.colors.accentG};
    }
`

const SkillTitle = styled.h3`
    color: ${Theme.colors.font};

    ${font({family: 'Poppins', weight: 600, Fmax: 24, Fmin: 18})}
`

const SkillText = styled.p`
    font-weight: 500;
    font-size: 17px;
    line-height: 165%;
    text-align: center;
    color: ${Theme.colors.font};
`

export const S = {
    Skills,
    GridContainer,
    Skill,
    SkillTitle,
    SkillText,
}