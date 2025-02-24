import styled from "styled-components";
import photo from '../../../assets/image/Photo.webp'
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper alignItems="center" justifyContent="space-between">
                <div>
                    <span>Hello, i’m</span>
                    <Name>Jayjay D. Dinero</Name>
                    <MainTitle>Freelance UI designer, Fullstack developer, & Data Miner. I create seamless web
                        experiences for
                        end-users.</MainTitle>
                </div>

                <Photo src={photo} alt="Photo"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: plum;
`

const Photo = styled.img`
    width: 444px;
    height: 444px;
    object-fit: cover;
`

const MainTitle = styled.h1``

const Name = styled.h2``