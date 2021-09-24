<script>
  let user = {
    name: '',
    loggedIn: false
  };

  function toggle() {
    if (user.loggedIn) user.name = ''

    user.loggedIn = !user.loggedIn;
  }
</script>

<div class="container">
  <h1>Accueil</h1>

  <input bind:value={user.name}>
  <h1>{user.name}</h1>

  {#if user.loggedIn}
    <button on:click={toggle}>
      Log out
    </button>
  {:else if user.name !== ''}
    <button on:click={toggle}>
      Log in
    </button>
  {/if}
</div>

<style>
</style>
