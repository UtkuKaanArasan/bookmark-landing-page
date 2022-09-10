// Type checking
import { FC } from "react";
// Logos
import chromeLogo from "../../images/logo-chrome.svg";
import firefoxLogo from "../../images/logo-firefox.svg";
import operaLogo from "../../images/logo-opera.svg";
// Component
import Card from "./components/Card";

const Downloads: FC = () => {
    return (
        <div className="Margin-padding__main">
            <h1 className="text-2xl font-bold m-3 lg:px-32">
                Download the extension
            </h1>
            <p className="text-slate-400 m-3 py-3 lg:px-32">
                We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to priortize.
            </p>
            <div className="lg:flex lg:justify-around">
                <Card
                    relative="0"
                    Logo={chromeLogo}
                    Name="Chrome"
                    Version={62}
                />
                <Card
                    relative="32px"
                    Logo={firefoxLogo}
                    Name="Firefox"
                    Version={55}
                />
                <Card
                    relative="4rem"
                    Logo={operaLogo}
                    Name="Opera"
                    Version={46}
                />
            </div>
        </div>
    )
}

export default Downloads;