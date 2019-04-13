<template>
  <nav class="col-md-2 d-none d-md-block sidebar px-0" :style="style">
    <div class="sidebar-sticky">
      <div class="items shadow-none m-1 p-1 rounded">
        <p class="h6 text-white-50 pl-1">Menu</p>
        <ul class="nav flex-column">
          <li v-for="item in items" class="nav-item" :key="item.to">
            <router-link class="nav-link" active-class="active" :to="item.to" exact>
              {{item.title}} <span class="sr-only"></span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#000'
    },
    items: {
      type: Array,
      default: () => []
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

    .items {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .nav {
      a {
        color: white;

        &.active {
          transition: background-color 0.3s ease-in-out;
          border-radius: 0.25rem;
          background-color: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
</style>
