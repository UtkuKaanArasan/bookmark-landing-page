// Type checking
import { FC, useState } from "react";
// Components
import FeaturesTabNav from "./FeaturesTabNav";
import EasySharing from "./FeaturesTabContent/EasySharing";
import SimpleBookmarking from "./FeaturesTabContent/SimpleBookmarking";
import SpeedySearching from "./FeaturesTabContent/SpeedySearching";

const Features: FC = () => {

    const [selected, setSelected] = useState('Simple Bookmarking');

    function contentHandler() {
        switch (selected) {
            case 'Simple Bookmarking':
                return <SimpleBookmarking />
            case 'Speedy Searching':
                return <SpeedySearching />
            case 'Easy Sharing':
                return <EasySharing />
        };
    }

    return (
        <div className="my-32">
            <h1 className="text-3xl font-semibold p-4 md:text-center">Features</h1>
            <p className="text-slate-400 mt-2 mb-10">Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            <FeaturesTabNav selected={selected} setSelected={setSelected} />
            {contentHandler()}
        </div>
    )
}

export default Features;