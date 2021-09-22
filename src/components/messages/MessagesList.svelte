<script>
  import { socket } from "../../store.js"
  import { beforeUpdate, afterUpdate } from 'svelte';

  let messagesList = []

  let container;
  let autoscroll;

  /*
	 * Récupérer les messages au lancement
	 */
  socket.emit('getMessages')
  socket.on('messages', (messages) => {
    console.log('messages', messages)
    messagesList = messages
  })

  /*
   * Récupérer chaque nouveau message
   */
  socket.on("message", messageListener)

  function messageListener(message) {
    // console.log('message', message)
    messagesList = [...messagesList, message]
    console.log('messagesList', messagesList)
  }

  /*
   * Autoscroll
   */
  beforeUpdate(() => {
    autoscroll = container && (container.offsetHeight + container.scrollTop) > (container.scrollHeight - 20);
  });

  afterUpdate(() => {
    if (autoscroll) container.scrollTo(0, container.scrollHeight);
  });
</script>

<div class="messages-list-container" bind:this={container}>
  <h1>Messages</h1>
  <ul>
    {#each messagesList as item}
      <li>
        {item.time} - {item.user.name}
        <br>
        {item.value}
      </li>
    {/each}
  </ul>
</div>

<style>
  .messages-list-container {
    border: 1px solid #00C158;
    height: 100vh;
    overflow-y: scroll;
  }

  li {
    margin-bottom: 12px;
  }
</style>
