import React from "react";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from "./Skills_Styles.ts"

const skillData = [
    {
        iconId: 'UiUxDesigning',
        title: 'UI & UX DESIGNING',
        description: 'I design beautiful web iterfaces with Figma and Adove XD'
    },
    {
        iconId: 'WebDevelopment',
        title: 'WEB DEVELOPMENT',
        description: 'I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS'
    },
    {
        iconId: 'MobileDevelopment',
        title: 'MOBILE DEVELOPMENT',
        description: 'I am an expert mobile developer. I have experience using Flutter and React Native'
    },
    {
        iconId: 'VersionControl',
        title: 'VERSION CONTROL',
        description: 'I can use version control systems well, and Git & Mecurial are my go-to tool'
    },
    {
        iconId: 'JavaScript',
        title: 'NPM AND NODEJS',
        description: 'I have core understanding of NPM. I can also develop general purpose applications with NodeJS'
    },
    {
        iconId: 'WebScraping',
        title: 'WEB SCRAPING',
        description: 'I can collect content and data from the internet then manipulate and analyze as needed'
    }
]

export const Skills: React.FC = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle>The services i offer:</SectionTitle>
                <S.GridContainer>
                    {skillData.map((skill, index) => {
                        return  <Skill iconId={skill.iconId} key={index}
                                       title={skill.title}
                                       description={skill.description}/>
                    })}
                </S.GridContainer>
            </Container>
        </S.Skills>
    );
};