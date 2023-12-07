import { useState } from "react";
import useToggle from "../hooks/useToggle";

export default function CustomHookEx () {
    // const [value, setValue] = useState(false);
    // const toggle = () => {
    //     setValue(!value);
    // };

    const [isPopup, togglePopup] = useToggle(false);

    return (
        <>
            <h3>custom hook 공부</h3>
            <button onClick={togglePopup}>토글</button>
            { isPopup && <div>피카부!</div>}
        </>
    )
}