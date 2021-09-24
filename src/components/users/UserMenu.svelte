<script>
  import { currentUser } from "../../store.js";
  import AvatarComponent from "./sub-components/AvatarComponent.svelte";
  import Status from "./sub-components/Status.svelte";

  const online = true
  const full = true
</script>

<div class="user-menu">
  <AvatarComponent
    user={$currentUser}
    darkMode
    userMenu
  >
    <h2>{$currentUser.name}</h2>
    <Status {online} {full}/>
  </AvatarComponent>
</div>

<style lang="scss">
  h2 {
    margin: 0;
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
  }
</style>
