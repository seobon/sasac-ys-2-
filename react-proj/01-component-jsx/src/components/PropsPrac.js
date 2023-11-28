import PropTypes from "prop-types"
import { Component } from "react";


// function PropsPrac ({food}) {
//     return (
//         <>
//             <span>제가 좋아하는 음식은 </span>
//             <span className="PropsPrac__food">{food}</span>
//             <span>입니다. 그냥 좋아요.</span>
//         </>
//     );
// }

// PropsPrac.defaultProps = {
//     food: "미역국"
// }


// function PropsPrac ({title, author, price, type}) {
//     return (
//         <>
//         <div className="PropsPrac__Back">
//             <div className="PropsPrac__main">이번주 베스트셀러 </div>
//             <img src="/logo192.png" />
//             <div className="PropsPrac__title">{title}</div>
//             <div className="PropsPrac__info">저자: {author}</div>
//             <div className="PropsPrac__info">판매가: {price}</div>
//             <div className="PropsPrac__info">구분: {type}</div>
//         </div>
//         </>
//     );
// }

// export default PropsPrac

function valid() {
    console.log("콘솔 띄우기 성공!")
}

class PropsPrac extends Component {

    render () {
        return (
            <div>
                <div>{this.props.text}</div>
                <button onClick={valid()}>버튼</button>
            </div>
        );
    }
}

PropsPrac.defaultProps = {
    text: "이건 기본 text props입니다."
};

PropsPrac.propTypes = {
    text: PropTypes.string.isRequired
};


export default PropsPrac;