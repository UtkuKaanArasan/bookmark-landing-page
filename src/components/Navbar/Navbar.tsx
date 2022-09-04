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
        <nav className="flex justify-between items-center mt-5 mb-10 px-5 py-4 md:px-10 md:py-6 lg:px-16 xl:px-20 2xl:px-32">
            <div className="mx-2">
                {isOpen === false ? <img src={logo} alt="logo" /> : null }
            </div>
            <div className="mx-2">
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