import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Experience} from "./experience/Experience.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle>About me:</SectionTitle>
            <Text>Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and Mobile
                developer. I jhave honed my skills in Web Development and advance i have core understanding of advance
                UI design principles.
                Here are the major skiills i have. </Text>
            <Icon iconId={'five'} width={'112'} height={'71'} viewBox={'0 0 112 71'}/>
            <FlexWrapper justifyContent={'space-between'}>
                <Experience iconId={'UiUxDesigning'} title={'UI & UX DESIGNING'}/>
                <Experience iconId={'WebDevelopment'} title={'Web development'}/>
                <Experience iconId={'MobileDevelopment'} title={'Mobile Development'}/>
                <Experience iconId={'Python'} title={'WEB SCRAPING WITH PYTHON'}/>
            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 100vh;
    background-color: honeydew;
`

const Text = styled.p``

