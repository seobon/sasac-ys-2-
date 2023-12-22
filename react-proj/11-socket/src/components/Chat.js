export default function Chat ({chat}) {
    return (
        <>
            <div>
                &lt;
                <span className="tagPart">me </span>
                <span className="attributePart"> writer</span>
                <span className="marksPart">=</span>
                <span className="attributeValuePart">"{chat.userId}" </span>
                <span className="attributePart"> reciever</span>
                <span className="marksPart">=</span>
                <span className="attributeValuePart">"</span>
                <span className="functionPart">{chat.isDM}</span>
                <span className="bracketPart">&#40; &#41;</span>
                <span className="attributeValuePart">"</span>
                &gt;
                <br />
                <div className="console-container">
                    &lt;
                    <span className="tagPart">p</span>
                    &gt;
                    <span className="marksPart">{chat.content}</span>
                    &lt;
                    <span className="tagPart">p</span>
                    /&gt;
                </div>
                &lt;
                <span className="tagPart">me</span>
                /&gt;
            </div>
        </>
    )
}