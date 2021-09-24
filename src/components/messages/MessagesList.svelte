<script>
  import { messagesList, socket, updateMessagesList } from "../../store.js";
  import { beforeUpdate, afterUpdate } from "svelte";
  import Message from "./Message.svelte";
  import { normalizeMessage } from "../../helpers/normalizers";

  let container;
  let autoscroll;

  /* Récupérer les messages au lancement */
  socket.emit("getMessages");
  socket.on("messages", (messages) => {
    messages.forEach(message => {
      message = normalizeMessage(message)
    })

    updateMessagesList(messages)
  });

  /* Récupérer chaque nouveau message */
  socket.on("message", messageListener);

  function messageListener(message) {
    message = normalizeMessage(message)

    const newList = [...$messagesList, message];
    updateMessagesList(newList)
  }

  /* Autoscroll */
  beforeUpdate(() => {
    autoscroll = container && (container.offsetHeight + container.scrollTop) > (container.scrollHeight - 20);
  });

  afterUpdate(() => {
    if (autoscroll) container.scrollTo(0, container.scrollHeight);
  });
</script>

<div class="messages-list-container" bind:this={container}>
  {#each $messagesList as item, index}
    <Message item={item} previousItem={$messagesList[index-1]} />
  {/each}
</div>

<style lang="scss">
.messages-list-container {
  height: calc(100vh - 212px);
  margin-top: 124px;
  //height: calc(100vh - 128px);
  overflow-y: scroll;
  padding: 0 48px;
}
</style>
