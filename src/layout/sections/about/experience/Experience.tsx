import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type ExperiencePropsType = {
    iconId: string;
    title: string;
}

export const Experience = (props: ExperiencePropsType) => {
    return (
        <StyledExperience>
            <FlexWrapper flexDirection={'column'}>
                <Icon iconId={props.iconId} width={'62'} height={'62px'} viewBox={'0 0 62 62'}/>
                <ExperienceTitle>{props.title}</ExperienceTitle>
            </FlexWrapper>
        </StyledExperience>
    );
};

const StyledExperience = styled.div`
    background-color: aquamarine;
    margin: 1px;
    max-width: 256px;
    width: 100%;
`

const ExperienceTitle = styled.span``