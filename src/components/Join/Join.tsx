import { FC, useState } from "react";

const Join: FC = () => {

    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    /* I dont use type checking in events(e) because typescript creates
    problems everytime */
    function inputHandler(e: any) {
        setEmail(e.target.value)
    };

    function errorHandler(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setError(true);
    };

    function submitHandler(e:any) {
        e.preventDefault()
        alert(`Email submitted: ${email}`)
        setEmail('')
        e.target[0].value = ''
    }

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
                <form
                    className="lg:flex lg:justify-between lg:items-center"
                    onSubmit={submitHandler}
                >
                    <div className={error === true ?
                        'border-2 border-Soft-red rounded-md bg-Soft-red lg:w-[70%]'
                        :
                        'lg:w-[70%]'
                    }>
                        <input
                            className="px-4 py-3 border-2 border-white rounded-md text-black w-full"
                            type="email"
                            placeholder="Enter your email address"
                            onChange={inputHandler}
                            onInvalid={errorHandler}
                            required
                        />
                        {
                            error === true ?
                                <div className="italic text-left py-0.5">Whoops, make sure it's an email</div>
                                :
                                null
                        }
                    </div>
                    <div className="lg:w-1/4">
                        <button
                            className="w-full p-3 my-4 bg-Soft-red border-2 border-Soft-red rounded-md hover-hover:hover:bg-white hover-hover:hover:text-Soft-red"
                            type="submit">
                            Contact Us
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Join;