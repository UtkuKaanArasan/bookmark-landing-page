// Type checking
import { FC, ReactNode } from "react";

interface ContainerProps {
    children: ReactNode
}

const Container: FC<ContainerProps> = ({ children }) => {
    return (
        <div className="pt-10 mt-10 pb-5 mb-5 md:flex md:px-16">{children}</div>
    )
}

export default Container;