import React from "react";
import {SectionTitle} from "../../../../components/SectionTitle.tsx";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {S} from "./../Contact_Styles.ts"

const socialItemsData = [
    {
        iconId: 'facebook'
    },
    {
        iconId: 'instagram'
    },
    {
        iconId: 'dribble'
    },
    {
        iconId: 'sms'
    },

]

export const ContactLink: React.FC = () => {
    return (
        <S.ContactLink>
            <SectionTitle>Connect with me:</SectionTitle>
            <S.Text>Satisfied with me? Please contact me</S.Text>
            <S.SocialList>
                {socialItemsData.map((socialItem, index) => {
                    return (
                        <S.SocialItem key={index}>
                            <S.SocialLink>
                                <Icon width={'32px'} height={'32px'} viewBox={'0 0 32 32'} iconId={socialItem.iconId}/>
                            </S.SocialLink>
                        </S.SocialItem>
                    )
                })}
            </S.SocialList>
        </S.ContactLink>
    );
};


