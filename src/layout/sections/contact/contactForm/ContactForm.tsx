import React from "react";
import {Button} from "../../../../components/Button.tsx";
import {S} from "./../Contact_Styles.ts"

export const ContactForm: React.FC = () => {
    return (
        <S.ContactForm>
            <S.TextForm>Contact me, let’s make magic together</S.TextForm>
            <S.Field placeholder={'Name:'}/>
            <S.Field placeholder={'Email:'}/>
            <S.Field placeholder={'Message:'} as={'textarea'}/>
            <Button type="submit">Send</Button>
        </S.ContactForm>
    );
};