import { useEffect, useState } from "react"

export default function PhotoPage() {
    // const [photo, setPhoto] = useState(null)
    const [photo, setPhoto] = useState([]);
    const [page, setPage] = useState(1);

    const getPhotos = async () => {
        // const res = await fetch("https://jsonplaceholder.typicode.com/photos/");
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);

        const photos = await res.json();
        // setPhoto(photos)
        setPhoto(prevPhotos => [...prevPhotos, ...photos]);
    }

    // useEffect(()=>{
    //     getPhotos();
    // }, [])

    useEffect(() => {
        const handleScroll = debounce(() => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight) {
                setPage(prevPage => prevPage + 1);
            }
        }, 300);
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const debounce = (fn, delay) => {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(this, args);
            }, delay);
        };
    };

    return (
        <>
            <div>여기는 포토 페이지</div>
            {photo ? (
                photo.map((value) => {
                    return (
                        <ul key={value.id}>
                            <li>번호: {value.id}</li>
                            <li>이름: {value.title}</li>
                            <img src={`${value.thumbnailUrl}`} alt={`이미지 ${value.id}`} />
                        </ul>
                    )
                })
            ) : ( <div>Loading...</div> )}
        </>
    )
}