import { FormEvent, useState } from "react"

type FetchProps = {
    url: string
}

const Fetch = ({url} : FetchProps ) => {

    const [headingText, setHeadingTest] = useState<string>("Click the button")
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const handleClick = (e: FormEvent) => {
        e.preventDefault();
        setIsDisabled(true);
        setHeadingTest("hello there");

    }
    return (
        <div>
            <button onClick={handleClick} disabled={isDisabled}>Load Greeting</button>
            <p role="heading">
                {headingText}
            </p>
        </div>
    );

}

export default Fetch;