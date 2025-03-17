import {Button} from "../../../../components/Button.tsx";
import styled from "styled-components";
import {Theme} from "../../../../styles/Theme.ts";

export const ContactForm = () => {
    return (
        <StyledContactForm>
            <TextForm>Contact me, let’s make magic together</TextForm>
                <Field placeholder={'Name:'}/>
                <Field placeholder={'Email:'}/>
                <Field placeholder={'Message:'} as={'textarea'}/>
                <Button type="submit">Send</Button>
        </StyledContactForm>
    );
};

const StyledContactForm = styled.form`
    max-width: 475px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-right: 80px;
    
    textarea {
        resize: none;
        height: 100px;
    }
`

const TextForm = styled.h3`
    font-weight: 500;
    font-size: 24px;
    color: ${Theme.colors.font};
    margin-bottom: 14px;
`

const Field = styled.input`
    width: 100%;
    border-radius: 8px;
    border: 1px solid ${Theme.colors.project};
    background-color: ${Theme.colors.project};
    padding: 19px 16px;

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: ${Theme.colors.font};

    &::placeholder {
        color: ${Theme.colors.placeholder};
        text-transform: capitalize;
    }
    
    &:focus-visible {
        outline: 1px solid ${Theme.colors.placeholder};
    }
`