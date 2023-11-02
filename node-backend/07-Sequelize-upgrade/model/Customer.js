function Customer(Sequelize, DataTypes) {
    // (Customer) 함수 이름은원하는 대로 해도 괜찮다.
    // 매개변수이름도 어떤걸로 해도 상관 없지만 뭘 받아오는지는 알아야한다.
    // Sequelize은 모델의 index 파일에서 주는 Sequelize를 받아오고 있다.
    return Sequelize.define(
        // 테이블을 정의해서 보내줄 것이다.
        'Customer', // 첫번째 인자로 테이블 이름을 알려준다.

        // 두번째 인자는 컬럼 정보
        {
            custid: { // CHAR(10) NOT NULL PRIMARY KEY,
                type: DataTypes.STRING(10),
                // DataTypes은 전부 대문자로 써야함.
                allowNull: false,
                primaryKey: true,
                // 카멜케이스라서 Key 대문자로 시작해야함
            },
            custname: { // VARCHAR(10) NOT NULL, 
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            addr: { // CHAR(10) NOT NULL, 
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            phone: { // CHAR(11), 
                type: DataTypes.STRING(11),
            } ,
            birth: { // DATE 
                type: DataTypes.DATE,
            } 
        },

        // 세번째 인자는 테이블 설정
        {
            tableName: "customer",
            freezeTableName: true,
            // 테이블 이름을 복수형으로 맘대로 바꾸는 것을 방지.
            timestamps: false,
            // 쓸데없는 시간 관련된 컬럼을 만들어버리는 것을 방지. 오류난다.
        })
  }
  
  module.exports = Customer;
  