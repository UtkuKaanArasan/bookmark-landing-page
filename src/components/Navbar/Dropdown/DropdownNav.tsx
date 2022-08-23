// Type checking and hooks
import { FC, useState } from "react";
// Logo
import hamburger from "../../../images/icon-hamburger.svg";
// Component
import DropdownMenu from "./DropdownMenu";

const DropdownNav: FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div>
            {isOpen === true ?
                <DropdownMenu setIsOpen={setIsOpen} />
                :
                <img
                    src={hamburger}
                    alt="dropdown icon"
                    onClick={() => setIsOpen(true)}
                />
            }
        </div>
    )
}

export default DropdownNav;