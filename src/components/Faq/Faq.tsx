// Type checking
import { FC } from "react";
// Component
import Accordion from "./components/Accordion";

const Faq: FC = () => {
    return (
        <div className="my-24 px-6 py-4 md:px-12 md:py-6 lg:px-18 xl:px-24 2xl:px-30">
            <h1 className="text-3xl font-bold m-3 lg:px-32">Frequently Asked Questions</h1>
            <p className="text-slate-400 m-3 pb-6 md:px-24 lg:px-32">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            <Accordion />
            <button className="border-2 border-Soft-blue rounded-lg bg-Soft-blue text-white px-6 py-3">More info</button>
        </div>
    )
}

export default Faq;