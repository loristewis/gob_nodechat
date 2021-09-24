<script>
  // import { openedRoom } from "../../store";
  export let room
  // const openRoom = () => {
  //   $openedRoom = 'default'
  // }
</script>

<!--on:click={openRoom}-->
<div class="room-container">
  <div class="category" style="{`background: var(--color-${room.color})`}">{room.category}</div>
  <div class="name">{room.name}</div>
</div>

<style lang="scss">
  .room-container {
    background-color: white;
    border-radius: 16px;
    padding: 16px;
    //cursor: pointer;
    cursor: default;
  }

  .category,
  .name {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 12px;
  }

  .category {
    display: inline-block;
    padding: 4px 8px;
    border-radius: 20px;
    color: $colorLight;
  }

  .name {
    color: $colorDark;
    opacity: 0.6;
  }
</style>
