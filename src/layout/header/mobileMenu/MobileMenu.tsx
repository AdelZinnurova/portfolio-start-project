import {Menu} from "../../../components/menu/Menu.tsx";
import {S} from "./../HeaderMenu_Styles.ts"


export const MobileMenu = () => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span/>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={false}>
                <Menu/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};