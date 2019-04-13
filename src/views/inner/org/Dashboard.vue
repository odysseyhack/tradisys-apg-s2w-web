<template>
  <div class="container-fluid">
    <h1 class="display-4">The Nuns With Guns</h1>
    <hr>
    <p class="h5">Overview</p>
    <b-card-group deck>
      <b-card title="In Progress" img-top>
        <b-card-text>
          <h2 class="text-primary font-weight-bold">
            {{tasks.progress}}
          </h2>
        </b-card-text>
      </b-card>

      <b-card title="Complete" img-top>
        <b-card-text>
          <h2 class="text-success font-weight-bold">
            {{tasks.complete}}
          </h2>
        </b-card-text>
      </b-card>

      <b-card title="Rejected" img-top>
        <b-card-text>
          <h2 class="text-warning font-weight-bold">
            {{tasks.rejected}}
          </h2>
        </b-card-text>
      </b-card>
    </b-card-group>
    <hr>
    <p class="h5">Current state</p>
    <b-progress height="2rem" class="mt-2" :max="1" show-value>
      <b-progress-bar
        show-progress animated
        :value="(tasks.progress / tasks.total)"
        variant="primary">
        {{tasks.progress}}
      </b-progress-bar>
      <b-progress-bar
        :value="(tasks.complete / tasks.total)"
        variant="success">
        {{tasks.complete}}
      </b-progress-bar>
      <b-progress-bar
        :value="(tasks.rejected / tasks.total)"
        variant="warning">
        {{tasks.rejected}}
      </b-progress-bar>
    </b-progress>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tasks: {
        progress: 12,
        complete: 17,
        rejected: 3,
        total: 32
      }
    }
  }
}
</script>

<style scoped>

</style>
