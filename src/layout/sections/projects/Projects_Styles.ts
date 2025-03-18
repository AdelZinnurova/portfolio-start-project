import styled from "styled-components";
import {Theme} from "../../../styles/Theme.ts";

const Projects = styled.section`
    background-color: ${Theme.colors.primaryBg};
    position: relative;
`

const SectionText = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 1.78;
    color: ${Theme.colors.font};
    margin-bottom: 36px;
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 343px);
    grid-auto-rows: 417px;
    gap: 16px;

    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${Theme.media.mobile} {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Project = styled.div`
    background-color: ${Theme.colors.project};
    width: 100%;
    height: 100%;
    padding: 16px 16px 22px 16px;
`

const Image = styled.img`
    max-width: 311px;
    width: 100%;
    max-height: 173px;
    object-fit: cover;
    opacity: 0.5;
`

const Title = styled.h3`
    font-weight: 600;
    font-size: 24px;
    color: ${Theme.colors.accentV};
`

const Text = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: ${Theme.colors.font};
`

const LinkWrapper = styled.div`

    display: flex;
    gap: 16px;
`

export const S = {
    Projects,
    SectionText,
    GridContainer,
    Project,
    Image,
    Title,
    Text,
    LinkWrapper
}