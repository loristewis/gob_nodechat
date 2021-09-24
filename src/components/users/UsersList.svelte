<script>
  import { socket, updateUsersList, usersList } from "../../store.js";
  import AvatarComponent from "./sub-components/AvatarComponent.svelte";
  import { normalizeUser } from "../../helpers/normalizers";
  import Status from "./sub-components/Status.svelte";
  import Disappear from "../Disappear.svelte";

  $: anonymousCount = $usersList.filter((el) => el.name === "Anonymous").length;

  /* Récupérer chaque nouvel utilisateur */
  socket.on("userConnection", addUser);

  function addUser(user) {
    normalizeUser(user);
    $usersList = [...$usersList, user];
  }

  /* Enlever les utilisateurs déconnectés */
  socket.on("userDisconnection", removeUser);

  function removeUser(offlineUser) {
    let realOfflineUser;
    $usersList.map((user) => {
      if (user.id === offlineUser.id) {
        realOfflineUser = user;
      }
    });

    if (realOfflineUser.name === "Anonymous") {
      // Si l’utilisateur est anonyme, on le supprime
      $usersList = $usersList.filter(item => item.id !== offlineUser.id);
    } else {
      // Si l’utilisateur a un nom, on modifie son statut
      const newUsersList = $usersList.map((user) => {
        return user.id === offlineUser.id ? {
          ...user,
          status: false
        } : user;
      });

      updateUsersList(newUsersList);
    }
  }

  /* updateUsername */
  socket.on("updateUsername", updateUser);

  function updateUser(newUser) {
    normalizeUser(newUser);

    const newUsersList = $usersList.map((user) => {
      return user.id === newUser.id ? {
        ...user,
        initials: newUser.name.substring(0, 2),
        name: newUser.name
      } : user;
    });
    updateUsersList(newUsersList);
  }
</script>

<div class="users-list-container">
  <header>
    <h1>En ligne</h1>
<!--    <Disappear position="top" color="light"></Disappear>-->
  </header>

  <div class="list-container">
    {#each $usersList.filter((el) => el.name !== "Anonymous") as user}
      <div>
        <AvatarComponent {user}>
          <div class="name-container">
            <h2>{user.name}</h2><Status online={user.status} full={false}/>
          </div>
        </AvatarComponent>
      </div>
    {/each}
  </div>

  <p>
    {#if anonymousCount === 1}
      ...et {anonymousCount} utilisateur anonyme
    {:else if anonymousCount >= 2}
      ...et {anonymousCount} utilisateurs anonymes
    {/if}
  </p>

<!--  <Disappear position="bottom" color="light"></Disappear>-->
</div>

<style lang="scss">
  .users-list-container {
    height: 100%;
    border-radius: 16px 16px 0 0;
    padding: 0 40px 24px;
    overflow: scroll;
    background: $colorLight;

    //.scroll-container {
    //  height: 100%;
    //  max-height: 100%;
    //  padding: 0 40px;
    //  overflow: scroll;
    //}

    header {
      position: sticky;
      top: 0;
      padding: 24px 0;
      background-color: $colorLight;

      h1 {
        margin: 0;
        color: $colorH1;
        font-weight: 600;
        font-size: 18px;
      }
    }

    h2 {
      font-size: 14px;
      font-weight: 400;
      margin-right: 8px;
    }

    div:not(:first-child) {
      margin-top: 12px;
    }

    li {
      margin-bottom: 12px;
    }

    .name-container {
      display: flex;
      align-items: baseline;
    }

    .list-container {
      margin-top: 50px;
    }
  }
</style>
