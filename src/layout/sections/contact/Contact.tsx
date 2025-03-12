import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {ContactForm} from "./contactForm/ContactForm.tsx";
import {ContactLink} from "./contactLink/ContactLink.tsx";
import {Container} from "../../../components/Container.ts";
import {Theme} from "../../../styles/Theme.ts";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <FlexWrapper justifyContent={'space-between'}>
                    <ContactLink/>
                    <ContactForm/>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    background-color: ${Theme.colors.primaryBg};
    
    @media ${Theme.media.tablet} {
        ${FlexWrapper} {
            flex-direction: column;
        }
    }
`


