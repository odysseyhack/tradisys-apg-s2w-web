<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <!-- <ui-sidemenu color="rgb(37, 117, 252)">
        <div slot="items">
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Dashboard <span class="sr-only">(current)</span>
            </a>
          </li>
        </div>
      </ui-sidemenu>
      <div class="content col-lg-10">
        <transition
          name="fade"
          mode="out-in"
        >
          <router-view/>
        </transition>
      </div> -->
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
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
