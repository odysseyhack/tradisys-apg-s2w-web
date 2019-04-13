<template>
  <div class="container-fluid">
    <h1 class="display-4">{{ user.firstName}} {{ user.lastName}}</h1>
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
            {{user.completed}}
          </h2>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        firstName: 'Rob',
        lastName: 'Tennesy',
        karma: 216,
        tokens: 31,
        completed: 7
      }
    }
  }
}
</script>

<style scoped>

</style>
