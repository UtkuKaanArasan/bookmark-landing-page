// Type checking
import { FC } from "react";
import LoginButton from "./LoginButton";
// Components
import NavbarButton from "./NavbarButton";

const NavbarButtons: FC = () => {
    return (
        <ul className="flex justify-around">
            <NavbarButton>
                <a href="/">Features</a>
            </NavbarButton>
            <NavbarButton>
                <a href="/">Pricing</a>
            </NavbarButton>
            <NavbarButton>
                <a href="/">Contact</a>
            </NavbarButton>
            <LoginButton />
        </ul>
    )
}

export default NavbarButtons;