// Type checking
import { FC } from "react";
// Image import
import image from "../../../images/illustration-features-tab-3.svg";
// Components
import Heading from "./StyledComponents/Heading";
import Image from "./StyledComponents/Image";
import Paragraph from "./StyledComponents/Paragraph";
import Container from "./StyledComponents/Container";
import ContentContainer from "./StyledComponents/ContentContainer";

const EasySharing: FC = () => {
    return (
        <Container>
            <Image>
                <img src={image} alt="Easy Sharing" />
            </Image>
            <ContentContainer>
                <Heading>
                    Share your bookmarks
                </Heading>
                <Paragraph>
                    Easily share your bookmarks and collections with others.
                    Create a shareable link that you can send at the click of a button. 
                </Paragraph>
            </ContentContainer>
        </Container>
    )
}

export default EasySharing;