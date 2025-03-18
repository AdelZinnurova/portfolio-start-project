import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {S} from "./../Skills_Styles.ts"

type SkillPropsType = {
    iconId: string;
    title: string;
    description: string;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={'6px'}>
                <Icon iconId={props.iconId} width={'62'} height={'62px'} viewBox={'0 0 62 62'}/>
                <S.SkillTitle>{props.title}</S.SkillTitle>
                <S.SkillText>{props.description}</S.SkillText>
            </FlexWrapper>
        </S.Skill>
    );
};

