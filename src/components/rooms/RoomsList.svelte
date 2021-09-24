<script>
  import Room from "./Room.svelte";
  import { asideScreen } from "../../store";
  import Disappear from "../Disappear.svelte";

  const openCreateRoom = () => {
    if ($asideScreen === "createRoom") {
      $asideScreen = "";
    } else {
      $asideScreen = "createRoom";
    }
  };

  const rooms = [
    {
      name: "BDDI Gobelins",
      category: "Études",
      color: "hot"
    },
    {
      name: "Animal Crossing",
      category: "Jeux vidéo",
      color: "warm"
    },
    {
      name: "On mange où ?",
      category: "Nourriture",
      color: "secondary"
    }
  ];
</script>

<div class="rooms-list-container">
  <h1>Salons</h1>
  <div class="list-container">
    <div class="new-room" on:click={openCreateRoom}>
      <div class="icon"></div>
    </div>
    {#each rooms as room}
      <Room {room} />
    {/each}
  </div>
</div>

<style lang="scss">
  .list-container {
    height: 120px;
    display: grid;
    grid-template-columns: 32px 1fr 1fr 1fr;
    grid-column-gap: 16px;
  }

  h1 {
    color: $colorLight;
    font-weight: 600;
    font-size: 18px;
  }

  .new-room {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 16px;
    cursor: pointer;

    .icon {
      width: 24px;
      height: 24px;
      background: url('/assets/Add.svg') no-repeat;
    }
  }
</style>
