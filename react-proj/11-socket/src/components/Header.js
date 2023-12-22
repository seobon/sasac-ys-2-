export default function Header ({room}) {
    return (
        <>
            <button className={`${room.roomType}FilePart button`}>{room.roomName}.{room.roomType}</button>
        </>
    )
}