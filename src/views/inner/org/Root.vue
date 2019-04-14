<template>
  <div class="container-fluid h-100">
    <div class="row h-100">
      <ui-sidemenu
        color="rgb(42, 189, 135)"
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
import { mapActions } from 'vuex'
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
          to: '/org'
        },
        {
          title: 'Open',
          to: '/org/tasks/open'
        },
        {
          title: 'In Progress',
          to: '/org/tasks/progress'
        },
        {
          title: 'Completed',
          to: '/org/tasks/completed'
        },
        {
          title: 'Closed',
          to: '/org/tasks/closed'
        },
        {
          title: 'Rejected',
          to: '/org/tasks/rejected'
        }
      ]
    }
  },
  created () {
    this.fetchTasksByOrgId('')
  },
  methods: {
    ...mapActions({
      fetchTasksByOrgId: 'org/fetchTasksByOrgId'
    })
  }
}
</script>

<style scoped lang="scss">

</style>
