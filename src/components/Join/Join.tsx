// Type checking and useState
import { FC, useState } from "react";
// Component
import Form from "./components/Form";

const Join: FC = () => {

    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    return (
        <div className="
        my-24 pt-12 pb-6 px-6 md:px-12 lg:px-18 xl:px-24 2xl:px-30 
        bg-Soft-blue text-white
        flex flex-col justify-center items-center
        ">
            <div className="w-11/12 md:w-2/3 lg:w-1/2">
                <h2 className="text-lg py-1">
                    35,000+ ALREADY JOINED
                </h2>
                <h1 className="text-xl font-semibold mt-1 mb-4">
                    Stay up-to-date with what we're doing
                </h1>
                <Form
                    email={email}
                    setEmail={setEmail}
                    error={error}
                    setError={setError}
                />
            </div>
        </div>
    )
}

export default Join;