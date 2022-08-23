// Type checking
import { FC } from "react";

interface NavbarButtonProps{
    children: React.ReactNode
}

const NavbarButton: FC<NavbarButtonProps> = (props) => {
    return (
        <li className="py-2 px-6 hover:text-Soft-red">
            {props.children}
        </li>
    )
}

export default NavbarButton;