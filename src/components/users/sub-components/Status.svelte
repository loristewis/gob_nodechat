<script>
  export let online = false
  export let full = false
</script>

<div>
  {#if (online)}
    {#if (full)}<p>En ligne</p>{/if}
    <div class="dot online"></div>
  {:else}
    {#if (full)}<p>En ligne</p>{/if}
    <div class="dot offline"></div>
  {/if}
</div>

<style lang="scss">
  div {
    display: flex;
    align-items: baseline;

    p {
      font-size: 12px;
      font-weight: 400;
      margin: 0 4px 0 0;
    }

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;

      &.online {
        background: $colorOnline;
      }

      &.offline {
        background: $colorOffline;
      }
    }
  }
</style>
