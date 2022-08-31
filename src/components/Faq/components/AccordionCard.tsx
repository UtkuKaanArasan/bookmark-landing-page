import { FC, SetStateAction } from "react";
import icon from "../../../images/icon-arrow.svg"

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
        <div className="border-b-2">
            <div
                onClick={() => handleIndex(id)}
                className="flex justify-between items-center my-1 py-4"
            >
                <div>{title}</div>
                <div>
                    <img src={icon} alt="icon" />
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