<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <ui-sidemenu color="rgb(189, 42, 70)">
        <div slot="items">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Dashboard <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="provider/list">
              List <span class="sr-only"></span>
            </router-link>
          </li>
        </div>
      </ui-sidemenu>
      <div class="col-lg-10">
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
