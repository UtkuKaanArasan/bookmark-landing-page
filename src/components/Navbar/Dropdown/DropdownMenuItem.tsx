// Type checking
import { FC } from "react";

interface DropdownMenuItemProps {
    children: React.ReactNode
};

const DropdownMenuItem: FC<DropdownMenuItemProps> = ({ children }) => {
    return (
        <div className="border-t-2 border-Grayish-blue text-white text-2xl font-Rubik font-normal">
            <div className="m-4">{children}</div>
        </div>
    )
}

export default DropdownMenuItem;