function Orders(Sequelize, DataTypes) {
    return Sequelize.define(
        'Orders',
        {
            orderid: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            custid: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            prodname: {
                type: DataTypes.STRING(6),
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            } ,
            amount: { // SMALLINT  NOT NULL,
                type: DataTypes.INTEGER,
                allowNull: false,
            },

            // FOREIGN KEY도 모델에서 정의해야함
        },

        {
            tableName: "orders",
            freezeTableName: true,
            timestamps: false,
        })
  }
  
  module.exports = Orders;