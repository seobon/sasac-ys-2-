export default function Chat ({chat}) {
    return (
        <>
            <div>
                <span className="tagPart">function </span>
                <span className={`functionPart`}> ToAll </span>
                <span className="bracketPart"> &#40; </span>
                <span className="attributePart"> {chat.userId} </span>
                <span className="bracketPart"> &#41; </span>
                <span className="bracketPart"> &#123; </span>
                <div className="console-container">
                    <span className="attributePart">console</span>
                    <span className="pathPart">.</span>
                    <span className="functionPart">log</span>
                    <span className="bracketPart"> &#40; </span>
                    <span className="attributeValuePart">"{chat.content}"</span>
                    <span className="bracketPart"> &#41; </span>
                    <span className="pathPart"> &#59; </span>
                </div>
                <span className="bracketPart"> &#125; </span>
                <span className="pathPart"> &#59; </span>
            </div>
        </>
    )
}