import {PrimaryLink} from "../../../../components/PrimaryLink.tsx";
import {SecondaryLink} from "../../../../components/SecondaryLink.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {S} from "./../Projects_Styles.ts"

type ProjectPropsType = {
    title: string
    text: string
    src: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <FlexWrapper flexDirection={'column'} justifyContent={'space-between'}>
                <S.Image src={props.src} alt=''/>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>

                <S.LinkWrapper>
                    <PrimaryLink href={'#'}>View Live</PrimaryLink>
                    <SecondaryLink href={'#'}>Github Repo</SecondaryLink>
                </S.LinkWrapper>
            </FlexWrapper>
        </S.Project>
    );
};




