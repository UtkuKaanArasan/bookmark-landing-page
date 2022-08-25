// Type checking
import { FC, ReactNode } from "react";

interface ParagraphProps{
    children:ReactNode
}

const Paragraph: FC<ParagraphProps> = ({children}) => {
    return (
        <p className="text-slate-400 m-4">{children}</p>
    )
}

export default Paragraph;
