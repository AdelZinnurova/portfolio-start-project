import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Experience} from "./experience/Experience.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <SectionTitle>About me:</SectionTitle>
                <TextDescription>Hi, my name is Jayjay Dinero Dinero, i am a Fullstack web developer, UI designer, and
                    Mobile
                    developer. I jhave honed my skills in Web Development and advance i have core understanding of
                    advance
                    UI design principles.
                    Here are the major skiills i have. </TextDescription>

                <FlexWrapper alignItems={'center'}>
                    <Icon iconId={'five'} width={'112'} height={'71'} viewBox={'0 0 112 71'}/>
                    <Text>Years of experience. Specialised in building apps, while ensuring a seamless
                        web experience for end users.</Text>
                </FlexWrapper>

                <FlexWrapper justifyContent={'space-between'} flexWrap={'wrap'}>
                    <Experience iconId={'UiUxDesigning'} title={'UI & UX DESIGNING'}/>
                    <Experience iconId={'WebDevelopment'} title={'Web development'}/>
                    <Experience iconId={'MobileDevelopment'} title={'Mobile Development'}/>
                    <Experience iconId={'Python'} title={'WEB SCRAPING WITH PYTHON'}/>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    background-color: ${Theme.colors.primaryBg};
`

const TextDescription = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: ${Theme.colors.font};
    margin-top: 8px;
    margin-bottom: 25px;
    line-height: 1.78;

    // @media ${Theme.media.mobile} {
    //     font-weight: 400;
    //     font-size: 16px;
    // }
`

const Text = styled.p`
    display: inline-block;
    font-weight: 500;
    font-size: 24px;
    color: ${Theme.colors.font};
    margin-left: 22px;
    max-width: 820px;

    // @media ${Theme.media.mobile} {
    //     font-weight: 400;
    //     font-size: 20px;
    //     margin-left: 12px;
    // }
`

