<script>
  import { asideScreen } from "../store";
  export let modalTitle

  const closeModal = () => {
    $asideScreen = ''
  }
</script>

<div class="container">
  <header>
    <button on:click={closeModal}>
      <div class="image-hover"></div>
      <span class="hidden">Fermer</span>
    </button>
    <h3>{modalTitle}</h3>
  </header>
  <slot></slot>
</div>

<style lang="scss">
  header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;

    h3 {
      margin: 0 0 0 8px;
      color: $colorH1;
      font-weight: 600;
      font-size: 18px;
    }
  }

  .container {
    //display: flex;
    //align-items: center;
    //justify-content: center;
    padding: 24px 40px;
    height: 100%;
    border-radius: 16px 16px 0 0;
    background: $colorLight;
  }

  button {
    width: 24px;
    height: 24px;
    padding: 0;
    margin: 0;
    border: none;
    background: url('/assets/chevrons-left.svg') no-repeat;
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
