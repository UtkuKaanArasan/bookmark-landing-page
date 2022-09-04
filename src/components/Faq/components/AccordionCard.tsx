// Type checking
import { FC, SetStateAction } from "react";
// Icons
import icon from "../../../images/icon-arrow.svg";
import closeIcon from "../../../images/icon-arrow-close.svg";

interface AccordionCardProps {
    title: string,
    answer: string,
    // id number for index state
    id: number,
    // state
    index: number,
    setIndex: React.Dispatch<SetStateAction<number>>
}

const AccordionCard: FC<AccordionCardProps> = ({ title, answer, id, index, setIndex }) => {

    function handleIndex(Id: number) {
        // Index 0 means all closed
        if (index === Id) {
            setIndex(0);
        } else {
            index !== Id && setIndex(Id)
        }
    }

    return (
        <div className="border-b-2 cursor-pointer lg:w-2/3 xl:w-1/2 2xl:w-1/3">
            <div
                onClick={() => handleIndex(id)}
                className="flex justify-between items-center my-1 py-4 hover-hover:hover:text-Soft-red"
            >
                <div>{title}</div>
                <div>
                    {index === id ?
                        <img className="rotate-180" src={closeIcon} alt="icon" />
                        :
                        <img src={icon} alt="icon" />
                    }
                </div>
            </div>
            {
                index === id && (
                    <div className="text-left py-3">
                        {answer}
                    </div>
                )
            }
        </div>
    )
}

export default AccordionCard;