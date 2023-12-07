import styled from "styled-components";
// css in js. js안에서 css를 쓸 수 있게 도와주는 컴포넌트(syyle-jsx)
const Container = styled.div`
    display: flex;

    // 반웅형도 그대로 적으면 됨
    @media screen and (max-width : 768px) {
        display: block;
    }
`

const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.color || "black"};

    &:hover {
        transform: scale(1.5);
    }
`;
// || 는 or 연산자 앞에게 참이면 뒤에 걸 읽지 않지만 앞에것이 거짓이면 뒤를 읽기 때문에

export default function StyledComponent () {
    return (
        <>
         <Container>
            {/* 프롭스도 정의해서 보낼 수 있음 */}
            <Box color="red"></Box>
            <Box color="orange"/>
            <Box color="yellow"/>
            <Box color="green"/>
            <Box color="blue"/>
            <Box color="purple"/>
        </Container>
        </>
    )
}