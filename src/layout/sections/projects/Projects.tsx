import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Project} from "./project/Project.tsx";
import socialImgOne from "./../../../assets/image/Project-1.webp"
import socialImgTwo from "./../../../assets/image/Project-2.webp"
import socialImgThree from "./../../../assets/image/Project-3.webp"
import {Theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";

export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <SectionTitle>Featured projects:</SectionTitle>
                <SectionText>I have worked on many projects over the course of being a Web Developer, here are a few of
                    my
                    live, real-world projects</SectionText>
                <GridContainer>
                    <Project title={'TWINDER'}
                             text={'A live Geolocation app for finding tweets and twitter users around you.'}
                             src={socialImgOne}/>
                    <Project title={'LIVENTS'}
                             text={'A video streaming app with live Geolocation, for streaming events.'}
                             src={socialImgTwo}/>
                    <Project title={'MOOVE'}
                             text={'Mobile app for booking instant pickup & dropoff accross major cities.'}
                             src={socialImgThree}/>
                </GridContainer>
            </Container>
        </StyledProjects>
    );
};


const StyledProjects = styled.section`
    background-color: ${Theme.colors.primaryBg};
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