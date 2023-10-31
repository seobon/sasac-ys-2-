const { Visitor } = require("../model");
// 객체 분해할당한다.
// 파일명이 index.js니까 파일명 생략.

exports.home = (req, res) => {
  res.render("index");
};

// GET /visitor 기존 방명록을 전체 조회 후 render("visitor")
exports.visitor = (req, res) => {
    // 조회 할 때 조건을 걸 게 있다면 아래와 같이 사용하면 된다.
    // 이제 SQL문을 사용할 필요가 없다.
    // Visitor.findAll({
    //     where: { username: "lily"}
    // })

    // sequelize는 프로미스 기반이라 콜백함수를 쓸 필요가 없다.
    // select * from visitor;
    Visitor.findAll().then((result) => {
        console.log("findAll result", result);
        console.log("0 index의 username", result[0].username);
        // dataValues는 생략해도 사용해도 된다.
        // 기대 : [{id: , username: , comment: }]
        // 근데 다른 수많은 정보도 같이 나옴
        res.render("visitor", {data: result});
    });

    // findOne도 있다. 하나만 조회.
};

// POST /visitor => 방명록 insert
exports.postVisitor = (req, res) => {
    const data = {
        username: req.body.username,
        comment: req.body.comment
    }
    // key 정보는 컬럼명이라서 맘대로 정하는 거 아니다
    Visitor.create(data).then((result) => {
        console.log("create result: ", result)
        res.send(result)
    });
};

// 자동으로 칸 비우기 해보자.

// async/await 사용
// exports.postVisitor = async (req, res) => {
//     const data = {
//         username: req.body.username,
//         comment: req.body.comment
//     }
//     const createVisitor = await Visitor.create(data).catch();
//     res.send(createVisitor)
// };


// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
    Visitor.destroy({
        where: {
            id: req.params.id,
        },
    }).then((result) => {
        console.log("destroy result: ", result);
        res.send({result: true});
    });
};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
    // findOne은 findAll 과 다르게 visitor 객체들을 배열로 가져오지 않는다.
    // visitor 객체 하나만 가져온다
    // select * from visitor where id = ?? limit 1;
    Visitor.findOne({
        where: {
            id: req.params.id,
        }
    }).then((result) => {
        console.log("findOne result: ", result);
        res.send(result);
    })
};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
    // 앞 {}에는 업데이트 내용, 뒤 {}는 조건
    const data = {
        username: req.body.username,
        comment: req.body.comment
    };
    // update visitor set username = '??', comment='???' where id = ?
    Visitor.update(data, {
        where: {
            id: req.body.id,
        },
    }).then((result) => {
        console.log("update result: ", result);
        res.send({result: true});
    });
};

exports.getTest = (req, res) => {
    // select * from visitor where id = X limit 1;
    // 저 *에 다른 것을 넣고 싶을 때 (특정 부분만 가져오고 싶을 때)
    Visitor.findAll({
        attributes: ["username", "id"],
        // where: {
        //     id: req.params.id,
        // },
            // select username from visitor where id = 2 order by username ASC;
        order: [["username", "ASC"]],
        // order는 여러 조건을 걸 수 있어서 배열을 여러개 넣을 수 있음 [["id", ASC], ["", ]]
    }).then((result) => {
        console.log("findOne result: ", result);
        res.send(result);
    });
};

