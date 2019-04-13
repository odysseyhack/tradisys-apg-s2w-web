<template>
  <nav class="col-md-2 d-none d-md-block sidebar" :style="style">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <slot name="items"></slot>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#000'
    }
  },
  computed: {
    style () {
      return {
        backgroundColor: this.color
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .sidebar {
    height: 100%;

    .nav {
      a {
        color: white;
      }
    }
  }
</style>
