// Type checking and hook
import { FC, useState } from "react";
// Component
import AccordionCard from "./AccordionCard";

const Accordion: FC = () => {

    const [index, setIndex] = useState<number>(0);

    return (
        <div className="px-1 my-10 lg:Accordion-lg-layout">
            <AccordionCard
                title="What is Bookmark?"
                answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente natus ab officia ipsam harum dolor maxime dignissimos unde, eveniet voluptate amet inventore quas itaque accusamus quos. Temporibus quis sit modi! 1"
                id={1}
                index={index}
                setIndex={setIndex}
            />
            <AccordionCard
                title="How can i request a new browser"
                answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente natus ab officia ipsam harum dolor maxime dignissimos unde, eveniet voluptate amet inventore quas itaque accusamus quos. Temporibus quis sit modi! 2"
                id={2}
                index={index}
                setIndex={setIndex}
            />
            <AccordionCard
                title="Is there a mobile app"
                answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente natus ab officia ipsam harum dolor maxime dignissimos unde, eveniet voluptate amet inventore quas itaque accusamus quos. Temporibus quis sit modi! 3"
                id={3}
                index={index}
                setIndex={setIndex}
            />
            <AccordionCard
                title="What about other chromium browsers"
                answer="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente natus ab officia ipsam harum dolor maxime dignissimos unde, eveniet voluptate amet inventore quas itaque accusamus quos. Temporibus quis sit modi! 4"
                id={4}
                index={index}
                setIndex={setIndex}
            />
        </div>
    )
}

export default Accordion;