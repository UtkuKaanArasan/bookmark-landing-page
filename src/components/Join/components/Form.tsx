// Type checking
import { FC, SetStateAction } from "react";

interface FormProps {
    // States
    email: string,
    error: boolean,
    // setStates
    setEmail: React.Dispatch<SetStateAction<string>>,
    setError: React.Dispatch<SetStateAction<boolean>>,
};

const Form: FC<FormProps> = ({ email, setEmail, error, setError }) => {

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

    function submitHandler(e: any) {
        e.preventDefault()
        // This function can be changed for sending data to backend
        alert(`Email submitted: ${email}`)
        // To set the input default every submit
        setEmail('')
        e.target[0].value = ''
    }

    return (
        <form className="lg:Form-layout"
            onSubmit={submitHandler}>
            <div className={error === true ?
                'border-2 border-Soft-red rounded-md bg-Soft-red lg:w-[70%]'
                :
                'lg:w-[70%]'}>
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
                        <div className="italic text-left py-0.5">
                            Whoops, make sure it's an email
                        </div>
                        :
                        null
                }
            </div>
            <div className="lg:w-1/4">
                <button
                    className="w-full p-3 my-4 bg-Soft-red border-2 border-Soft-red rounded-md Hover-Bg-White Hover-Text-Softred"
                    type="submit">
                    Contact Us
                </button>
            </div>
        </form>
    )
}

export default Form;