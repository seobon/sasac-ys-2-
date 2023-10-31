const User = require('../model/User')

exports.index = (req, res) => {
  res.render('index')
}

exports.signup = (req, res) => {
  res.render('signup')
}
exports.post_signup = (req, res) => {
  // 모델과 연결하여, user 테이블에 회원가입 정보 insert
  // send({ result: true }) 형태로 응답할 예정
  User.post_signup(req.body, function () {
    res.send({ result: true })
  })
}

exports.signin = (req, res) => {
  res.render('signin')
}
exports.post_signin = (req, res) => {
  // 모델과 연결해서 실제로 회원이 존재하는지 검색
  User.post_signin(req.body, function (rows) {
    console.log(rows[0])
    if (rows.length > 0) res.send({ result: true, id: rows[0].id })
    else res.send({ result: false })
    // 성공 : { result: true, id: 숫자 }
    // 실패 : { result: false }
  })
}

exports.profile = (req, res) => {
  // req.body 에 { id (number) }가 있다.
  // id에 해당하는 user를 select 해야한다.
  // 한번에 정보를 보낼 수도 있지만, 만약 프로필 페이지를 이동한다고 하면,
  // id를 가지고 다른 많은 정보를 조회하는 등
  // 자세한 정보를 id를 통해 조회하는 방식을 사용하게되기 때문에
  // 여기서도 임시로 id만 보내는 요청을 이용하는 것이다.
  User.get_user(req.body.id, function (result) {
    console.log('profile', result)
    if (result.length > 0) res.render('profile', { data: result[0] })
    else res.redirect('/user/signin')
  })
}

exports.profile_edit = (req, res) => {
  const data = {
    ...req.body,
    id: req.params.id,
  }
  User.update_profile(data, function () {
    res.send({ result: true })
  })
}

exports.profile_delete = (req, res) => {
  User.delete_user(req.params.id, function () {
    res.send({ result: true })
  })
}
