import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {ContactForm} from "./contactForm/ContactForm.tsx";
import {ContactLink} from "./contactLink/ContactLink.tsx";

export const Contact = () => {
    return (
        <StyledContact>
            <FlexWrapper justifyContent={'space-between'}>
                <ContactLink/>
                <ContactForm/>
            </FlexWrapper>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 50vh;
    background-color: gainsboro;
`


