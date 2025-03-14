import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>The services i offer:</SectionTitle>
                <GridContainer>
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
                </GridContainer>
            </Container>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
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