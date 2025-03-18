import React from "react";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Project} from "./project/Project.tsx";
import socialImgOne from "./../../../assets/image/Project-1.webp"
import socialImgTwo from "./../../../assets/image/Project-2.webp"
import socialImgThree from "./../../../assets/image/Project-3.webp"
import {Container} from "../../../components/Container.ts";
import {S} from "./Projects_Styles.ts"

const projectData = [
    {
        title: 'TWINDER',
        text: 'A live Geolocation app for finding tweets and twitter users around you.',
        src: socialImgOne
    },
    {
        title: 'LIVENTS',
        text: 'A video streaming app with live Geolocation, for streaming events.',
        src: socialImgTwo
    },
    {
        title: 'MOOVE',
        text: 'Mobile app for booking instant pickup & dropoff accross major cities.',
        src: socialImgThree
    },
]


export const Projects: React.FC = () => {
    return (
        <S.Projects>
            <Container>
                <SectionTitle>Featured projects:</SectionTitle>
                <S.SectionText>I have worked on many projects over the course of being a Web Developer, here are a few
                    of
                    my
                    live, real-world projects</S.SectionText>
                <S.GridContainer>
                    {projectData.map((project, index) => {
                        return <Project title={project.title} key={index}
                                        text={project.text}
                                        src={project.src}/>

                    })}
                </S.GridContainer>
            </Container>
        </S.Projects>
    );
};


