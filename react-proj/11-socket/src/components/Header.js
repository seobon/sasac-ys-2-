export default function Header ({room}) {
    return (
        <>
            <button className={`${room.roomType}FilePart`}>{room.roomName}.{room.roomType}</button>
        </>
    )
}