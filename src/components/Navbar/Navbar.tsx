// Type checking
import { FC, useState } from "react";
// Logo
import logo from "../../images/logo-bookmark.svg";
// Components
import DropdownNav from "./Dropdown/DropdownNav";
import NavbarButtons from "./NavbarButtons/NavbarButtons";

const Navbar: FC = () => {

    // For dropdown in mobile devices
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className="flex justify-between items-center mt-5 mb-10 md:px-8 lg:px-16">
            <div className="md:1/4 lg:w-1/3 mx-2">
                {isOpen === false ? <img src={logo} alt="logo" /> : null }
            </div>
            <div className="md:w-3/4 lg:w-1/3">
                {window.screen.width < 768 ?
                    <DropdownNav isOpen={isOpen} setIsOpen={setIsOpen} />
                    :
                    <NavbarButtons />
                }
            </div>
        </nav>
    )
}

export default Navbar;