// Type checking
import { FC } from "react";
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
            <li className="py-2 px-6 text-white bg-Soft-red rounded-md border-Soft-red border-2 hover:bg-white hover:text-Soft-red">
                <a href="/">Login</a>
            </li>
        </ul>
    )
}

export default NavbarButtons;