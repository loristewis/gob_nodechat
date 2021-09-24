<script>
  import { socket } from "../../store.js";
  import { requiredValidator } from "../../helpers/validation/validators";
  import { createFieldValidator } from "../../helpers/validation/validation";
  import Disappear from "../Disappear.svelte";

  const [validity, validate] = createFieldValidator(requiredValidator());

  let value = null;

  /*
   * Envoyer un message
   */
  function submitForm(e) {
    e.preventDefault();
    socket.emit("message", value);
    value = null;
  }
</script>

<form id="messageForm">
  <Disappear position="bottom" color="dark"></Disappear>

  <div class="field">
    <input
      type="text"
      bind:value={value}
      placeholder="Message"
      use:validate={value}
    >

    <button
      disabled={!$validity.valid}
      type="submit"
      on:click={submitForm}
    >
      <div class="image-hover"></div>
      <span class="hidden">Envoyer</span>
    </button>
  </div>
</form>

<style lang="scss">
  form {
    position: fixed;
    inset: auto 0 0 $sidebarWidth;
    padding: 0 48px 40px;
  }

  .field {
    display: grid;
    grid-template-columns: 1fr 24px;
    grid-column-gap: 12px;
    width: calc(100vw - #{$sidebarWidth} - 96px);
    border-radius: 12px;
    padding: 12px 16px;
    background: white;
    height: 48px;
  }

  input[type="text"] {
    border: none;
    font-size: 16px;
    padding: 0;
    height: 24px;

    &:focus {
      outline: none;
    }
  }

  button[type="submit"] {
    width: 24px;
    height: 24px;
    padding: 0;
    margin: 0;
    border: none;
    background: url('/assets/chevrons-right.svg') no-repeat;
    cursor: pointer;

    .hidden {
      display: none;
    }

    .image-hover {
      width: 24px;
      height: 24px;
      background: url('/assets/chevrons-right-hover.svg') no-repeat;
      opacity: 0;
      transition: opacity 0.2s ease-in-out;

      &:hover {
        opacity: 1;
      }
    }

    &:disabled {
      opacity: 0;

      &:hover {
        opacity: 0;
      }
    }
  }
</style>
