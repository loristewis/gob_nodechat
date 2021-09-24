<script>
  import { asideScreen } from "../../../store";

  export let user
  export let darkMode = false
  export let userMenu = false

  import Avatar from "./Avatar.svelte";

  const openUpdateUsername = () => {
    if (userMenu) {
      if ($asideScreen === 'updateUsername') {
        $asideScreen = ''
      } else {
        $asideScreen = 'updateUsername'
      }
    }
  }
</script>

<div class="avatar-container" on:click={openUpdateUsername}>
  <Avatar>{user.initials}</Avatar>

  <div class="content" class:darkMode>
    <slot></slot>
  </div>
</div>

<style lang="scss">
  .avatar-container {
    display: grid;
    grid-template-columns: 48px 1fr;
    grid-column-gap: 16px;
    align-items: center;
    cursor: pointer;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 48px;
      max-width: max-content;
      width: 100%;
      overflow: hidden;

      &.darkMode {
        color: white;
      }
    }
  }
</style>
