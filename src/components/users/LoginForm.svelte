<script>
  import { asideScreen, socket, userConnected } from "../../store.js";
  import { requiredValidator } from "../../helpers/validation/validators"
  import { createFieldValidator } from "../../helpers/validation/validation"

  export let inModal

  const [ validity, validate ] = createFieldValidator(requiredValidator())

  let name = null

  /*
   * Changer le nom d’utilisateur
   */
  function submitForm(e) {
    e.preventDefault();
    socket.emit('setUsername', name)
    socket.emit('getUsers') // TODO: enlever quand fix en back
    name = null
    $userConnected = true

    if (inModal) $asideScreen = ''
  }
</script>

<form id="usernameForm">
  <div class="input-border">
    <input
      type="text"
      bind:value={name}
      placeholder="Nom d'utilisateur"
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
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .input-border {
    margin-bottom: 30px;

    @include gradientBorder(4px);
  }

  input[type="text"] {
    margin: 0;
    padding: 0.8rem;
    background: $colorSecondary;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    opacity: 1;
    text-align: center;
    border: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      background: $colorSecondary;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 1;
    }
  }

  @include button;
</style>
