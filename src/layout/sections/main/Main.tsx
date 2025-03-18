import React from "react";
import photo from '../../../assets/image/Photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {PrimaryLink} from "../../../components/PrimaryLink.tsx";
import {SecondaryLink} from "../../../components/SecondaryLink.tsx";
import {S} from "./Main_Styles.ts"

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper alignItems="center" justifyContent={'space-between'} flexWrap={'wrap'} gap={'50px'}>
                    <S.TextWrapper>
                        <S.SmallText>Hello, i’m</S.SmallText>
                        <S.Name>Jayjay D. Dinero</S.Name>
                        <S.MainTitle>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web
                            experiences for
                            end-users.</S.MainTitle>

                        <S.LinkWrapper>
                            <PrimaryLink href="#">About me</PrimaryLink>
                            <SecondaryLink href="#">Projects</SecondaryLink>
                        </S.LinkWrapper>
                    </S.TextWrapper>

                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="Photo"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

