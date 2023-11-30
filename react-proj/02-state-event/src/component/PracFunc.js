import { useState } from "react";

function PracFunc() {
    const [ number, setNumber ] = useState(0);

    return (
        <>
            <div>
                state number value {number}
                <br />
                <button onClick={() => {
                    setNumber((prevNumber) => prevNumber + 1)
                }}>increase</button>
                <button onClick={() => {
                    setNumber((prevNumber) => prevNumber - 2)
                }}>decrease</button>
            </div>
        </>
    )
}

export default PracFunc;