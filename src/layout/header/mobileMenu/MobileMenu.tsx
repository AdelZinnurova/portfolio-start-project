import {Menu} from "../../../components/menu/Menu.tsx";
import {S} from "./../HeaderMenu_Styles.ts"
import {useState} from "react";


export const MobileMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span/>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={ () => {setMenuIsOpen(false) }}>
                <Menu/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};