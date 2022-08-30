// Type checking
import { FC, ReactNode } from "react";

interface ImageProps{
    children:ReactNode
}

const Image: FC<ImageProps> = ({children}) => {
    return (
        <div className="mx-5 my-10 md:w-1/2 md:justify-center">{children}</div>
    )
}

export default Image;