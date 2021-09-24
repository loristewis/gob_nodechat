<script>
  export let position
  export let color
</script>

<div class={`gradient ${position} ${color}`}></div>

<style lang="scss">
  .gradient {
    height: 60px;

    &.bottom.dark {
      background: linear-gradient(to top, #263142 0, rgba(255, 255, 255, 0) 100%);
    }

    &.top.dark {
      background: linear-gradient(to bottom, #263142 0, rgba(255, 255, 255, 0) 100%);
    }

    &.bottom.light {
      background: linear-gradient(to top, #ffffff 0, rgba(255, 255, 255, 0) 100%);
    }

    &.top.light {
      background: linear-gradient(to bottom, #ffffff 0, rgba(255, 255, 255, 0) 100%);
    }
  }
</style>
