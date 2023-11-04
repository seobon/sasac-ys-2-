// const User = require('../model/User_mysql')
const { User } = require('../model')

exports.index = (req, res) => {
  res.render('index')
}

exports.signup = (req, res) => {
  res.render('signup')
}

exports.post_signup = (req, res) => {
  const data = {
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name
  }
  // console.log("post_signup data: ", data)
  User.create(data).then((result) => {
    // console.log("create result: ", result)
    res.send(result)
  }).catch((err) => {
    res.send({ result: false });
  });
};


exports.signin = (req, res) => {
  res.render('signin')
}

exports.post_signin = (req, res) => {
  User.findOne({
      where: {
        userid: req.body.userid,
        pw: req.body.pw
      }
  }).then((result) => {
      // console.log("findOne result: ", result);
      // console.log("findOne result.userid: ", result.userid);

      if (result != "null") res.send({ result: true, id: result.id })
      else res.send({ result: false })
  });
};


exports.profile = (req, res) => {
  // console.log("여기요", req.body)


  
  console.log(req.session.user)



  User.findOne({
      where: {
        id: req.body.id,
      }
  }).then((result) => {
      // console.log("findOne result: ", result);
      // console.log("findOne result.userid: ", result.userid);



      if (result != "null") res.render('profile', { data: result })



      else res.redirect('/user/signin')
  });
}


exports.profile_edit = (req, res) => {
  const data = {
    ...req.body,
    id: req.params.id,
  };
  // console.log("data", data)
  User.update(data, {
    where: {
        id: data.id,
    },
  }).then((result) => {
      // console.log("update result: ", result); // [ 1 ] or [ 0 ]
      // 업데이트 여부에 따라서 result에 [ 1 ] 혹은 [ 0 ]이 담김
      // 따라서 if 문을 이용하여 result의 0번 인덱스가 1일 경우의 성공, 그렇지 않으면 실패.
      // 1, 0 / true, false
      // null, undefined => false
      if (result) res.send({result: true});
      else res.send({result: false});
  });
}

exports.profile_delete = (req, res) => {
  User.destroy({
      where: {
          id: req.params.id,
      },
  }).then((result) => {
      // console.log("destroy result: ", result);
      if (result) res.send({result: true});
      else res.send({result: false});
  });
};