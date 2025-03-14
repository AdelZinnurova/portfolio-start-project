import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Experience} from "./experience/Experience.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Theme} from "../../../styles/Theme.ts";
import {Container} from "../../../components/Container.ts";
import {font} from "../../../styles/Common.ts";

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

                <GridContainer>
                    <Experience iconId={'UiUxDesigning'} title={'UI & UX DESIGNING'}/>
                    <Experience iconId={'WebDevelopment'} title={'Web development'}/>
                    <Experience iconId={'MobileDevelopment'} title={'Mobile Development'}/>
                    <Experience iconId={'Python'} title={'WEB SCRAPING WITH PYTHON'}/>
                </GridContainer>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    background-color: ${Theme.colors.primaryBg};

    ${Container} > ${FlexWrapper}:first-of-type {
        gap: 15px;
        margin-bottom: 38px;
    }
    
    @media ${Theme.media.mobile} {
        ${Container} > ${FlexWrapper}:first-of-type {
            flex-direction: column;
            align-items: flex-start;
        }
    }
`

const TextDescription = styled.p`
    font-weight: 500;
    font-size: 18px;
    color: ${Theme.colors.font};
    margin-top: 8px;
    margin-bottom: 25px;
    line-height: 1.78;
`

const Text = styled.p`
    display: inline-block;
    color: ${Theme.colors.font};

    ${font({family: 'Poppins', weight: 500, Fmax: 24, Fmin: 20})}
    
    flex-grow: 1;
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 256px);
    grid-auto-rows: 254px;
    //grid-template-rows: repeat(1,254px);
    gap: 16px;
    align-items: center;
    //justify-items: center;
    
    @media screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }

    // @media ${Theme.media.tablet} {
    //     grid-template-columns: repeat(3, 1fr);
    // }
    
    @media ${Theme.media.mobile} {
        grid-template-columns: repeat(1, 1fr);
    }
`
