import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>The services i offer:</SectionTitle>
            <FlexWrapper flexWrap={'wrap'} justifyContent={'space-between'}>
                <Skill iconId={'UiUxDesigning'} title={'UI & UX DESIGNING'}
                       description={'I design beautiful web iterfaces with Figma and Adove XD'}/>
                <Skill iconId={'WebDevelopment'} title={'WEB DEVELOPMENT'}
                       description={'I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS'}/>
                <Skill iconId={'MobileDevelopment'} title={'MOBILE DEVELOPMENT'}
                       description={'I am an expert mobile developer. I have experience using Flutter and React Native.'}/>
                <Skill iconId={'VersionControl'} title={'VERSION CONTROL'}
                       description={'I can use version control systems well, and Git & Mecurial are my go-to tool.'}/>
                <Skill iconId={'JavaScript'} title={'NPM AND NODEJS'}
                       description={'I have core understanding of NPM. I can also develop general purpose applications with NodeJS'}/>
                <Skill iconId={'WebScraping'} title={'WEB SCRAPING'}
                       description={'I can collect content and data from the internet then manipulate and analyze as needed.'}/>
            </FlexWrapper>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
    background-color: #4dc34d;
    min-height: 100vh;
`