// Type checking
import { FC, ReactNode } from "react";

interface ImageProps{
    children:ReactNode
}

const Image: FC<ImageProps> = ({children}) => {
    return (
        <div className="pt-10 mt-10 pb-5 mb-5">{children}</div>
    )
}

export default Image;