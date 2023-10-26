const User = require('../model/User');
// User = userInfos = () => {}

exports.main = (req, res) => {
    res.render("index");
}

exports.membership = (req, res) => {
    res.send(req.query);
    console.log(req.query);
}

exports.login = (req, res) => {
    let userList = User.userInfos()[0].split("\n    ");
    for (let i = 0; i < userList.length; i++) {
        if (req.body.id == userList[i].split("//")[0] && req.body.pw == userList[i].split("//")[1] ) {
            // let userName = userList[i].split("//")[2]
            // res.send(true, userName)
            let data = {
                isSuccess: true,
                userName: userList[i].split("//")[2]
            }
            res.send(data)
            break;
        } else {
            res.send(false)
            break;
        }
    }
}