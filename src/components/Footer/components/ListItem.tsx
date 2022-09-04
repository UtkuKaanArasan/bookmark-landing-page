// Type checking
import { FC, ReactNode } from "react";

interface ListItemProps{
    children:ReactNode
}

const ListItem: FC<ListItemProps> = ({children}) => {
    return (
        <li className="px-4 py-2 lg:px-6 xl:px-8 text-Soft-white font-Rubik hover-hover:hover:text-Soft-red cursor-pointer">
            {children}
        </li>
    )
}

export default ListItem;