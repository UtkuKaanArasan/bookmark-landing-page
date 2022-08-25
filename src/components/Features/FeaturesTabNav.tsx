// Type checking
import { FC, SetStateAction } from "react";

interface FeaturesTabNavProps {
    selected: string,
    setSelected: React.Dispatch<SetStateAction<string>>
}

const FeaturesTabNav: FC<FeaturesTabNavProps> = ({ selected, setSelected }) => {

    function onClickHandler(e: any) {
        setSelected(e.target.innerText)
    }

    return (
        <div>
            <div>
                <div
                    className="border-t-2 p-4"
                    onClick={onClickHandler}
                >
                    Simple Bookmarking
                </div>
                <div
                    className="border-t-2 p-4"
                    onClick={onClickHandler}
                >
                    Speedy Searching
                </div>
                <div
                    className="border-y-2 p-4"
                    onClick={onClickHandler}
                >
                    Easy Sharing
                </div>
            </div>
        </div>
    )
}

export default FeaturesTabNav;