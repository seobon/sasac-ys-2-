const { Customer, Orders, Sequelize } = require("../model");
const Op = Sequelize.Op;

exports.main = async (req, res) => {
    // Customer의 주문 목록을 custname과 함께 보고 싶다.
    const cust = await Customer.findAll({
        attributes: ["custid", "custname", "birth"],
        where: { 
            // custname: "강해린"
            birth: { [ Op.gte ] : "2000-01-01" }
         },
        include: [
            {
                model: Orders,
                // 조회하고 싶지 않은 요소를 제외할 때
                attributes: { exclude: ["cusrid"] },
                // where 쓸 수 있지만 지금 쓸 필요 없어서 주석처리함
                // where: {},
            },
        ],
        raw: true,
    });
    res.send(cust);
};

    

