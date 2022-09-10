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
        <div className="Margin-padding__main">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-semibold p-4 md:text-center">Features</h1>
                <p className="text-slate-400 mt-2 mb-10 md:w-2/3 lg:w-1/3">Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
            </div>
            <FeaturesTabNav setSelected={setSelected} />
            {contentHandler()}
        </div>
    )
}

export default Features;