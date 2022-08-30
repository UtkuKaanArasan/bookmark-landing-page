// Type checking
import { FC, ReactNode } from "react";

interface ContentContainerProps{
    children:ReactNode
}

const ContentContainer: FC<ContentContainerProps> = ({children}) => {
    return (
        <div className="mx-5 my-10 md:w-1/2 md:flex md:flex-col md:justify-center md:text-left md:m-5">{children}</div>
    )
}



export default ContentContainer;