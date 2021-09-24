<script>
  import { fly } from "svelte/transition";

  import { asideScreen } from "../store";
  import UserMenu from "./users/UserMenu.svelte";
  import UsersList from "./users/UsersList.svelte";
  import UpdateUsernameModal from "./users/UpdateUsernameModal.svelte";
  import RoomsList from "./rooms/RoomsList.svelte";
  import CreateRoomModal from "./rooms/CreateRoomModal.svelte";
</script>

<div class="sidebar">
  <div class="gradient">
    <svg height="0" width="0">
      <defs>
        <clipPath id="svgPath">
          <path fill="#FFFFFF" stroke="#000000" stroke-width="1.5794" stroke-miterlimit="10" d="M0 207.855V0H567V207.855C318.427 309.539 85.428 250.223 0 207.855Z"></path>
        </clipPath>
      </defs>
    </svg>
  </div>

  <header>
    <UserMenu />
    <RoomsList />
  </header>

  <aside>
    {#if ($asideScreen === 'updateUsername')}
      <div class="aside-modal" transition:fly="{{ y: 200, duration: 1000 }}">
        <UpdateUsernameModal />
      </div>
    {:else if ($asideScreen === 'createRoom')}
      <div class="aside-modal" transition:fly="{{ y: 200, duration: 1000 }}">
        <CreateRoomModal />
      </div>
    {/if}
    <UsersList />
  </aside>
</div>

<style lang="scss">
  .sidebar {
    height: 100vh;
    display: grid;
    grid-template-rows: 350px 1fr;
    overflow: hidden;

    .gradient {
      clip-path: url(#svgPath);
      position: absolute;
      width: $sidebarWidth;
      height: 264px;
      inset: 0 auto auto 0;
      background: $colorSecondary;
      //border-bottom-right-radius: 50% 100px;
      //border-bottom-left-radius: 50% 100px;
      z-index: 0;
      //clip-path: polygon(0% 25%, 0% 76%, 25% 90%, 40% 95%, 60% 95%, 75% 91%, 100% 79%, 100% 25%);
    }

    header {
      z-index: 1;
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    aside {
      position: relative;
      overflow: hidden;

      .aside-modal {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 10;
      }
    }
  }
</style>
