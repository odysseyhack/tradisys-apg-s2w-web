<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <ui-sidemenu
        color="rgb(37, 117, 252)"
        :items="items"
      >
      </ui-sidemenu>
      <div class="content col-lg-10">
        <transition
          name="fade"
          mode="out-in"
        >
          <router-view/>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import UiSidemenu from '@/components/ui/Sidemenu.vue'

export default {
  components: {
    UiSidemenu
  },
  data () {
    return {
      items: [
        {
          title: 'Dashboard',
          to: '/customer'
        },
        {
          title: 'Tasks',
          to: '/customer/tasks'
        },
        {
          title: 'Completed tasks',
          to: '/customer/tasks/completed'
        },
        {
          title: 'Achievments',
          to: '/customer/achievments'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
