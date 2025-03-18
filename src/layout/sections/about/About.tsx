import React from "react";
import {SectionTitle} from "../../../components/SectionTitle.ts";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Experience} from "./experience/Experience.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {Container} from "../../../components/Container.ts";
import {S} from "./About_Styles.ts"


const ExperienceData = [
    {
        iconId: 'UiUxDesigning',
        title: 'UI & UX DESIGNING',
    },
    {
        iconId: 'WebDevelopment',
        title: 'Web development',
    },
    {
        iconId: 'MobileDevelopment',
        title: 'Mobile Development',
    },
    {
        iconId: 'Python',
        title: 'WEB SCRAPING WITH PYTHON',
    },
]

export const About: React.FC = () => {
    return (
        <S.About id={'aboutMe'}>
            <Container>
                <SectionTitle>About me:</SectionTitle>
                <S.TextDescription>Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and
                    Mobile
                    developer. I jhave honed my skills in Web Development and advance i have core understanding of
                    advance
                    UI design principles.
                    Here are the major skiills i have. </S.TextDescription>

                <FlexWrapper>
                    <Icon iconId={'five'} width={'165'} height={'86'} viewBox={'0 0 120 81'}/>
                    <S.Text>Years of experience. Specialised in building apps, while ensuring a seamless
                        web experience for end users.</S.Text>
                </FlexWrapper>

                <S.GridContainer>
                    {ExperienceData.map((experience, index) => {
                        return <Experience iconId={experience.iconId} key={index}
                                           title={experience.title}/>
                    })}
                </S.GridContainer>
            </Container>
        </S.About>
    );
};
