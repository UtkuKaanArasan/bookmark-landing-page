// Type checking
import { FC } from "react";
// Image
import image from '../../images/illustration-hero.svg';

const Hero: FC = () => {
    return (
        <div className="mb-10 md:flex md:items-center md:flex-row-reverse md:text-left md:px-8 lg:px-16">
            <div className="md:w-4/5 m-4">
                <img src={image} alt="Hero banner" />
                {/* Background object will be here */}
            </div>
            <div className="md:w-4/5 m-4">
                <h1 className="text-3xl font-bold text-Very-dark-blue leading-snug mx-2 my-4 lg:text-4xl xl:text-5xl 2xl:text-6xl">
                    A Simple Bookmark Manager
                </h1>
                <p className="mx-2 my-4 p-2 md:mx-0 md:mr-2 text-slate-400 break-normal">
                    A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className="flex justify-center md:justify-start">
                    <button className="p-3 m-1 bg-Soft-blue text-white rounded-md border-2 border-Soft-blue hover-hover:hover:bg-white hover-hover:hover:text-Soft-blue">
                        Get it on Chrome
                    </button>
                    <button className="p-3 m-1 bg-Soft-white rounded-md drop-shadow-md border-2 border-white hover-hover:hover:border-Grayish-blue hover-hover:hover:text-Grayish-blue">
                        Get it on Firefox
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero;