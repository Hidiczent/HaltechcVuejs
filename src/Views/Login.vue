<template>
  <div class="container">
    <div class="login-section">
      <form>
        <h2 class="Text-Header">Login</h2>
        <div class="input-group">
          <label for="email">Email or Phone Number</label>
          <input type="text" id="email" name="email" />
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div class="options">
          <label><input type="checkbox" name="remember" /> Remember me</label>
          <a href="#">Forget Password?</a>
        </div>
        <button type="submit">Login</button>
        <div class="or">or</div>
        <div class="social-login">
          <a href=""
            ><img
              src="/Facebook_Logo_2023.png"
              alt="Facebook"
              class="social-icon"
          /></a>
          <a href=""
            ><img
              src="/Logo-google-icon-PNG.png"
              alt="Google"
              class="social-icon"
          /></a>
        </div>
        <div class="create-account"><a href="#">Create New Account?</a></div>
        <div class="description">
          @ 2024 by KhodThay Company. All rights reserved. Term, Privacy,
          Copyrights & Cookies
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  height: 100%;
  background-color: #f5f5f5;
}

.container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.login-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
}

form {
  max-width: 500px;
  width: 100%;
  background: white;
  padding: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}

.Text-Header {
  display: flex;
  justify-content: start;
  margin-bottom: 20px;
  color: black;
  font-size: 30px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: flex;
  justify-content: start;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  height: 30px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 15px;
  background-color: #f5f5f5;
}

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

button {
  width: 100%;
  height: 45px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #006d74;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.social-login {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}

.social-icon {
  width: 40px;
  height: 40px;
  margin: 0 10px;
}

.or {
  text-align: center;
  margin: 20px 0;
  font-size: 16px;
  color: #777;
}

.create-account,
.description {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
}

.description {
  font-size: 12px;
}

/* Media Queries for Responsive Design */
@media (max-width: 768px) {
  form {
    padding: 20px;
  }
  .Text-Header {
    font-size: 24px;
  }
  .input-group input {
    height: 40px;
  }
  button {
    height: 50px;
    font-size: 14px;
  }
  .social-icon {
    width: 30px;
    height: 30px;
  }
  .or {
    font-size: 14px;
  }
  .create-account,
  .description {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  form {
    padding: 10px;
  }
  .Text-Header {
    font-size: 20px;
  }
  .input-group input {
    height: 35px;
  }
  button {
    height: 45px;
    font-size: 12px;
  }
  .social-icon {
    width: 25px;
    height: 25px;
  }
  .or {
    font-size: 12px;
  }
  .create-account,
  .description {
    font-size: 14px;
  }
}
</style>
