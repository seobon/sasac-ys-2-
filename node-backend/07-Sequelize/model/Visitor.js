// 테이블의 구조를 정의한다.
// ORM 은 객체와 db의 table을 매핑(연결)하는 기술을 의미한다.
// 어떤 라이브러리의 ORM을 사용하고 있는지는 모르겠지만, 그 라이브러리(여기서는 sequelize)의 문법에 맞게
// sequelize를 이용해서 table의 구조를 정의할 필요가 있다.

function Visitor(Sequelize, DataTypes) {
    // sequelize 객체의 define이라는 메소드를 이용해서 모델(테이블)을 정의한다.
    return Sequelize.define(
        'Visitor', // 테이블 이름
        {
            id: { // int NOT NULL AUTO_INCREMENT PRIMARY KEY,
                type: DataTypes.INTEGER,
                allowNull: false, // true가 기본값. NOT NULL은 무조건 false.
                primaryKey: true, // false가 기본값
                autoIncrement: true,
            },
            username: {// varchar(10) not null,
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            comment: {
                type: DataTypes.TEXT("medium"),
            }
        }, // 컬럼 정의, 실제로 있는 컬럼을 가져와야한다.
        // 내부에 들어가는 key값도 임의로 바꾸면 안된다. 정해져 있다.
        {
            tableName: "visitor",
            // 그냥 테이블 이름
            freezeTableName: true,
            // 앞으론 알아서 sequelize이 sql문을 날려주어 insert를 해주거나 할텐데,
            // 그 과정에서 visitor처럼 단수로 만든 파일명을 visitors 처럼 복수로 변경을 시키는 경우가 있다.
            // 그래서 이 설정은 파일명을 고정시키겠다는 의미이다.
            // insert into visitor ~~ => create() => insert into visitors ~~
            timestamps: false,
            // insert, update 시에 그 시간을 자동을 저장하겠다.
            // 기본값이 true. 그래서 false로 바꿔준다.
            // 왜냐면 시간 등을 자동적으로 컬럼 이름(createAta)을 만들어 insert하는데
            // 우리는 그 컬럼을 만들어 두지 않아서 오류가 난다.
        })
}



// 위에서 정의한 설정을 내보낸다.
module.exports = Visitor;
// model/index.js 에서 받으려고 하는 Visitor를 보내는 코드
// 콘트롤러에서 모델을 정의하려면 인덱스의 sequelize 객체가 필수로 필요하다.
// 그럼 그럼 인덱스에선 또 객체를 넘기고, 비지터는 그걸 받아야 해서 더 복잡해진다.
// 웹서비스를 하나 만들면 수많은 테이블이 생기는데
// 그때마다 sequelize 객체를 만드는 것도 힘들고 코드도 길어진다.
// 그 사이에 중복이 있는 것도 안된다.
// 그래서 인덱스에서 함수화해서 비지터에서 사용하고
// 그 결과로 나오는 인자를 다시 인덱스로 넘겨주는 방식을 사용하는 것이다.
// 그래서 콘트롤러에서는 인덱스만 임포트하면 된다.

// 만약 이 방식이 복잡하면 나중에 코드를 잘 이해하게 되면 복붙에서 다른 방식을 사용해도 된다.