const User      = require('../models/User')
const bcrypt    = require('bcrypt')
const jwt       = require('jsonwebtoken')
const saltRound = 10
const FB        = require('fb')
FB.api('/me', function(response) {
  console.log('Successful login for: ' + response.name);
  document.getElementById('status').innerHTML =
    'Thanks for logging in, ' + response.name + '!';
});
module.exports = {
    signInFb : (req,res) => {
      FB.api('me', { fields: ['id' , 'name', 'email', 'gender', 'picture'], access_token: req.headers.fb_token }, function (userFbData) {
          if(userFbData) {
              User.create({
                  id_fb : userFbData.id,
                  name  : userFbData.name,
                  username : null,
                  email : userFbData.email,
                  password : null,
                  gender: userFbData.gender,
                  picture : userFbData.picture.data.url
              },(err, newUser) => {
                  if (err) {
                      User.findOne({
                          email : userFbData.email,
                          id_fb : userFbData.id
                      })
                      .exec()
                      .then((user) => {
                          let token   = jwt.sign({id : newUser._id}, process.env.SECRET)
                          res.status(200).json({
                              message : `Login with facebook success !`,
                              data    : ({
                                  id   : user._id,
                                  id_fb : user.id_fb,
                                  name  : user.name,
                                  email : user.email,
                                  gender : user.gender,
                                  picture : user.picture,
                                  token : token
                              })
                          })
                      })
                      .catch((err) => {
                          res.status(500).json({
                              message : `Failed to connect with facebook ! ${err}`,
                              data    : {}
                          })
                      })
                  } else {
                      let token   = jwt.sign({id : newUser._id}, process.env.SECRET)

                      res.status(200).json({
                          message : `Login with facebook success !`,
                          data    : ({
                              id   : newUser._id,
                              id_fb : newUser.id_fb,
                              name  : newUser.name,
                              email : newUser.email,
                              gender : newUser.gender,
                              picture : newUser.picture,
                              token : token
                          })
                      })
                  }
              })
          } else {
              res.status(500).json({
                  message : `Failed to connect with facebook !`,
                  data    : {}
              })
          }
      })
  }
}