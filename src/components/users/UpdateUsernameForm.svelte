<script>
  import { asideScreen, currentUser, socket, userConnected } from "../../store.js";
  import { requiredValidator } from "../../helpers/validation/validators"
  import { createFieldValidator } from "../../helpers/validation/validation"

  export let inModal

  const [ validity, validate ] = createFieldValidator(requiredValidator())

  let name = $currentUser.name !== 'Anonymous'
    ? $currentUser.name
    : null

  /*
   * Changer le nom d’utilisateur
   */
  function submitForm(e) {
    e.preventDefault();
    socket.emit('setUsername', name)
    socket.emit('getUsers') // TODO: enlever quand fix en back
    name = null
    $userConnected = true

    $asideScreen = ''
  }
</script>

<form id="usernameForm">
  <div class="input-border">
    <input
      type="text"
      placeholder="Nom d’utilisateur"
      bind:value={name}
      use:validate={name}
    >
  </div>

  <input
    disabled={!$validity.valid}
    type="submit"
    on:click={submitForm}
    value={inModal ? "Modifier" : "C’est parti !"}
  >
</form>

<style lang="scss">
  @include modalForm;
</style>
