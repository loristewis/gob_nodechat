<script>
  // import { fade } from 'svelte/transition';
  // import { openedRoom } from "../store";

  import MessagesList from "./messages/MessagesList.svelte";
  import NewMessageForm from "./messages/NewMessageForm.svelte";
  import Sidebar from "./Sidebar.svelte";
  import RoomHeader from "./rooms/RoomHeader.svelte";
</script>

<Sidebar />
<main>
  <!--{#if $openedRoom === ''}-->
<!--    <WelcomeScreen></WelcomeScreen>-->
<!--  {:else }-->
<!--    <div transition:fade>-->
      <RoomHeader/>
      <MessagesList />
      <NewMessageForm />
<!--    </div>-->
<!--  {/if}-->
</main>

<style lang="scss">
  main {
    margin: 0;
    height: 100vh;
  }
</style>
