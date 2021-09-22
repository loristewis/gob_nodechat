<script>
  import { socket } from "../../store.js"

  let usersList = []
  $: anonymousCount = usersList.filter((el) => el.name === "Anonymous").length

  /*
	 * Récupérer les utilisateurs au lancement
	 */
  socket.emit('getUsers')
  socket.on('users', (users) => {
    // console.log('users', users)
    usersList = users
  })

  /*
   * Récupérer chaque nouvel utilisateur
   */
  socket.on("userConnection", addUser)

  function addUser(user) {
    usersList = [...usersList, user]
    console.group("Arrivée")
    console.info(user)
    console.groupEnd()
    // console.log('usersList', usersList)
  }

  /*
   * Enlever les utilisateurs déconnectés
   */
  socket.on('userDisconnection', removeUser)

  function removeUser(user) {
    usersList = usersList.filter(item => item.id !== user.id);

    // console.group("Départ")
    // console.log(user, "est parti")
    // console.log(usersList.filter((el) => el.id === user.id)[0])
    // console.groupEnd()
  }

  /*
   * updateUsername
   */
  socket.on('updateUsername', updateUser)

  function updateUser(newUser) {
    console.log('newUser', newUser.id)
    console.log('newUser', newUser.name)
    console.log(usersList.find(el => el.id === newUser.id).id)

    usersList.find(el => el.id === newUser.id).name = newUser.name
    usersList = usersList
    console.log(usersList)
  }
</script>

<div class="users-list-container">
  <h1>Utilisateurs</h1>
  <ul>
    {#each usersList.filter((el) => el.name !== "Anonymous") as item}
      <li>
        {item.name}
      </li>
    {/each}

    <li>
      {#if anonymousCount === 1}
        {anonymousCount} anonyme
      {:else if anonymousCount >= 2}
        {anonymousCount} anonymes
      {/if}
    </li>

  </ul>
</div>

<style>
  .users-list-container {
    border: 1px solid red;
  }

  li {
    margin-bottom: 12px;
  }
</style>
