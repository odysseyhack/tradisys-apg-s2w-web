<template>
  <div class="container-fluid">
    <div class="row">
      <ui-sidemenu></ui-sidemenu>
      <div class="ml-sm-auto col-lg-10 px-4">
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
