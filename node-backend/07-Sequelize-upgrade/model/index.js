const Sequelize = require("sequelize");

const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Customer = require("./Customer")(sequelize, Sequelize);
db.Orders = require("./Orders")(sequelize, Sequelize);

// 2
db.Customer.hasMany(db.Orders, {
  // onDelete: "cascade",
  foreignKey: "custid",
  // sourceKey: "custid"
})

// 1. 테이블 두 개의 관계를 맺을 것이다. 포린키가 걸려있는 테이블 먼저 생각해보자 여기선 오더스
db.Orders.belongsTo(db.Customer, {
  // 원본키가 삭제될 때 같이 삭제하고 싶을 때 쓰는 것.
  // onDelete: "cascade",
  foreignKey: "custid",
  // 참조하는 테이블의 컬럼의 키 이름과, 참조되는 테이블의 컬럼의 키 이름 같으면 여기까지만 쓰면 된다/
  // 다르다면 targetKey로 적어준다.(같을때도 써도 상관없다 사실 쓰는게 맞다)
  // targetKey: "custid"
})

module.exports = db;