<script>
  import { socket } from "../../store.js"

  /*
   * Envoyer un message
   */
  let value = ''
  function submitForm(e) {
    e.preventDefault();
    socket.emit('message', value)
    value = ''
  }
</script>

<h1>Nouveau message</h1>

<form id="messageForm">
  <input bind:value={value} type="text">
  <input type="submit" on:click={submitForm} value="Envoyer">
</form>
