<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <ui-sidemenu color="rgb(42, 189, 135)">
        <div slot="items">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/org" exact>
              Dashboard <span class="sr-only"></span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/org/tasks/open" exact>
              Open <span class="sr-only"></span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/org/tasks/progress" exact>
              In Progress <span class="sr-only"></span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/org/tasks/completed" exact>
              Completed <span class="sr-only"></span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/org/tasks/rejected" exact>
              Rejected <span class="sr-only"></span>
            </router-link>
          </li>
        </div>
      </ui-sidemenu>
      <div class="content col-lg-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import UiSidemenu from '@/components/ui/Sidemenu.vue'

export default {
  components: {
    UiSidemenu
  }
}
</script>

<style scoped lang="scss">

</style>
