// Type checking
import { FC, ReactNode } from "react";

interface SvgWrapperProps{
    children:ReactNode,
}

const SvgWrapper: FC<SvgWrapperProps> = ({children}) => {
    return (
        <div className="px-4 py-2 cursor-pointer">
            {children}
        </div>
    )
}

export default SvgWrapper;