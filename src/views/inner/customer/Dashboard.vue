<template>
  <div class="container-fluid">
    <h1 class="display-4">{{ user.firstName}} {{ user.lastName}}</h1>
    <div class="progress level">
      <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0"
           aria-valuemax="100"></div>
    </div>
    <span class="level-info"> 8 lvl</span>
    <hr>
    <p class="h5">Overview</p>
    <b-card-group deck>
      <b-card
        header="Karma"
        border-variant="warning"
        header-border-variant="warning"
      >
        <b-card-text>
          <h2 class="font-weight-bold">
            {{user.karma}}
          </h2>
        </b-card-text>
      </b-card>

      <b-card
        header="Vote tokens"
        border-variant="primary"
        header-border-variant="primary"
      >
        <b-card-text>
          <h2 class="font-weight-bold">
            {{user.tokens}}
          </h2>
        </b-card-text>
      </b-card>

      <b-card
        header="Completed"
        border-variant="success"
        header-border-variant="success"
      >
        <b-card-text>
          <h2 class="font-weight-bold">
            {{tasksClosed.length}}
          </h2>
        </b-card-text>
      </b-card>

      <b-card
        header="Hours"
        border-variant="info"
        header-border-variant="info"
      >
        <b-card-text>
          <h2 class="font-weight-bold">
            {{user.time}}
          </h2>
        </b-card-text>
      </b-card>
    </b-card-group>
    <hr>
    <p class="h5">Current tasks</p>

    <template v-if="tasksProgress.length > 0">
      <div
        v-for="item in tasksProgress"
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
              <b-col md="8" class="pl-2">
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
            <b-button @click="completeTask(item.name)" variant="success" size="sm">Complete</b-button>
          </b-card-footer>
        </b-card>
      </div>
    </template>
    <template v-else>
      <div class="shadow-sm bg-light rounded">
        <b-card no-body class="text-center">
          <div class="text-black-50 p-3">
            There are no tasks yet
          </div>
        </b-card>
      </div>
    </template>

  </div>
</template>

<script>
import { WavesApi } from '@/api'
import { mapGetters, mapActions } from 'vuex'
import { balance } from '@/api/waves'

export default {
  data () {
    return {
      user: {
        firstName: 'Rob',
        lastName: 'Tennesy',
        karma: 0,
        tokens: 0,
        time: 0
      }
    }
  },
  methods: {
    ...mapActions({
      completeTask: 'customer/completeTask'
    })
  },
  async created () {
    const {
      balances: [karma = { balance }, voting = { balance }]
    } = await WavesApi.balance(this.customer.address)

    this.user.karma = karma.balance
    this.user.tokens = voting.balance
  },
  computed: {
    ...mapGetters({
      customer: 'user',
      tasksProgress: 'customer/tasksProgress',
      tasksClosed: 'customer/tasksClosed'
    })
  }
}
</script>

<style lang="scss" scoped>

  .level {
    height: 2px;
    width: 25%;
  }

  .level-info {
    margin-left: 5px;
    color: #929292;
  }

</style>
