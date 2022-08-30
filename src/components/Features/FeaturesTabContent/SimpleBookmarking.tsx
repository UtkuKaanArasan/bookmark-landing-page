// Type checking
import { FC } from "react";
// Image import
import image from "../../../images/illustration-features-tab-1.svg";
// Components
import Heading from "./StyledComponents/Heading";
import Image from "./StyledComponents/Image";
import Paragraph from "./StyledComponents/Paragraph";
import Container from "./StyledComponents/Container";
import ContentContainer from "./StyledComponents/ContentContainer";

const SimpleBookmarking: FC = () => {
    return (
        <Container>
            <Image>
                <img src={image} alt="Simple bookmarking" />
            </Image>
            <ContentContainer>
                <Heading>Bookmark in one click</Heading>
                <Paragraph>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.</Paragraph>
            </ContentContainer>
        </Container>
    )
}

export default SimpleBookmarking;