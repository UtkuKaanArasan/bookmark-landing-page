// Type checking and hooks
import { FC, SetStateAction } from "react";
// Logo
import hamburger from "../../../images/icon-hamburger.svg";
// Component
import DropdownMenu from "./DropdownMenu";

interface DropdownNavProps {
    isOpen: boolean,
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const DropdownNav: FC<DropdownNavProps> = ({ isOpen, setIsOpen }) => {

    return (
        <div>
            {isOpen === true ?
                // For close button to function i passed the setState with props
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