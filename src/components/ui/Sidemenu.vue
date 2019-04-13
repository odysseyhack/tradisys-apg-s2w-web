<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <slot name="items"></slot>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
  .sidebar {
    height: 100%;
  }
</style>
