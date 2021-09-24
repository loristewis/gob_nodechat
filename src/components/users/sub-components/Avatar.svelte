<div class="avatar">
  <span class="edit"></span>
  <span class="initials">
    <slot></slot>
  </span>
</div>

<style lang="scss">
  :global(.user-menu) {
    :global(.avatar-container) {
      .avatar {
        position: relative;
      }

      .initials {
        position: absolute;
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
      }

      .edit {
        position: absolute;
        width: 20px;
        height: 20px;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
        background: url('/assets/clarity_pencil-line.svg') no-repeat;
      }

      &:hover {
        .initials {
          opacity: 0;
        }

        .edit {
          opacity: 1;
        }
      }
    }
  }

  .avatar {
    width: 48px;
    min-width: 48px;
    height: 48px;
    border-radius: 50%;

    @include gradientBorder(2px);

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $colorLight;

    font-size: 16px;
    font-weight: 400;

    span {
      background: $colorSecondary;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 1;
      text-transform: uppercase;
    }
  }
</style>
