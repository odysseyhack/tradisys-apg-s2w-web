<template>
<div class="container-fluid">
  <div v-for="item in tasksOpen"
    :key="item.name" class="shadow bg-light rounded">
      <b-card
        no-body
        class="my-3"
      >
      <b-card-body>
        <b-row no-gutters>
          <b-col md="4">
            <b-card-img :src="item.thumbnail" class="rounded-1"></b-card-img>
          </b-col>
          <b-col md="3" class="p-1 ml-2">
            <b-card-title>
              {{item.name}}
            </b-card-title>
            <b-card-sub-title class="mb-2">
              Estimate: 2h 30min
            </b-card-sub-title>
            <b-card-text>
              {{item.description}}
            </b-card-text>
          </b-col>
        </b-row>
      </b-card-body>

      <b-card-footer>
        <b-button variant="danger" size="sm" @click="deleteTask(item.name)">Cancel</b-button>
      </b-card-footer>
    </b-card>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      deleteTask: 'org/deleteTask'
    })
  },
  computed: {
    ...mapGetters({
      tasksOpen: 'org/tasksOpen'
    })
  }
}
</script>

<style scoped>

</style>
