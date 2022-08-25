// Type checking
import { FC } from "react";
// Image import
import image from "../../../images/illustration-features-tab-2.svg";
// Components
import Heading from "./StyledComponents/Heading";
import Image from "./StyledComponents/Image";
import Paragraph from "./StyledComponents/Paragraph";

const SpeedySearching: FC = () => {
    return (
        <div>
            <Image>
                <img src={image} alt="Speedy searching" />
            </Image>
            <Heading>Intelligent search</Heading>
            <Paragraph>
                Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
            </Paragraph>
        </div>
    )
}

export default SpeedySearching;