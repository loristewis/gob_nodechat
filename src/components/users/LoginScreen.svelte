<script>
  import SetUsernameForm from "./LoginForm.svelte";
</script>

<div class="login-screen-container">
  <div class="gradient"></div>
  <div class="box">
    <img src="assets/Logo.svg" alt="TalkHeat!">
    <SetUsernameForm />
  </div>
</div>

<style lang="scss">
  .login-screen-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;

    img {
      max-width: 400px;
      margin-bottom: 48px;
    }

    .gradient {
      position: absolute;
      inset: 0 0 50vh;
      background: $colorSecondary;
      border-bottom-right-radius: 50% 100px;
      border-bottom-left-radius: 50% 100px;
      z-index: 0;
    }

    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 580px;
      height: 348px;
      background: $colorLight;
      border-radius: 16px;
      z-index: 1;
    }
  }
</style>
