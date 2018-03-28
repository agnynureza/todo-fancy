<template>
  <div class="container">
    <div class="row vertical-offset-100">
      <div class="knockout">To-Do Me !</div>
      <router-link :to="{name:'todo'}" >
        <div> 
          <fb:login-button style="width:200px" scope="public_profile,email" onlogin="checkLoginState();">  
          Log in here
          </fb:login-button>
      </div>
      </router-link>
    </div>
    <div class="footer">
      <i class="fas fa-book"></i>
      <div style="margin-bottom:15px">
       <h3>ABOUT</h3> 
      </div>
      <div>
        <p>Do you often feel overwhelmed by the amount of work you have to do?
          Do you find yourself missing deadlines? or </p> 
        <p>To-Do Lists are essential if you're going to beat work overload. When you don't use them effectively</p>
        <p>you'll appear unfocused and unreliable to the people around you.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  if (response.status === 'connected') {
    axios({
      method:"POST",
      url: `localhost:3000/users/signfb`,
      header: {
        fbtoken: response.authResponse.accessToken
      }
    })
    .then((userData) => {
      localStorage.setItem('token', userData.data.data.token)
      this.$route.push({
        path : '/todo'
      })
    })
    // Logged into your app and Facebook.
    testAPI();
  } else {
    // The person is not logged into your app or we are unable to tell.
    document.getElementById('status').innerHTML = 'Please log ' +
      'into this app.';
  }
}
// function checkLoginState() {
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// }

window.fbAsyncInit = function() {
  FB.init({
    appId      : '329149074261457',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.8' // use graph api version 2.8
  });

};

// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  
}
</script>

<style>
body{
  background: url(http://illsnapmatix.com/wp-content/uploads/2015/03/Screenshot-Original-20.png) no-repeat center center fixed;
  background-color: #444;    
  -webkit-background-size: auto auto;
  -moz-background-size: auto auto;
  -o-background-size: auto auto;
  background-size: auto auto;
}

.vertical-offset-100{
    padding-top:75px;
}
.knockout {
  background: url(http://apod.nasa.gov/apod/image/0603/coma_misti.jpg) -80px -80px;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-weight: bold;
  font-size: 50px;
  font-family: arial, helvetica;
  width: 600px;
  margin: 20px auto;
  text-align: center;
}

.footer{
  font-family: Monaco, "Bitstream Vera Sans Mono", monospace;
  margin-top: 240px;
  color:black ;
}
</style>
