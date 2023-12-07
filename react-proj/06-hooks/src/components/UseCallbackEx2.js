import { useState, useCallback, useEffect } from "react"

export default function UseCallbackEx2({ postId }) {
    const [post, setPost] = useState();
    // https://jsonplaceholder.typicode.com/posts/
    const fetchData = useCallback(async () => {
        console.log("aaaa")
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        const post = await res.json();
        setPost(post);
    }, [postId]);
    // postId가 변경될때만 함수를 재선언하겠다는 의미이다.

    useEffect(() => {
        fetchData();
    }, [fetchData])
    // fetchData 함수가 변경될 때만 함수를 실행시키겠다는 의미이다.

    return (
        <>
            <h3>useCallback 공부2</h3>
            <div>조회한 포스트 ID: {postId}</div>

            {post && (
                <div>
                    <div>id: {post.id}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </div>

            )}
        </>
    )
}

// useMemo vs useCallback
// useMemo : 특정 값을 기억하여, 불필요한 연산을 방지
// useCallback : 