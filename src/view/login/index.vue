<template>
  <div class="text-center login">
    <form class="form-sign-in">
      <img class="mb-4" src="@/assets/images/login/bootstrap-social.png" alt="" width="72" height="72">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">{{$t('login.sign_in')}}</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
    </form>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped>
  .form-sign-in {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }

  .form-sign-in .checkbox {
    font-weight: 400;
  }

  .form-sign-in .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }

  .form-sign-in .form-control:focus {
    z-index: 2;
  }

  .form-sign-in input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .form-sign-in input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .login {
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
  }

</style>