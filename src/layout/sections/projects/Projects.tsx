import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Project} from "./project/Project.tsx";
import socialImgOne from "./../../../assets/image/Project-1.webp"
import socialImgTwo from "./../../../assets/image/Project-2.webp"
import socialImgThree from "./../../../assets/image/Project-3.webp"

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Featured projects:</SectionTitle>
            <SectionText>I have worked on many projects over the course of being a Web Developer, here are a few of my
                live, real-world projects</SectionText>
            <FlexWrapper justifyContent={'space-between'}>
                <Project title={'TWINDER'}
                         text={'A live Geolocation app for finding tweets and twitter users around you.'}
                         src={socialImgOne}/>
                <Project title={'LIVENTS'}
                         text={'A video streaming app with live Geolocation, for streaming events.'}
                         src={socialImgTwo}/>
                <Project title={'MOOVE'}
                         text={'Mobile app for booking instant pickup & dropoff accross major cities.'}
                         src={socialImgThree}/>
            </FlexWrapper>
        </StyledProjects>
    );
};


const StyledProjects = styled.section`
    min-height: 100vh;
    background-color: cornflowerblue;
`

const SectionText = styled.p`

`