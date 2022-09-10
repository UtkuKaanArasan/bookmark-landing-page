// Type checking
import { FC, SetStateAction } from "react";

interface FeaturesTabNavProps {
    setSelected: React.Dispatch<SetStateAction<string>>
}

const FeaturesTabNav: FC<FeaturesTabNavProps> = ({ setSelected }) => {

    function onClickHandler(e: any) {
        setSelected(e.target.innerText)
    }

    return (
        <div className="
        divide-y-2 border-t-2 border-b-2
        md:flex md:divide-y-0 md:border-t-0 md:w-4/5 md:justify-around md:mx-auto">
            <div
                className="p-4 Hover-Text-Softred cursor-pointer"
                onClick={onClickHandler}
            >
                Simple Bookmarking
            </div>
            <div
                className="p-4 Hover-Text-Softred cursor-pointer"
                onClick={onClickHandler}
            >
                Speedy Searching
            </div>
            <div
                className="p-4 Hover-Text-Softred cursor-pointer"
                onClick={onClickHandler}
            >
                Easy Sharing
            </div>
        </div>
    )
}

export default FeaturesTabNav;