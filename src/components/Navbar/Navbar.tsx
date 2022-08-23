// Type checking
import { FC } from "react";
// Logo
import logo from "../../images/logo-bookmark.svg";
// Components
import DropdownNav from "./Dropdown/DropdownNav";
import NavbarButtons from "./NavbarButtons/NavbarButtons";

const Navbar: FC = () => {
    return (
        <nav className="flex justify-between mx-14 my-7">
            <div>
            <img src={logo} alt="logo" />
            </div>
            <div className="md:w-2/3 lg:w-1/3">
                {window.screen.width < 768 ? <DropdownNav /> : <NavbarButtons />}
            </div>
        </nav>
    )
}

export default Navbar;