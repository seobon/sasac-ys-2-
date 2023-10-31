const Sequelize = require("sequelize");
// 시뭘라이즈 모듈을 임포트해서 객체를 하나 담는다
const config = require("../config/config.json")["development"];
// 이 코드는 상대경로로 접근을 하는 거 보니까 해당 파일을 만들어야 함을 알 수 있다.
// require("../config/config.json")를 객체로 가져왔다.
// db에 대한 정보를 config.json에 담는다.
// 지금은 mysql을 다루지만 실제 배포할 때는 다른 sql을 사용할 수도 있다.
// 그때마다 일일이  json에 적힌 정보를 바꿀 수 없기 때문에 key에 접근해서
// 개발할 때는 ["development"] 를 이용해 개발 서버 버전을 가져오고, 배포할 때는 ["production"] 버전을 사용하는 식이다.

const data = {
    "development": {}
}
// 이런식이 파일이 있으면 data.development 로 불러오는 것도 가능하지만 data[development]도 가능하다.
// key 값에 develop-ment 식으로 하이픈이 있는 경우에도 대괄호를 사용한다 data.develop-ment는 불가능 하기 때문이다.

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// Sequelize 객체를 만든다.
// Sequelize를 호출할 때 이런 방식을 쓰는데 공식 문서에 가면 다른 방식도 사용가능하지만 그냥 이렇게 쓴단다.

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// 소문자로 시작하는 sequelize, 대문자로 시작하는 Sequelize를 넣었다.
// db = { sequelize: sequelize, sequelize: Sequelize}
// 그럼 이런 형태의 db가 만들어지는데 key는 뭘 써도 상관 없다.

// const Visitor = require("./Visitor")
// 위와 아래는 같은 의미 즉, Visitor파일에서 정의해서 보내준 Visitor라는 함수를 
db.Visitor = require("./Visitor")(sequelize, Sequelize);
// db.Visitor에는 sequelize로 visitor 테이블을 정의한 객체를 담음.

// db.User = require("./User")(sequelize, Sequelize);
// 새로 User라는 테이블이 만들어지면 이런식으로 임포트하면 되고.
// 든 테이블을 exports해서 이 인덱스 파일에 모으고,
// 콘트롤러 연결은 인덱스 파일만 하는 것을 목표로 한다.

module.exports = db;