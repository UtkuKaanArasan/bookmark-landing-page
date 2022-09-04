// React type checking
import React, { FC } from "react";
// Images and logos
import logo from '../../../images/logo-bookmark-white.svg';
import closeLogo from '../../../images/icon-close.svg';
import facebookSvg from '../../../images/icon-facebook.svg';
import twitterSvg from '../../../images/icon-twitter.svg';
// Components
import DropdownMenuItem from "./DropdownMenuItem";

interface DropdownMenuProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DropdownMenu: FC<DropdownMenuProps> = ({ setIsOpen }) => {
    return (
        <div
            className="bg-Very-dark-blue/95 p-10 h-full w-full absolute left-0 top-0 z-50">
            <div className="flex justify-between items-center mt-3 mb-9">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div>
                    <img
                        src={closeLogo}
                        alt="close logo"
                        onClick={() => setIsOpen(false)}
                    />
                </div>
            </div>
            <DropdownMenuItem>FEATURES</DropdownMenuItem>
            <DropdownMenuItem>PRICING</DropdownMenuItem>
            <DropdownMenuItem>CONTACT</DropdownMenuItem>
            {/* Login button */}
            <div className="border-2 text-2xl text-white rounded-lg font-medium font-Rubik">
                <div className="mx-5 my-2">LOGIN</div>
            </div>
            <div className="flex justify-center p-2 m-2">
                <img className="m-6" src={facebookSvg} alt="facebook" />
                <img className="m-6" src={twitterSvg} alt="twitter" />
            </div>
        </div>
    )
}

export default DropdownMenu;