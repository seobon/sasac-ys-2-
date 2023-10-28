const Visitor = require("../model/Visitor");

exports.home = (req, res) => {
    res.render("index");
  };

exports.visitor = (req, res) => {
    // const data = Visitor.getVisitor();
    // res.render("visitor", { data : data });

    Visitor.getVisitor((rows) => {
        res.render("visitor", { data : rows });
        // console.log("rows", rows)
    });
    // 달라진 getVisitor는 이전과는 다르게 매개변수를 받는다(콜백함수 cb)
    // 이전엔 직접 데이터를 가져왔지만, 이번엔 sql 에서 가져오는 것이라서 시간이 걸릴수밖에 없다.
    // 그냥 실행시키고 결과를 받아오면, 결과가 멀쩡하지 않기에 콜백함수를 설계한 것이다.
    // 모델에서 cb 매개변수를 받아야만 
    // 컨트롤러에서 콜백함수를 정의하고 모델쪽에 보내주었고, 모델쪿에선 sql문(데이터를 조회하는)이 오류 없이 성공하면
    // 콜백함수를 실행하게 된다.
}

// POST /visitor => 방명록 insert
exports.postVisitor = (req, res) => {
    // insert할 데이터
    // console.log("req.body", req.body);
    Visitor.insertVisitor(req.body, (id) => {
        // console.log("ctrl postVisitor", id);
        res.send({
            ...req.body,
            id,
        });
    });
};


// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
    console.log(req.params);
    Visitor.delVisitor(req.params.id, (result) => {
        res.send({ result: result });
    });
};