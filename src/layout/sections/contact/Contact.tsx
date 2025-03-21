import React from "react";
import {FlexWrapper} from "../../../components/FlexWrapper.ts";
import {ContactForm} from "./contactForm/ContactForm.tsx";
import {ContactLink} from "./contactLink/ContactLink.tsx";
import {Container} from "../../../components/Container.ts";
import {S} from "./Contact_Styles.ts"

export const Contact: React.FC = () => {
    return (
        <S.Contact id={'contact'}>
            <Container>
                <FlexWrapper justifyContent={'space-between'}>
                    <ContactLink/>
                    <ContactForm/>
                </FlexWrapper>
            </Container>
        </S.Contact>
    );
};




