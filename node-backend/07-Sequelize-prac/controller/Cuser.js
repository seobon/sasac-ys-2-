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
      // console.log("update result: ", result);
      res.send({result: true});
  });
}




exports.profile_delete = (req, res) => {
  User.destroy({
      where: {
          id: req.params.id,
      },
  }).then((result) => {
      console.log("destroy result: ", result);
      res.send({result: true});
  });
};