<script>
  import { requiredValidator } from "../../helpers/validation/validators"
  import { createFieldValidator } from "../../helpers/validation/validation"
  import { asideScreen } from "../../store";

  const [ validity, validate ] = createFieldValidator(requiredValidator())

  let name = null
  let category = null

  function submitForm(e) {
    e.preventDefault();
    $asideScreen = ''
  }
</script>

<form id="roomForm">
  <div class="input-border">
    <input
      type="text"
      bind:value={name}
      placeholder="Nom"
      use:validate={name}
    >
  </div>

  <div class="input-border">
    <input
      type="text"
      bind:value={category}
      placeholder="Catégorie"
      use:validate={category}
    >
  </div>

  <input
    disabled={!$validity.valid}
    type="submit"
    on:click={submitForm}
    value="Ajouter"
  >
</form>

<style lang="scss">
  @include modalForm;
</style>
