// Type checking
import { FC } from "react";
// Logo svg
import logo from "../../images/logo-bookmark-white.svg";
// Logo components 
/*(to use hover functionality I copied the original svg files and modified them) */
import FacebookIcon from "./components/FacebookIcon";
import TwitterIcon from "./components/TwitterIcon";
// Components
import ListItem from "./components/ListItem";

const Footer: FC = () => {
    return (
        <footer className="bg-Very-dark-blue p-6 md:px-12 lg:px-18 xl:px-24 2xl:px-30 flex flex-col items-center lg:flex-row lg:justify-between">
            <div className="lg:flex lg:items-center">
            <div className="p-4">
                <img src={logo} alt="bookmark logo white" />
            </div>
            <div className="text-white p-4">
                <ul className="lg:flex">
                    <ListItem>FEATURES</ListItem>
                    <ListItem>PRICING</ListItem>
                    <ListItem>CONTACT</ListItem>
                </ul>
            </div>
            </div>
            <div className="p-4 flex justify-center">
                <FacebookIcon />
                <TwitterIcon />
            </div>
        </footer>
    )
}

export default Footer;