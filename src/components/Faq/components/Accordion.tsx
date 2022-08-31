import { FC, useState } from "react";
import AccordionCard from "./AccordionCard";

const Accordion: FC = () => {

    const [index, setIndex] = useState<number>(0);

    return (
        <div className="px-1 my-10">
            <AccordionCard
                title="What is Bookmark?"
                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, magni! 1"
                id={1}
                index={index}
                setIndex={setIndex}
            />
            <AccordionCard
                title="How can i request a new browser"
                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, magni! 2"
                id={2}
                index={index}
                setIndex={setIndex}
            />
            <AccordionCard
                title="Is there a mobile app"
                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, magni! 3"
                id={3}
                index={index}
                setIndex={setIndex}
            />
            <AccordionCard
                title="What about other chromium browsers"
                answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, magni! 4"
                id={4}
                index={index}
                setIndex={setIndex}
            />
        </div>
    )
}

export default Accordion;