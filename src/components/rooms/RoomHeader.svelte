<script>
  import Disappear from "../Disappear.svelte";
  const room = {
    name: 'BDDI Gobelins',
    category: 'Études',
    color: 'hot'
  }
</script>

<div class="room-header">
  <div class="border-bottom">
    <div class="category" style="{`background: var(--color-${room.color})`}">{room.category}</div>
    <div class="name">{room.name}</div>
  </div>
  <Disappear position="top" color="dark"></Disappear>
</div>


<style lang="scss">
  .room-header {
    position: fixed;
    inset: 0 0 auto $sidebarWidth;
    padding: 24px 48px 0;
    //background-color: $colorDark;
  }

  .category,
  .name {
    font-weight: 600;
    color: $colorLight;
  }

  .category {
    display: inline-block;
    margin-bottom: 16px;
    padding: 4px 8px;
    border-radius: 20px;
    font-size: 12px;
  }

  .name {
    font-size: 24px;
  }

  .border-bottom {
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  }
</style>
