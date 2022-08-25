// Type checking
import { FC } from "react";
// Image import
import image from "../../../images/illustration-features-tab-3.svg";
// Components
import Heading from "./StyledComponents/Heading";
import Image from "./StyledComponents/Image";
import Paragraph from "./StyledComponents/Paragraph";

const EasySharing: FC = () => {
    return (
        <div>
            <Image>
                <img src={image} alt="Easy Sharing" />
            </Image>
            <Heading>
                Share your bookmarks
            </Heading>
            <Paragraph>
                Easily share your bookmarks and collections with others.
                Create a shareable link that you can send at the click of a button. 
            </Paragraph>
        </div>
    )
}

export default EasySharing;