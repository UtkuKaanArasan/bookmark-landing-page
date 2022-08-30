// Type checking
import { FC } from "react";
// Image import
import image from "../../../images/illustration-features-tab-2.svg";
// Components
import Heading from "./StyledComponents/Heading";
import Image from "./StyledComponents/Image";
import Paragraph from "./StyledComponents/Paragraph";
import Container from "./StyledComponents/Container";
import ContentContainer from "./StyledComponents/ContentContainer";

const SpeedySearching: FC = () => {
    return (
        <Container>
            <Image>
                <img src={image} alt="Speedy searching" />
            </Image>
            <ContentContainer>
                <Heading>Intelligent search</Heading>
                <Paragraph>
                    Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
                </Paragraph>
            </ContentContainer>
        </Container>
    )
}

export default SpeedySearching;