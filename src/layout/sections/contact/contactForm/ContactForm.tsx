import {Button} from "../../../../components/Button.tsx";
import styled from "styled-components";

export const ContactForm = () => {
    return (
        <StyledContactForm>
            <TextForm>Contact me, let’s make magic together</TextForm>
            <StyledForm>
                <Field placeholder={'Name:'}/>
                <Field placeholder={'Email:'}/>
                <Field placeholder={'Message:'} as={'textarea'}/>
                <Button type="submit">Send</Button>
            </StyledForm>
        </StyledContactForm>
    );
};

const StyledContactForm = styled.section``

const TextForm = styled.h3``

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const Field = styled.input``