const Comment = require('../model/Comment');
// const { commentInfos } = require('../model/Comment');

// 분리한 함수
// function (req, res) {
//     res,render("index");
// }

// 그대로 함수형태로 만들어줘서 보낸다
exports.main = (req, res) => {
    res.render("index");
}

exports.comments = (req, res) => {
    // const commentData = commentInfos();
    // commentData = [
    //     {
    //         id: 1,
    //         uesrid: "lily", 
    //         date: "2023-10-26", 
    //         comment: "hello"
    //     },
    //     {
    //         id: 2, 
    //         uesrid: "seobon", 
    //         date: "2023-10-27", 
    //         comment: "hello world"
    //     },
    // ]
    res.render("comments", {
        commentInfos: Comment.commentInfos(),
        // commentInfos: commentData,
    });
}

// 여러 개 exports 하는 방법도 있지만 앞으로 생길 함수가 많기 때문에 그때그때 하나씩 보내도록 하겠다.
// module.exports ()