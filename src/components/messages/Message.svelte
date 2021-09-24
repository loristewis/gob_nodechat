<script>
  import { socket } from "../../store";
  import Avatar from "../users/sub-components/Avatar.svelte";
  export let previousItem
  export let item

  const previousTime = previousItem ? {
    date: new Date(previousItem.time).toLocaleDateString('fr-FR'),
    time: new Date(previousItem.time).toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'}),
    full: new Date(previousItem.time).toLocaleString('fr-FR')
  } : {}

  const {time, user, value} = item

  const currentTime = {
    date: new Date(time).toLocaleDateString('fr-FR'),
    time: new Date(time).toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'}),
    full: new Date(time).toLocaleString('fr-FR')
  }

  const self = socket.id === user.id
</script>

{#if (previousTime.date !== currentTime.date)}
  <div class="date">{currentTime.date}</div>
{/if}

{#if (previousTime.time !== currentTime.time)}
  <div class="date">{currentTime.time}</div>
{/if}

<div class="message" class:self>
  <Avatar>{user.initials}</Avatar>
  <div class="content"><span>{value}</span></div>
</div>

<style lang="scss">
  .date,
  .message {
    margin-bottom: 12px;
    color: white;
    word-break: break-all;
  }

  .date {
    text-align: center;
    //margin-left: 64px;

    &:first-child {
        margin-top: 40px;
    }
  }

  .message {
    display: flex;

    .content {
      margin-left: 16px;
      max-width: max-content;
      width: 100%;

      @include gradientBorder(2px);

      span {
        display: block;
        background-color: $colorDark;
        border-radius: 28px;
        height: 100%;
        padding: 12px 16px;
        overflow: hidden;
      }
    }

    &.self {
      flex-direction: row-reverse;

      .content {
        margin-left: 0;
        margin-right: 12px;
      }
    }

    &:last-child {
      margin-bottom: 40px;
      //margin-bottom: 0;
    }
  }
</style>
