<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <ui-sidemenu color="rgb(189, 42, 70)">
        <div slot="items">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="feather feather-home">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Dashboard <span class="sr-only">(current)</span>
            </a>
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
