// Type checking
import { FC, ReactNode } from "react";

interface HeadingProps {
    children: ReactNode
}

const Heading: FC<HeadingProps> = ({ children }) => {
    return (
        <h1 className="text-3xl font-semibold mx-2 my-4">{children}</h1>
    )
}

export default Heading;