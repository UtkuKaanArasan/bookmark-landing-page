// Type checking
import { FC } from "react";
// Image
import image from "../../../images/bg-dots.svg";

interface CardProps{
    Name: string,
    Version: number,
    // Logo import is string
    Logo: string,
    // Relative positioning distance, use css units in string, eg. 32px, 4rem
    relative:string,
}

const Card: FC<CardProps> = ({ Name, Version, Logo, relative}) => {
    return (
        // Couldn't get the tailwind to work conditionally, so I used inline styles
        <div style={{position:'relative', top:relative}}>
            <div className="flex flex-col items-center rounded-2xl shadow-lg mx-4 my-10">
                <div className="m-2 p-3">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="m-2 px-4 py-2">
                    <h2 className="text-xl font-semibold p-1">Add to {Name}</h2>
                    <p className="text-slate-400 p-1 mb-3">Minimum version {Version}</p>
                </div>
                <div className="m-2">
                    <img src={image} alt="background dots" />
                </div>
                <div className="m-6 w-10/12">
                    <button className="w-full px-4 py-3 bg-Soft-blue text-white border-2 border-Soft-blue rounded-lg hover-hover:hover:bg-white hover-hover:hover:text-Soft-blue">Add & Install Extension</button>
                </div>
            </div>
        </div>
    )
}

export default Card;