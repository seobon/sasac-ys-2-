const mysql = require("mysql");

// createConnection : mysql 연결 정보를 받아서 mysql과 연결
// db와 연결을 한다 > 어떤 서버에 있는 host, user, password, database 이름
// host가 필요하기에, 만약 클라우드 서버에 만든 mysql 을 연결하고 싶으면 클라우드 서버의 ip가 필요하다.
// user은 mysql 워크벤치 들어갈 때 뜨는 이름
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password : '05270206!',
    database : 'db_visitor',
})

// exports.getVisitor = () => {
//     return [
//         {id: 1, username: "손주연", comment: "주여니 왔다감"},
//         {id: 2, username: "이루다", comment: "이루다 이루다 짱"},
//     ]
// }

// 위 방식은 우리가 계속 사용할 방법은 아님.
// sql은 콜백함수를 사용해야한다.

exports.getVisitor = (cb) => {
    conn.query(`select * from visitor`, (err, rows) => {
        // err 변수가 빈 값이 아니라면, err가 발생했다는 것.
        if (err) {
            throw err;
        }

        // 만약 throw err; 만나지 않았다면, (throw를 만나면 함수가 종료된다.)
        // console.log("visitor", rows);
        cb(rows);
        // rows는 리더님이 정한 임의의 이름이라 
    })
}

// 키 쿼리라는 함수가 원래 이렇다. 첫번째로는 sql문을 넘기고, 그 다음으로는 콜백함수를 보내는데,
// 그 콜백함수는 매개변수로 err를 사용한다. 내가 원하는 sql문의 결과에 따라 바꿔써도 된다.

exports.insertVisitor = (data, cb) => {
    // insert into visitor (username, comment) values (????, ????)
    // 여기서 밸류가 들어있는 콘트롤러의 req.body를 가져오기 위해선 변수를 하나 더 받아야한다.
    const sql = `insert into visitor (username, comment) values ('${data.username}', '${data.comment}')`;
    
    conn.query(sql, (err, result) => {
        if (err) {
            throw err;
        }

        // console.log("visitor insert", result);
        cb(result.insertId);
    });
};


exports.delVisitor = (id, cb) => {
    // delete 할 때 필요한 id가 필요
    const sql = `delete from visitor where id = ${id}`;

    conn.query(sql, (err, result) => {
        if (err) {
            throw err;
        }

        // 삭제할 행이 없을 경우도 처리하고 싶어서 만듦
        let flag = false;
        
        if (result.affectedRows) {
            flag = true;
        };

        console.log("visitor delete", result);
        cb(flag);
        // cb(true);
    });
};