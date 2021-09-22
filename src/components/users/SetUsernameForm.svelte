<script>
  import { socket } from "../../store.js"

  /*
   * Envoyer un message
   */
  let name = ''
  function submitForm(e) {
    e.preventDefault();
    socket.emit('setUsername', name)
    socket.emit('getUsers') // TODO: enlever quand fix en back
    name = ''
  }
</script>

<h1>Nom d’utilisateur</h1>

<form id="usernameForm">
<!--  <label for="usernameInput">Send me your name:</label>-->
<!--  id="usernameInput"-->
  <input bind:value={name} type="text">
  <input type="submit" on:click={submitForm} value="Envoyer">
</form>
